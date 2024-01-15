
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';


interface IAllDonationsModalProps{
    setAllDonationsModelOpened: Dispatch<React.SetStateAction<any>>;
}

type Dispatch<A> = (value: A) => void;

export default function AllDonationsModal(props: IAllDonationsModalProps) {

    const {
        setAllDonationsModelOpened
    } = props;

    const router = useRouter();


    return (<>


         <div className='modal'>
            <div className='modal-inside pdaaasxs'>

                <div className='modal-header pdpapqqq'>
                    <div className='dsapdpq-1ld'>
                        <h1>Donations (4556)</h1>
                    </div>
                    <button className='mdh-eld-close' onClick={()=>{setAllDonationsModelOpened(false)}}>
                        <TfiClose color='#333333' size={20}/>
                    </button>
                </div>

                <div className='mdm--alsls'>

                    
                    <div className='vpd1wsda'>
                    {Array.from({ length: 5 }, (_, index) => (

                        <div className='vpdps-1sdq'>
                            <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                            </div>
                            <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                                <span>Andrea Stainbrook</span>
                            </div>

                            <div className='c-p1sl'>
                                <span>$5,000</span>
                                <div className='casp-1sa'><p>•</p></div>
                                <label>3 mins</label>
                            </div>
                            </div>
                        </div>

                    ))}

                    <div className='dqllqp-111psdl'>
                        <span>Join this list.</span>
                        <Link href="/donate/83d01000123dfw">Donate now.</Link>
                    </div>


                    {Array.from({ length: 10 }, (_, index) => (

                        <div className='vpdps-1sdq'>
                            <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                            </div>
                            <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                                <span>Andrea Stainbrook</span>
                            </div>

                            <div className='c-p1sl'>
                                <span>$5,000</span>
                                <div className='casp-1sa'><p>•</p></div>
                                <label>3 mins</label>
                            </div>
                            </div>
                        </div>

                    ))}


                    <div className='dqllqp-111psdl'>
                        <span>Join this list.</span>
                        <Link href="">Donate now.</Link>
                    </div>


                    {Array.from({ length: 3 }, (_, index) => (

                        <div className='vpdps-1sdq'>
                            <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                            </div>
                            <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                                <span>Andrea Stainbrook</span>
                            </div>

                            <div className='c-p1sl'>
                                <span>$5,000</span>
                                <div className='casp-1sa'><p>•</p></div>
                                <label>3 mins</label>
                            </div>
                            </div>
                        </div>

                    ))}


                    <div className='dqllqp-111psdl'>
                        <span>Join this list.</span>
                        <Link href="">Donate now.</Link>
                    </div>


                    {Array.from({ length: 10 }, (_, index) => (

                        <div className='vpdps-1sdq'>
                            <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                            </div>
                            <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                                <span>Andrea Stainbrook</span>
                            </div>

                            <div className='c-p1sl'>
                                <span>$5,000</span>
                                <div className='casp-1sa'><p>•</p></div>
                                <label>3 mins</label>
                            </div>
                            </div>
                        </div>

                    ))}
                         
                    </div>

                </div>

                <div className='vb-re-bpeee'>
                    {/* <button>Dontate now</button> */}
                    
                    <button onClick={()=>{
                            router.push('/donate/83d01000123dfw')
                        }}>Donate now</button>
                </div>
                {/* <div className='modal-content'>
                    
                </div> */}

            </div>
         </div>

    
    </>)
}