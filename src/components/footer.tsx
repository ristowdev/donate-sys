import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { IoMdArrowDown } from "react-icons/io";

interface IFooterProps{
    className?: string;
}

export default function Footer(props: IFooterProps) {
    const {
        className
    } = props;
    return (<>

        <div className='container-2'> 
          <div className='wrapper-2 vmfkdlvfk'> 

                <div className={`footer ${className}`}>
                    <div className='footer-inside'>

                        <div className='fov-dsdsc'>

                            <div className='vpdfvlsdpf'>

                                <div className='lvovldp-pds'>
                                    <div className='lvodologo'>
                                        <h1>Donatly</h1>
                                    </div>
                                    <div className='goccdlfl'>
                                        <p>Great futures are build with a small charity</p>
                                    </div>
                                </div>

                                <div className='linksv-dls'>

                                    <div className='vldps--cdsp'>
                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Our Work</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Our Story</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Partner with Us</span></Link>
                                        </div>
                                    </div>

                                    <div className='vldps--cdsp'>
                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Donate</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Careers</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Internships</span></Link>
                                        </div>
                                    </div>



                                    <div className='vldps--cdsp'>
                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Twitter</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Instagram</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="#"><span>Facebook</span></Link>
                                        </div>
                                    </div>


                                    <div className='vldps--cdsp' style={{marginRight:0}}>
                                        <div className='vldvpsds'>
                                            <Link href="/privacy-policy"><span>Privacy Policy</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/cookie-policy"><span>Cookie Policy</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/refund-policy"><span>Refund Policy</span></Link>
                                        </div>
                                    </div>

                                </div>



                            </div>


                            <div className='cldspcds'>

                                <div className='vlvlfodspf'>
                                    <p>© 2024 All rights are reserved - Donatly.</p>
                                </div>

                                <div className='vlvfpddfvp'> 
                                <div className='rp-ba-d-n-btn sdccdlcdppp'>
                                    <button><span>Donate now</span>
                                        <div className='rpbdn-btn'>
                                        <IoMdArrowDown color="black" size={23} className='sdpap-ss--acv'/>
                                        </div>
                                    </button>
                                </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    
                </div>

            </div>
        </div>

    </>)
}