import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { FaPlay } from "react-icons/fa";
import SpecialBoxFrame from '@/components/special-box-frame'
import { IoMdArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import { CiWarning } from "react-icons/ci";
import { FaCheck } from "react-icons/fa"; 
import Link from 'next/link'
import FPaymentHeader from '@/components/f/header-payment'
import { BASE_URL, SITE_URL } from '../../../config'
import { useRouter } from 'next/router'
import { getAllProducts } from '@/lib/getAllProducts';
import { addToCartAndCheckout } from '@/lib/addToCartAndCheckout';
import SEOpro from '@/components/SEO-pro'   
import { useRef } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";

interface FundraiserData {
    // Define the properties you expect in the API response
    thumbnail: string;
    title: string;
    organizer: string;
    // Add other properties as needed
}
  
const inter = Inter({ subsets: ['latin'] })

export default function Donate() {

    const router = useRouter();
    const { id } = router.query;
 
    const [inputValue, setInputValue] = useState<number | string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isErrorDNValue, setErrorDonationValue] = useState<boolean>(false);
    const [choosePaymentMethod, setPaymentMethod] = useState<number>(3);
    const [anonymousDonate, setADonate] = useState<boolean>(false);
    const [loadingPro, setLoadingPro] = useState<boolean>(false);
    const [enterValError, setEnterValError] = useState<boolean>(false);
    const [enterValErrorm, setEnterValErrorM] = useState<boolean>(false);
    const [oExplain, setOpenExplain] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [fundraiserDetails, setFundraiserDetails] = useState<FundraiserData>();
    const [isLoadingP, setIsLoadingP] = useState(true);

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value; 
        
    //     if (value.length <= 3 && (value === '' || Number(value) >= 1)) {
    //         setInputValue(value);
    //     }
    // };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const inputValueRaw = event.target.value;
    
    //     // Check if the input matches the allowed format
    //     if (/^[1-9]\d*$/.test(inputValueRaw) || inputValueRaw === '') {
    //       const parsedValue = parseInt(inputValueRaw, 10);
    
    //       // Check if the parsed value is within the range [1, 500]
    //         if (inputValueRaw.length <= 3 && parsedValue >= 1) {
    //             setInputValue(String(parsedValue));
    //         } 
    //     }
    // };
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValueRaw = event.target.value;
    
        // Remove leading zeros
        const sanitizedValue = inputValueRaw.replace(/^0+/, '');
    
        // Check if the input matches the allowed format
        if (/^[1-9]\d*$/.test(sanitizedValue) || sanitizedValue === '') {
          const parsedValue = parseInt(sanitizedValue, 10);
    
          // Check if the parsed value is within the range [1, 500]
          if (!isNaN(parsedValue) && parsedValue >= 1 && inputValueRaw.length<=3) {
            setInputValue(String(parsedValue));
            setEnterValError(false);
            setEnterValErrorM(false);

          } else if (sanitizedValue === '') {
            // Allow empty input for easier deletion
            setInputValue('');
            //   setEnterValError(false);

          }

        }

      };
    

  useEffect(()=>{
    if(Number(inputValue) > 250){ 
        setErrorDonationValue(true);
    }else{
        setErrorDonationValue(false);
    } 
  }, [inputValue])



  useEffect(() => {
    const fetchData = async () => {
        
        
        try {
            setIsLoadingP(true); // Set loading to true when starting the fetch

            const response = await fetch(`${BASE_URL}/global/fundraisers/${id}`);
            const data = await response.json();
            
            setFundraiserDetails(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoadingP(false); // Set loading to false regardless of success or error
        }
    };
    if(id){
        fetchData();
    }
  }, [id]); 



  const fetchData = async () => {
    try {


        if(!inputValue){
            setEnterValError(true);
            window.scrollTo(0, 0);
            if (inputRef.current) {
              inputRef.current.focus();
            }
            return;
        }

        if(Number(inputValue) < 3){
            setEnterValErrorM(true);
            window.scrollTo(0, 0);
            if (inputRef.current) {
              inputRef.current.focus();
            }
            return;
        }
      
        if(Number(inputValue) > 250){

            window.scrollTo(0, 0);
            if (inputRef.current) {
              inputRef.current.focus();
            }
            return;
        }


        setLoadingPro(true);


        const productsData = await getAllProducts();
        console.log('Products Data:', productsData);
    
        // Filter products based on the specified amount
        const filteredProducts = productsData.body.data.products.edges.filter(
            (product: any) => {
            const variant = product.node.variants.edges[0]?.node;
            if (variant) {
                const productPrice = parseFloat(variant.priceV2.amount);
                return productPrice === parseFloat(String(inputValue));
            }
            return false;
            }
        );
    
        // Log the filtered products
        console.log('Filtered Products:', filteredProducts);
    
        if (filteredProducts.length > 0) {
            const selectedProduct = filteredProducts[0].node;
            const productID = selectedProduct.id;
    
            // You can set the quantity based on your logic, for example, taking it from user input
            const quantity = 1;
    
            // Add the selected product to cart and proceed to checkout
            await addToCartAndCheckout(productID, quantity, message, anonymousDonate, String(id), Number(inputValue), true);
        } else {
            console.log('No product found with the specified amount');
        }
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };


    function formatDonationAmount(inputValue: number) {
        if (inputValue < 0 || inputValue > 500) {
          // Handle invalid input (negative or greater than 50,000)
          return "$0";
        }
      
        const formattedAmount = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(inputValue);
      
        return formattedAmount;
    }


    useEffect(()=>{
        document.documentElement.classList.remove('body-scroll-lock');
    },[]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {` 
            body {
                background: #faf8f6 !important;
                /* Add more styles as needed */
              }
  
              @media(max-width:863px){
    
                  body{
                    background:white !important;
                  }
              }
          `}
        </style>
      </Head>
      <SEOpro title='RiseUpGram: Donate'/>

    
      <FPaymentHeader 
        hasBack={`/fundraiser/${id && id}`}
      /> 

    <div className='dpq-dqwlsls'>

        <div className='donate-welfw'>
        {isLoadingP ? <>
            <div className='lpdl-loading-1'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:'auto', background:'#fff', display:'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(20 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(40 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(60 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(80 50)">
<circle cx="0" cy="0" r="6" fill="#02a95c">
  <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g>
</svg>
    </div>
        
        </> : 
        fundraiserDetails && 
        <>
        <div className='p1pdwelqll'>
                <div className='llqld-11d'>
                    <img src={SITE_URL+'/'+fundraiserDetails.thumbnail} />
                </div>

                <div className='spclap-111ds'>
                    <span>You're supporting <b>{fundraiserDetails.title}</b></span> 
                    <label>Your donation will benefit <b>{fundraiserDetails.organizer}</b></label>
                </div>
            </div>
        </>
        }
        

            {/* <div className='pdpqp111sla--da-ssxz'>
                <iframe src="http://localhost:3004" width='100%' height="1800px" style={{border:'none'}}>
                </iframe>
            </div> */}


            <div className='pdpqp111sla--da-ssxz'>
                <div className='cpapl1'>
                    <span>Enter your donation</span>
                </div>
                    <div className={`cpapcplsal1112 ${(isErrorDNValue || enterValError || enterValErrorm) && 'error'}`}>

                    <div className='cpa1l2'>
                        <span>$</span>
                        <label>USD</label>
                    </div> 
                    <input
                        type="text"
                        id="numericInput"
                        value={inputValue}
                        onChange={handleInputChange}
                        inputMode="numeric"
                        ref={inputRef}
            
                    />
                    <div className='dpspaql'>
                        <span>.00</span> 
                    </div>
                </div>

                {isErrorDNValue && 
                    <div className='spdp11'>
                        <div className='cp1pdl'>
                            <CiWarning size={22} color='#cf364a'/>
                        </div>
                        <span>Donation limit is $250.00</span>
                    </div>
                }

                {enterValError && 
                    <div className='spdp11'>
                        <div className='cp1pdl'>
                            <CiWarning size={22} color='#cf364a'/>
                        </div>
                        <span>Please enter a donation amount</span>
                    </div>
                }


                {enterValErrorm && 
                    <div className='spdp11'>
                        <div className='cp1pdl'>
                            <CiWarning size={22} color='#cf364a'/>
                        </div>
                        <span>Donation amount must be at least $3.00</span>
                    </div>
                }
            </div>

            <div className='vpp1ll32lcedl'>
                <span>We don't charge fees on this fundraiser.</span>
                <p>Urgent and heartbreaking – we won't add any fees to this fundraiser. Your support means everything. 💚 #RiseUpTogether</p>
            </div>

            {/* <div className='cpp1pldw-separator'></div> */}

            {/* <div className='pcl12pl-3-21'>
                <div className='pv-e-1dpqq cllalla'>
                    <span>Payment method</span>
                    <p>* This fundraiser support only payments with <b>credit or debit.</b></p>
                </div>

                <div className='p1pd-12sl-pmth'>
                    
                    <div className='vlspa--qffd'>

                        <button className='pcp1lded-v-dpckmd' onClick={()=>{setPaymentMethod(4)}}>
                
                            <div className={`gfv-dpw ${choosePaymentMethod === 4 && 'pdapd11sw'}`}>
                                <div></div>
                            </div>
                            <div className='bbfnfms-a'>
                                <img src="/paypal.png" />
                            </div>
                            <div className='cpps1-decvff'>
                                <span>Paypal (not supporterd)</span>
                            </div>
                        </button>

                        {choosePaymentMethod === 4 &&
                        <div className='vpds-axla'>
                            <p>This fundraiser at the moment dosent accept payments that are made throw PayPal. You can use another Payment Method.</p>
                        </div>}

                    </div>

                    <div className='vlspa--qffd'>

                        <button className='pcp1lded-v-dpckmd' onClick={()=>{setPaymentMethod(1)}}>
                   
                            <div className={`gfv-dpw ${choosePaymentMethod === 1 && 'pdapd11sw'}`}>
                                <div></div>
                            </div>
                            <div className='bbfnfms-a'>
                                <img src="/venmo.png" />
                            </div>
                            <div className='cpps1-decvff'>
                                <span>Venmo (not supporterd)</span>
                            </div>
                        </button>

                        {choosePaymentMethod === 1 &&
                        <div className='vpds-axla'>
                            <p>This fundraiser at the moment dosent accept payments that are made throw Venmo. You can use another Payment Method.</p>
                        </div>}

                    </div>
                    <div className='vlspa--qffd'>
                        <button className='pcp1lded-v-dpckmd' onClick={()=>{setPaymentMethod(2)}}>
                           
                            <div className={`gfv-dpw ${choosePaymentMethod === 2 && 'pdapd11sw'}`}>
                                <div></div>
                            </div>
                            <div className='bbfnfms-a dpasx'>
                                <img src="/googlepay.png" />
                            </div>
                            <div className='cpps1-decvff'>
                                <span>Google Pay (not supported)</span>
                            </div>
                        </button>
                        {choosePaymentMethod === 2 &&
                        <div className='vpds-axla'>
                            <p>This fundraiser at the moment dosent accept payments that are made throw Google Pay. You can use another Payment Method.</p>
                        </div>}
                    </div>


                    <div className='vlspa--qffd vpapxas'>


                        <button className='pcp1lded-v-dpckmd vpapxas' onClick={()=>{setPaymentMethod(3)}}>
                            <div className={`gfv-dpw ${choosePaymentMethod === 3 && 'pdapd11sw'}`}>
                                <div></div>
                            </div>
                            <div className='bbfnfms-a dpasx'>
                                <img src="/creditordebit.png" />
                            </div>
                            <div className='cpps1-decvff'>
                                <span>Credit or debit</span>
                            </div>
                        </button>

                        {choosePaymentMethod === 3 &&
                        <div className='vpds-axla'>
                            
                            <div className='vppsaxlaf4e'> 
                                <div className='clspxlaxs'>
                                    <label>Email address</label>
                                    <input placeholder='john@mail.com'/>
                                </div>
                                <div className='pxa1pixals'>

                                    <div className='clspxlaxs'>
                                        <label>First name</label>
                                        <input placeholder='John'/>
                                    </div>

                                    
                                    <div className='clspxlaxs cvlopa'>
                                        <label>Last name</label>
                                        <input placeholder='Adison'/>
                                    </div>
                                </div>


                                <div className='clspxlaxs vlzlaaa'>
                                    <label>Card number</label>
                                    <input placeholder='XXXX XXXX XXXX XXXX'/>
                                </div>

                                <div className='pxa1pixals'>

                                    <div className='clspxlaxs'>
                                        <label>MM/YY</label>
                                        <input placeholder='15/26'/>
                                    </div>

                                    
                                    <div className='clspxlaxs cvlopa'>
                                        <label>CVV</label>
                                        <input placeholder='***'/>
                                    </div>
                                </div>

                                <div className='clspxlaxs vlzlaaa'>
                                    <label>Name on card</label>
                                    <input placeholder='John Adison'/>
                                </div>

                                <div className='pxa1pixals'>

                                    <div className='clspxlaxs'>
                                        <label>Country</label>
                                        <input placeholder='United States'/>
                                    </div>

                                    
                                    <div className='clspxlaxs cvlopa'>
                                        <label>Postal code</label>
                                        <input placeholder='431sfs'/>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    
                    </div>

                </div>

                <div className='vldpa01-2'>
                    <button className='cvbld' onClick={()=>{setADonate(!anonymousDonate)}}>
                         <div className={`custom-cbsl ${anonymousDonate && 'cb-cheched-adslx'}`}>
                            {anonymousDonate && <FaCheck size={15} color='white'/> }
                        </div>
                        <label htmlFor="anonymous-donation-cb">Don't display my name publicly on the fundraiser.</label> 
                    </button>
                </div> 
            </div> */}

            <div className='cpp1pldw-separator'></div>


            <div className='splx--apxl'>
                <h1>Send message:</h1>
                <p>* If you wish to send a message, it will be showcased in the "Words of Support" section within the fundraiser.</p>
            </div>

            <div className="lpda-lpdas cllpppa">
                <div className="ldlasp-plxla">
                    <textarea 
                    
                        placeholder="Your message..."
                        onChange={(e)=>{setMessage(e.target.value)}}
                        value={message}
                        style={{
                            lineHeight:'1.5',
                            color:'black'
                        }}
                    ></textarea>
                     
                </div>
            </div>

            <div className='vldpa01-2 lclll'>
                <div className='cvbld' onClick={()=>{setADonate(!anonymousDonate)}}>
                    {/* <input type="checkbox" id="anonymous-donation-cb"/> */}
                    <div style={{display:'flex'}}>
                        <div className={`custom-cbsl ${anonymousDonate && 'cb-cheched-adslx'}`}>
                            {anonymousDonate && <FaCheck size={15} color='white'/> }
                        </div>
                    </div>
                    <label htmlFor="anonymous-donation-cb">Don't display my name publicly on the fundraiser.</label> 
                </div>
                <div className="lpdsa-pxpal" onClick={()=>{setOpenExplain(!oExplain)}}>
                    <IoMdInformationCircleOutline size={25} color="#008748"/>
                </div>
            </div>
            {oExplain && 
                <div className="dlspa-xpaldspl">
                <p>By checking this box, I will appear as "Anonymous" on the public fundraiser pages. Organizers, their team members, the beneficiary and others may however receive information about me as described in our <Link href={`${SITE_URL+'/privacy-policy'}`} target="_blank" style={{color:'#008748', textDecoration:'underline'}}>Privacy Policy</Link></p>
                </div>  } 
            <div className='cpp1pldw-separator'></div>
            <div className='ldp-c-axp-apa-px'>
                <div className='lvlpx-asxz'>
                    <span>Your donation</span>
                </div>

                    
                <div className='lvlpx-asxzvlla-lxxa'>
                    <div className='vlxpaxaq1'>
                        <span>Your donation</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{inputValue=='' ? '$0' : formatDonationAmount(Number(inputValue))}.00</span>
                    </div>
                </div>
                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Service fee</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>$0.00</span>
                    </div>
                </div>
                <div className='cpp1pldw-separator clz12488xa'></div>


                <div className='lvlpx-asxzvlla-lxxa vlzlq1000spxa'>
                    <div className='vlxpaxaq1'>
                        <span>Total due today</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{inputValue=='' ? '$0' : formatDonationAmount(Number(inputValue))}.00</span>
                    </div>
                </div>

            </div>


            <div className='vlpx-a-x-apxlal'>
                <button
                    onClick={()=>{
                        fetchData();
                    }}
                    disabled={loadingPro}
                >
                    
                    {loadingPro ? <div className="spinner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:'auto', background:'transparent', display:'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <g transform="translate(20 50)">
                        <circle cx="0" cy="0" r="6" fill="white">
                        <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        </circle>
                        </g><g transform="translate(40 50)">
                        <circle cx="0" cy="0" r="6" fill="white">
                        <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        </circle>
                        </g><g transform="translate(60 50)">
                        <circle cx="0" cy="0" r="6" fill="white">
                        <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        </circle>
                        </g><g transform="translate(80 50)">
                        <circle cx="0" cy="0" r="6" fill="white">
                        <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        </circle>
                        </g>
                        </svg>
                    </div> : "Continue to payment"}
                </button>
            </div>

            <div className='nmbkgopc-a1qax'>
                {/* <span>By continuing, you agree with <Link href="/">RiseUpGram terms</Link> and <Link href="/">privacy notice.</Link></span> */}
                <span>By continuing, you agree with <Link href={`${SITE_URL+'/terms'}`} target="_blank">RiseUpGram terms</Link> and <Link href={`${SITE_URL+'/privacy-policy'}`} target="_blank">privacy notice.</Link></span>
            </div>


            <div className='cpp1pldw-separator'></div>

            <div className='vlxp-ap-pprods'>
                <div className='vlpx--applxa'>
                    <div className='xpp-z--aa'>
                        <img src="/security (1).png" />
                    </div>
                </div>
                <div className='dlcpx--apxpalaqqw'>
                    <span>RiseUpGram protects your donation</span>
                    <p>We guarantee you a full refund for up to a year in the rare case that fraud occurs. <Link href={`${SITE_URL+'/riseupgram-guarantee'}`} target="_blank"> See our RiseUpGram Giving Guarantee.</Link></p>
                </div>
            </div>

        </div>

    </div>      


 
      
    </>
  )
} 
