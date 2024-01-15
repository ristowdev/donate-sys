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
                                    <div style={{display:'flex'}}>

                                        <Link href="/">
                                            <div className='lvodologo'>
                                                {/* <h1>Donatly</h1> */}
                                                <img src="/rog-pro-white-pro.png" />
                                            </div>
                                        </Link>
                                    </div>


                                    <div className='goccdlfl'>
                                        <p>Great futures are build with a small charity</p>
                                    </div>
                                </div>

                                <div className='linksv-dls'>

                                    <div className='vldps--cdsp'>
                                        <div className='vldvpsds'>
                                            <Link href="/about-us"><span>About us</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/contact"><span>Contact</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/how-it-works"><span>How it Works</span></Link>
                                        </div>
                                    </div>

                                    <div className='vldps--cdsp'>
                                        <div className='vldvpsds'>
                                            <Link href="/sign-in"><span>Sign in</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/start-a-riseupgram"><span>Start a RiseUpGram</span></Link>
                                        </div>

                                        <div className='vldvpsds'>
                                            <Link href="/projects"><span>Fundraisers</span></Link>
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
                                    <p>© 2024 All rights are reserved - RiseUpGram.</p>
                                </div>

                                <div className='vlvfpddfvp'> 
                                <div className='rp-ba-d-n-btn sdccdlcdppp'>
                                    <Link href="/projects">
                                    <button><span>Donate now</span>
                                        <div className='rpbdn-btn'>
                                        <IoMdArrowDown color="black" size={23} className='sdpap-ss--acv'/>
                                        </div>
                                    </button>
                                    </Link>

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