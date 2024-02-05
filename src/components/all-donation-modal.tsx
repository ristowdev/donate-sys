
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';


interface IAllDonationsModalProps{
    setAllDonationsModelOpened: Dispatch<React.SetStateAction<any>>;
    fundraiserDetails:any;
}

type Dispatch<A> = (value: A) => void;

export default function AllDonationsModal(props: IAllDonationsModalProps) {

    const {
        setAllDonationsModelOpened,
        fundraiserDetails
    } = props;

    const router = useRouter();

    const [visibleItems, setVisibleItems] = React.useState(20);

    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 40);
    };

    function formatDonationAmount(inputValue: number) {
  
        const formattedAmount = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(inputValue);
      
        return formattedAmount;
      }
    
    
      const formatTime = (dateTimeString: string): string => {
        const currentDate = new Date();
        const inputDate = new Date(dateTimeString);
        const timeDifference = currentDate.getTime() - inputDate.getTime();
      
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
        if (minutes < 60) {
          return `${minutes} min${minutes !== 1 ? 's' : ''}`;
        } else if (hours < 24) {
          const remainingMinutes = minutes % 60;
          if (remainingMinutes === 0) {
            return `${hours} h`;
          } else {
            return `${hours} h`;
            // return `${hours} h ${remainingMinutes} min`;
          }
        } else {
          const remainingHours = hours % 24;
          if (remainingHours === 0) {
            return `${days} d`;
          } else {
            return `${days} d`;
          }
        }
      };

    return (<>


         <div className='modal'>
            <div className='modal-inside pdaaasxs'>

                <div className='modal-header pdpapqqq'>
                    <div className='dsapdpq-1ld'>
                        <h1>Donations ({fundraiserDetails.total_donations})</h1>
                    </div>
                    <button className='mdh-eld-close' onClick={()=>{setAllDonationsModelOpened(false)}}>
                        <TfiClose color='#333333' size={20}/>
                    </button>
                </div>

                <div className='mdm--alsls'>

                    
                    <div className='vpd1wsda'>
                    

                        {/* {Array.from({ length: 3 }, (_, index) => ( */}
                    {fundraiserDetails.donations.slice(0, visibleItems)
                      // .sort((a: any, b:any) => {
                      //   const timeA = a.__f_so ? Date.parse(a.time) : Date.parse(a.createdAt);
                      //   const timeB = b.__f_so ? Date.parse(b.time) : Date.parse(b.createdAt);
                      //   return timeB - timeA;
                      // })
                      .map((wos: any, index:number) => (
                        <>
                            <div className='vpdps-1sdq'>
                                <div className='vlisd-vsd1'>
                                <FaHandHoldingHeart size={21}/>
                                </div>
                                <div className='vpds-p1sqw'>
                                <div className='flwe-1-d--fwe'>
                                  <span>{wos.is_anonymous ? 'Anonymous' : wos.full_name}</span>

                                </div>

                                <div className='c-p1sl'>
                                    <span>{formatDonationAmount(wos.amount)}</span>
                                    <div className='casp-1sa'><p>•</p></div>
                                    {/* <label>{formatTime(wos.createdAt)}</label> */}
                                    <label>{formatTime(wos.__f_so ? wos.time : wos.createdAt)}</label>

                                </div>
                                </div>
                            </div>

                            {/* <div className='dqllqp-111psdl'>
                                <span>Join this list.</span>
                                <Link href={`/donate/${fundraiserDetails._id}`}>Donate now.</Link>
                            </div> */}
                            {((index + 1) % 7 === 0) && (
                                <div className='dqllqp-111psdl'>
                                    <span>Join this list.</span>
                                    <Link href={`/donate/${fundraiserDetails._id}`}>Donate now.</Link>
                                </div>
                            )}

                        </>

                    ))}


                    


                    {fundraiserDetails.donations.length > visibleItems && (
                        <div className='show-more-btn-slld dlasplad'>
                          <button onClick={handleShowMore}>Show more</button>
                        </div>
                      )}


                         
                    </div>

                </div>

                <div className='vb-re-bpeee'>
                    {/* <button>Dontate now</button> */}
                    
                    <button onClick={()=>{
                            router.push(`/donate/${fundraiserDetails._id}`)
                        }}>Donate now</button>
                </div>
                {/* <div className='modal-content'>
                    
                </div> */}

            </div>
         </div>

    
    </>)
}