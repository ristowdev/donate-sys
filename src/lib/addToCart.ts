// shopifyAPI.ts

import { shopifyFetch } from './shopify';

export async function addToCart(productID: string, quantity: number) {
  try {
    // Step 1: Retrieve product variants
    const getProductResponse = await shopifyFetch({
      query: `
        query {
          product(id: "${productID}") {
            id
            variants(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      `,
    });

    const { variants } = getProductResponse.body.data.product;

    if (!variants || variants.edges.length === 0) {
      console.log('Error: No variants found for the product.');
      return;
    }

    const variantID = variants.edges[0].node.id;

    // Step 2: Create a new checkout
    const createCheckoutResponse = await shopifyFetch({
      query: `
        mutation {
          checkoutCreate(input: {}) {
            checkout {
              id
            }
          }
        }
      `,
    });

    const { checkout } = createCheckoutResponse.body.data.checkoutCreate;

    // Step 3: Add the product to the checkout
    const addToCartResponse = await shopifyFetch({
      query: `
        mutation {
          checkoutLineItemsAdd(checkoutId: "${checkout.id}", lineItems: [{
            variantId: "${variantID}",
            quantity: ${quantity}
          }]) {
            checkout {
              id
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `,
    });

    // Check if the product was successfully added to the cart
    if (addToCartResponse.body.data && addToCartResponse.body.data.checkoutLineItemsAdd) {
      const { checkout } = addToCartResponse.body.data.checkoutLineItemsAdd;
      console.log('Product successfully added to cart. Checkout ID:', checkout.id);
      return checkout.id; // Return the cart ID
    } else {
      console.log('Error adding product to cart:', addToCartResponse.body.errors);
      throw new Error('Error adding product to cart');
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
}
