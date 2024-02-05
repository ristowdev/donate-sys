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
import HeaderNew from '@/components/header-new'
import Link from 'next/link'
import SEOpro from '@/components/SEO-pro'
import FHeader from '@/components/f/header'
import FFooter from '@/components/f/footer'
import { useState, useEffect, useRef } from 'react';
import { getAllProducts } from '@/lib/getAllProducts';
import { addToCartAndCheckout } from '@/lib/addToCartAndCheckout'; 
import { CiWarning } from "react-icons/ci";


const inter = Inter({ subsets: ['latin'] })

export default function BuyAProduct() {

 
  const [inputValue, setInputValue] = useState<number | string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isErrorDNValue, setErrorDonationValue] = useState<boolean>(false);
  const [choosePaymentMethod, setPaymentMethod] = useState<number>(3);
  const [anonymousDonate, setADonate] = useState<boolean>(false);
  const [loadingPro, setLoadingPro] = useState<boolean>(false);
  const [enterValError, setEnterValError] = useState<boolean>(false);
  const [oExplain, setOpenExplain] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [isLoadingP, setIsLoadingP] = useState(true);

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

      } else if (sanitizedValue === '') {
        // Allow empty input for easier deletion
        setInputValue('');
        //   setEnterValError(false);

      }

    }

  };

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
            await addToCartAndCheckout(productID, quantity, message, anonymousDonate, String(''), Number(inputValue), false);
        } else {
            console.log('No product found with the specified amount');
        }
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };


  useEffect(()=>{
    if(Number(inputValue) > 250){ 
        setErrorDonationValue(true);
    }else{
        setErrorDonationValue(false);
    }
  }, [inputValue])

  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <SEOpro title='RiseUpGram: Buy a product'/>

      <style>
          {`
            body {
              background: black !important;
              /* Add more styles as needed */
            }
          `}
        </style>

      <FHeader /> 



      <div className='lxp-alpxla dlpalpxl fllllllllsllslslsslsklmkpnwoienhnew'>
        <div className='xlpa-psalpl'>
          
          <div className='page-cpvdl'>
            <div className='vlvldfpppspsp dppxppappaaa'>
              <h1>Buy a product</h1>
              <p>Each purchase of our product, priced at $1 per copy, includes a unique QR Code and Identification ID on every page. If, for instance, you wish to acquire 50 distinct copies, the cost would amount to $50. We emphasize that all copyrights for our products are reserved, and any attempt to reproduce them independently is strictly prohibited. By making a purchase, you implicitly agree to abide by our terms and conditions.</p>


              <div className='lpx-a-spll'>
                <div className='lpsx-palpsl'>
                  <img src="/cmb-book-image.png" />
                </div>
                <div className='lpxppapppp'>
                  <h2>You're supporting: Help Save Little Anna - A Brave Fighter Battling Heart Condition - PDF</h2>
                  <h4>Price: $1 - $250</h4>
                </div>
              </div>
              <div className='lpx--palpsl'>
                <h2>This PDF GUIDE as a comprehensive guide on becoming a more effective fundraiser to support others. It narrates the inspiring story of Alicia, who successfully raised funds for Anna. Alicia provides a detailed account, delving into the intricacies of her strategies for soliciting donations and assisting Anna.</h2>
              </div>

              <div className='eldpals'>
                <span>Please specify the desired quantity of copies below:</span>
                <div className='lxppxpp'>
                  <div className='lxpp--appls'>
                    <div className='lxp-a----asdf'>
                      <label>$</label>
                    </div>
                    <input 
                    
                    type="text"
                    id="numericInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    inputMode="numeric"
                    ref={inputRef}
                    />
                  </div>
                  <button
                  
                  onClick={()=>{
                    fetchData();
                  }}

                  disabled={loadingPro}

                  >{loadingPro ? <div className="spinner">
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
                  </div> : "Buy now"}</button>  
                </div>
              </div>
              <br/>
                <span style={{color:'white', }}>* You will be redirected to the checkout.</span>
              {isErrorDNValue && 
                    <div className='spdp11'>
                        <div className='cp1pdl'>
                            <CiWarning size={22} color='#cf364a'/>
                        </div>
                        <span>The limit is $250.00, thank you!</span>
                    </div>
                }
            </div>
          </div>
        </div>
      </div>
            

        <FFooter />
      
    </>
  )
} 
