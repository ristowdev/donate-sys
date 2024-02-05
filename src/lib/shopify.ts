import {SHOPIFY_URL} from '../../config';

interface ShopifyFetchParams {
    query: string;
    variables?: Record<string, any>;
  }
  
  export async function shopifyFetch({ query, variables }: ShopifyFetchParams) {
    const endpoint = SHOPIFY_URL+'/api/2023-01/graphql.json';
    const key = '469f8031cb0e7c44244bf72084ca732e';
  
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key,
        },
        body: JSON.stringify({ query, variables }),
      });
  
      return {
        status: result.status,
        body: await result.json(),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: 500,
        error: 'Error receiving data',
      };
    }
  }
  