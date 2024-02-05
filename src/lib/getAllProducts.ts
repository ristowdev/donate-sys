// utils/getAllProducts.ts
import { shopifyFetch } from './shopify';

export async function getAllProducts() {
  return shopifyFetch({
    query: `
      {
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              variants(first: 1) {
                edges {
                  node {
                    id
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}
