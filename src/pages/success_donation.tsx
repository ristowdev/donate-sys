import Loading from '@/components/loading';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SuccessDonation = () => {
  const router = useRouter();
  const { id, amount, fnn, emma, aanm, payment_intent, payment_intent_client_secret, redirect_status } = router.query;

  // Your component logic here
  console.log('id:', id);
  console.log('amount:', amount);
  console.log('fnn:', fnn);
  console.log('emma:', emma);
  console.log('aanm:', aanm);
  console.log('payment_intent:', payment_intent);
  console.log('payment_intent_client_secret:', payment_intent_client_secret);
  console.log('redirect_status:', redirect_status);


    useEffect(() => {
        const fetchData = async (id:string, amount:number, fnn:string, emma:string, aanm:string, payment_intent:string, payment_intent_client_secret:string) => {
        const endpoint = 'http://localhost:5003/api/global/place-donation';
        const data = {
            id: id,
            amount: amount,
            fnn: fnn,
            emma: emma,
            aanm: aanm,
            payment_intent: payment_intent,
            payment_intent_client_secret: payment_intent_client_secret,
        };
        console.log(aanm)

        try {
            const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });

            if (response.ok) {
            const donation_data = await response.json();

            // Success case: Redirect to thank you page
            window.location.href = `http://localhost:3000/thank-you/${donation_data._id}`;
            } else {
            // Error case: Redirect to thank you page with error id
            const errorData = await response.json();
            const errorId = errorData.id; // Adjust this based on the actual response structure
            window.location.href = `http://localhost:3000/thank-you/${errorId}`;
            }
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
            // Handle other errors as needed
        }
        };

        if(id && amount && fnn  && emma && aanm && payment_intent && payment_intent_client_secret){

            fetchData(String(id), Number(amount), String(fnn), String(emma), String(aanm), String(payment_intent), String(payment_intent_client_secret));
        }
    }, [id, amount, fnn, emma, aanm, payment_intent, payment_intent_client_secret]);

  return (
    <div>
      {/* Your component JSX here */}
      <Loading />
    </div>
  );
};

export default SuccessDonation;