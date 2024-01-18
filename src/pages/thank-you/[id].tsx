import PaymentHeader from "@/components/header-payment";
import Loading from "@/components/loading";
import { useDonationDetailsQuery } from "@/slices/donations/donationsApiSlices";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BASE_URL, FILES_URL } from "../../../config";

export default function Home() {

    const router = useRouter();
    const { id } = router.query;
    const { data: donation_details, refetch, isError, isLoading, isSuccess, error } = useDonationDetailsQuery(id);
    const [message, setMessage] = useState<string>('');
    
    useEffect(()=>{
        refetch();
    },[]);


    function formatDonationAmount(inputValue: number) {
        if (inputValue < 0 || inputValue > 50000) {
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

    const convertToUSFormat = (isoDateString: string): string => {
        const date = new Date(isoDateString);
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        //   timeZone: 'America/New_York', // Adjust the timeZone based on your requirement
        };
      
        const usFormattedDate = date.toLocaleString('en-US', options);
        return usFormattedDate;
    };


    // const handleSendMessage = () => {
    //     if(message.length > 1){ 
    //         alert(message)
    //     }else{
    //         alert("Write message!")
    //     }
    // }

    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);

    const handleSendMessage = async () => {
        if(message.length > 1){ 

            setLoading(true);

            const data = {
            donation_id: id,
            message: message
            };

            try {
            const response = await fetch(`${BASE_URL}/global/write-message`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to write message');
            }

            setResponse(responseData);
            } catch (error) {
            console.error(error);
            } finally {
            setLoading(false);
            }
        }
    };


    return(
        <>

    <Head>
    <style>
          {`
            body {
              background: #faf8f6 !important;
              /* Add more styles as needed */
            }

          `}
        </style>
      </Head>
             {isLoading ? <Loading /> : donation_details && <>


                <PaymentHeader fundraiserId={donation_details.fundraiser_id}/>


                

                <div className='dpq-dqwlsls'>

                    <div className='donate-welfw'>


                        <div className="lcp-pasldp">
                            <div className="success-animation">
                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                            </div>

                            <h1>Successfully donated</h1>
                            <p>Your donation was accepted thank you for your help down below are details for your donation.</p>


                        </div>



                        <div className='cpp1pldw-separator'></div>

                        {(response?.message || donation_details.message) ? <>
                            <div className="lpda-lpdas">
                            <p style={{fontSize:'16px', color:'black', fontWeight:600}}>Message:</p>
                            <div className="ldlasp-plxla">
                                <textarea 
                                    value={response?.message || donation_details.message}
                                    disabled={true}
                                    style={{
                                        lineHeight:'1.5'
                                    }}
                                ></textarea>
                                

                                { response?.message && <div className="lpsdal-pxla">
                                    <span>Message sent successfully.</span>
                                </div>}
                            </div>
                        </div>
                        </> : (<>                        
                        
                        <div className="lpda-lpdas">
                            <p>If you want you can write message to give hope to this fundriaser:</p>
                            <div className="ldlasp-plxla">
                                <textarea 
                                    placeholder="Write your supporting message.."
                                    onChange={(e)=>{setMessage(e.target.value)}}
                                    value={message}
                                    style={{
                                        lineHeight:'1.5'
                                    }}
                                ></textarea>

                                <button 
                                    onClick={()=>{handleSendMessage()}} 
                                    disabled={loading}
                                    style={{
                                        color:'white'
                                    }}
                                >
                                    
                                    {loading ? <div className="spinner">
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
                                    </div> : "Send message"}
                                
                                </button>
                            </div>
                        </div>
                        </> )}

                        <div className='cpp1pldw-separator'></div>



                        <div className='p1pdwelqll pfpdsp'>
                            <div className='llqld-11d'>
                                <img src={`${FILES_URL+'/'+donation_details.fundraiserDetails.thumbnail}`} />
                            </div>

                            <div className='spclap-111ds'>
                                
                                <span>You're supporting <b>{donation_details.fundraiserDetails.title}</b></span>
                                <label>Your donation will benefit <b>{donation_details.fundraiserDetails.organizer}</b></label>
                            </div>
                        </div> 
                        {/* <div className="lpa-clpas">
                            <h1>You're supporting: <br/><br/><b>{donation_details.fundraiserDetails.title}</b></h1>
                        </div> */}
                        {/* <div className="lpdsa-plasplcsa">
                            <img src="/alalaaaa.png" />

                        </div> */}

                        <div className="lcpas-pasl">
                            <Link href={`/project/${donation_details.fundraiser_id}`} style={{textDecoration:'underline', color:'green'}}>Click to open fundraiser</Link>
                        </div>


                        {/* <div className='p1pdwelqll'>
                            <div className='llqld-11d'>
                                <img src="/alalaaaa.png" />
                            </div>

                            <div className='spclap-111ds'>
                                
                                <span>You're supporting <b>{donation_details.fundraiserDetails.title}</b></span>
                                <label>Your donation will benefit <b>{donation_details.fundraiserDetails.organizer}</b></label>
                            </div>
                        </div> */}
 


            <div className='pdpqp111sla--da-ssxz'>
                <div className='cpapl1'>
                    <span>Given amount:</span>
                </div>
                <div className={`cpapcplsal1112`}>
                    <div className='cpa1l2'>
                        <span>$</span>
                        <label>USD</label>
                    </div> 
                    <input
                        type="text"
                        id="numericInput" 
                        disabled
                        value={donation_details.amount}
                    />
                    <div className='dpspaql'>
                        <span>.00</span> 
                    </div>
                </div>

            </div>

            {/* <div className='vpp1ll32lcedl'>
                <span>We don't charge fees on this fundraiser.</span>
                <p>GoFundMe has a 0% platform fee for organizers. GoFundMe will continue offering its services thanks to donors who will leave an optional amount here</p>
            </div> */}

            {/* <div className='cpp1pldw-separator'></div> */}

            <div className='pcl12pl-3-21'>
                {/* <div className='pv-e-1dpqq cllalla'>
                    <span>Payment method</span>
                    <p><b>credit or debit.</b></p>
                </div> */}

                {/* <div className='p1pd-12sl-pmth'>
                    
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
                </div>  */}
            </div>

            
            {/* <div className='cpp1pldw-separator'></div>
            <div className='ldp-c-axp-apa-px'>
                <div className='lvlpx-asxz'>
                    <span>Your donation</span>
                </div>

                    
                <div className='lvlpx-asxzvlla-lxxa'>
                    <div className='vlxpaxaq1'>
                        <span>Your donation</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{formatDonationAmount(donation_details.amount)}.00</span>
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
                        <span>Total</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{formatDonationAmount(donation_details.amount)}.00</span>
                    </div>
                </div>

            </div> */}

            <div className='cpp1pldw-separator'></div>
            <div className='ldp-c-axp-apa-px pspppas'>
                <div className='lvlpx-asxz'>
                    <span>Donation details</span>
                </div>

                    
                <div className='lvlpx-asxzvlla-lxxa '>
                    <div className='vlxpaxaq1'>
                        <span>Full name:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{donation_details.full_name}</span>
                    </div>
                </div>
                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Email:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{donation_details.email}</span>
                    </div>
                </div> 
                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Anonymous donation:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{donation_details.is_anonymous ? 'Yes' : 'No'}</span>
                    </div>
                </div> 
                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Amount:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{formatDonationAmount(donation_details.amount)}.00</span>
                    </div>
                </div> 

                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Fundraiser:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>
                            <Link href={`/project/${donation_details.fundraiserDetails._id}`} style={{textDecoration:'underline', color:'green'}}>
                                {donation_details.fundraiserDetails.title.slice(0, 20)+'...'}
                            </Link>
                        </span>
                    </div>
                </div>



                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Time</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{convertToUSFormat(donation_details.createdAt)}</span>
                    </div>
                </div>

                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>Payment method</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>Credir or debit</span>
                    </div>
                </div>

                <div className='lvlpx-asxzvlla-lxxa vlzla12sffgvc'>
                    <div className='vlxpaxaq1'>
                        <span>ID:</span>
                    </div>


                    <div className='vlxpaxaq1-v-za'>
                        <span>{donation_details._id}</span>
                    </div>
                </div>

            </div>


            


            {/* <div className='vlpx-a-x-apxlal'>
                <button>Donate now</button>
            </div> */}

            {/* <div className='nmbkgopc-a1qax'>
                <span>By continuing, you agree with <Link href="/">RiseUpGram terms</Link> and <Link href="/">privacy notice.</Link></span>
            </div> */}


            <div className='cpp1pldw-separator'></div>

            <div className='vlxp-ap-pprods'>
                <div className='vlpx--applxa'>
                    <div className='xpp-z--aa'>
                        <img src="/security (1).png" />
                    </div>
                </div>
                <div className='dlcpx--apxpalaqqw'>
                    <span>RiseUpGram protects your donation</span>
                    <p>We guarantee you a full refund for up to a year in the rare case that fraud occurs. <Link href="/"> See our RiseUpGram Giving Guarantee.</Link></p>
                </div>
            </div>

        </div>

    </div>    

             </>}
        </>
    )
}
