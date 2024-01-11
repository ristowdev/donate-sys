import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";


interface IHeaderProps{
}

export default function Header(props: IHeaderProps) {

    const [menuOpened, setOpenMenu] = React.useState<Boolean>(false);

    return (<>

        
        <div className='header-spacer'>

        </div>
        <div className='headervpdspvds'>

        <div className='header'>
             
        <div className='container'>
            <div className='wrapper'>
                <header className='c'>
                    <div className='header-inside'>
                        {/* <div className='logo'> */}

                            <div className='logo'>
                                <Link href="/">
                                    <div className='logo-1'>
                                        {/* <img src="/nfc-logo-black.png" /> */}
                                        <h1>Donatly</h1>
                                    </div>
                                </Link>
                            </div>
                        {/* </div> */}

                        <div className='links'>
                            <div className='single-link' style={{marginLeft:0}}>
                                <Link href="/">
                                    <span>Home</span>
                                </Link>
                            </div>

                            <div className='single-link'>
                                <Link href="/about-us">
                                    <span>About</span>
                                </Link>
                            </div>

                            {/* <div className='single-link'>
                                <Link href="/products">
                                    <span>Features</span>
                                </Link>
                            </div> */}

                            <div className='single-link'>
                                <Link href="/projects">
                                    <span>Projects</span>
                                </Link>
                            </div>

                            <div className='single-link'>
                                <Link href="/contact">
                                    <span>Contact</span>
                                </Link>
                            </div>
                        </div>

                        <div className='donate-btn'>
                            <Link href="/dontations">
                                <button>Donate</button>
                            </Link>
                        </div>

                        <button className='menu-open' onClick={()=>{setOpenMenu(!menuOpened)}}>
                            {menuOpened==false ? ( 
                                <IoMenu size={35} color='black'/>
                            ): (
                                <IoMdClose size={35} color='black' />

                            )}
                            </button>
                    </div>
                </header>
            </div>
        </div>



        </div>

        {menuOpened && 
            <div className='menu-header'>
                <div className='vlvlsdvdpsvpdpvdsp'>
                    <div className='container'>
                        <div className='wrapper'>
                            <div className='links-menu-mobile'>
                            <div className='single-link' style={{marginLeft:0}}>
                                    <Link href="/">
                                        <span>Home</span>
                                    </Link>
                                </div>

                                <div className='single-link'>
                                    <Link href="/about-us">
                                        <span>About</span>
                                    </Link>
                                </div>

                                {/* <div className='single-link'>
                                    <Link href="/products">
                                        <span>Features</span>
                                    </Link>
                                </div> */}

                                <div className='single-link'>
                                    <Link href="/projects">
                                        <span>Projects</span>
                                    </Link>
                                </div>

                                <div className='single-link'>
                                    <Link href="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </div>

                                <div className='vlvdlspppsd'>
                                    <button><span>Donate now</span>
                                    
                                <div className='rpbdn-btn'>
                                <IoMdArrowDown color="#043F2E" size={28} className='sdpap-ss--acv'/>
                                </div>
                                    </button>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        </div>

    </>)
}