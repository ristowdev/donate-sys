import { BASE_URL } from "../../config";

export async function initDonation(data: any) {
    try { 
      
      const result = await fetch(BASE_URL+'/global/init-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      return {
        status: result.status,
        body: await result.json(),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: 500,
        error: 'Error sending data to backend',
      };
    }
  }
  