import { initDonation } from './initDonation';
import { shopifyFetch } from './shopify';

export async function addToCartAndCheckout(
    productID: string, 
    quantity: number, 
    message: string, 
    isAnonymous: boolean,
    fundriaserId: string,
    amount: number,
    hasInit: boolean
) {
  try {
    console.log('Attempting to add product to cart. Product ID:', productID);
    // print message and anonymous status
    

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
              webUrl
            }
          }
        }
      `,
    });

    const { checkout } = createCheckoutResponse.body.data.checkoutCreate;


    // i need to fetch backend with checkout url here 


    if(hasInit){
      const backendFetchResult = await initDonation({
        fundraiser_id: fundriaserId,
        amount: amount,
        is_anonymous: isAnonymous,
        message: message,
        checkout_id: checkout.id,
      });

      if (backendFetchResult.status !== 200) {
        console.log('Error fetching backend with checkout ID:', backendFetchResult.error);
        return;
      }
    }


    // Step 3: Add the product to the checkout
    const addToCartResponse = await shopifyFetch({
      query: `
        mutation {
          checkoutLineItemsAdd(checkoutId: "${checkout.id}", lineItems: [{variantId: "${variantID}", quantity: ${quantity}}]) {
            checkout {
              id
              webUrl
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
      const { checkout: updatedCheckout, checkoutUserErrors } = addToCartResponse.body.data.checkoutLineItemsAdd;

      if (checkoutUserErrors && checkoutUserErrors.length > 0) {
        console.log('Error adding product to cart:', checkoutUserErrors);
      } else {
        console.log('Product successfully added to cart. Redirecting to checkout.');
        // Step 4: Redirect to checkout
        window.location.href = updatedCheckout.webUrl;
      }
    } else {
      console.log('Error adding product to cart:', addToCartResponse.body.errors);
    }
  } catch (error) {
    console.error('Error adding to cart and proceeding to checkout:', error);
  }
}
