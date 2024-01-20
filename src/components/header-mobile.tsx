import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";


interface IHeaderProps{
    className?:string;
    noFixed?:boolean;
}

export default function HeaderMobile(props: IHeaderProps) {
    const {
        className,
        noFixed=false
    } = props;
    const [menuOpened, setOpenMenu] = React.useState<Boolean>(false);
    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldFixHeader = scrollPosition > 0;

        setIsFixed(shouldFixHeader);
        };

        // Attach event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(()=>{
        if (menuOpened) {
            document.documentElement.classList.add('body-scroll-lock');
            if(noFixed) window.scrollTo(0, 0);
          } else {
            document.documentElement.classList.remove('body-scroll-lock');
          }
      }, [menuOpened]);

    return (<>

        {(isFixed && !noFixed ) &&
        <div className='sppxppalllslallps'>

        </div>}

        <div className={`psdppx--apspap ${isFixed && 'fix-header-mobile'} ${noFixed && 'dallslpxppzpas'} ${(menuOpened) && 'dpcpxpoa--odoa-od-1'}`}>
            <div className='container-2'>
                <div className='wrapper-2'>
                    <div className='ppxpaplxla'>
                        <div className='zlpaspd'>

                            <Link href="/fundraisers">
                                <div className='dalsppsapp'>
                                    <FiSearch  size={25} color='#333333'/>
                                </div>
                                    
                            </Link>
                        </div>
                        
                        <Link href="/">
                            <div className='lgod-apas'>
                                <img src='/rug-pro.png' />
                            </div>
                        </Link>

                        <div className='zlpaspd lxllxl'>
                        <button className='menu-open' onClick={()=>{setOpenMenu(!menuOpened)}}>
                            {menuOpened==false ? ( 
                                <IoMenu size={35} color='black'/>
                            ): (
                                <IoMdClose size={35} color='black' />

                            )}
                            </button>
                            {/* <IoMenu size={35} color='#333333'/> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* {(isFixed && !noFixed ) &&
            <div className={`psdppx--apspap dpxppapsaxllll ${noFixed && 'dallslpxppzpas'} ${menuOpened && 'dpcpxpoa--odoa-od ckskdllxlllll'}`}>
                <div className='container-2'>
                    <div className='wrapper-2'>
                        <div className='ppxpaplxla'>
                            <div className='zlpaspd'>

                                <Link href="/fundraisers">
                                    <div className='dalsppsapp'>
                                        <FiSearch  size={25} color='#333333'/>
                                    </div>
                                        
                                </Link>
                            </div>
                            
                            <Link href="/">
                                <div className='lgod-apas'>
                                    <img src='/rug-pro.png' />
                                </div>
                            </Link>

                            <div className='zlpaspd lxllxl'>
                            <button className='menu-open' onClick={()=>{setOpenMenu(!menuOpened)}}>
                                {menuOpened==false ? ( 
                                    <IoMenu size={35} color='black'/>
                                ): (
                                    <IoMdClose size={35} color='black' />

                                )}
                                </button> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } */}



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
                                    <Link href="/fundraisers">
                                        <span>Fundraisers</span>
                                    </Link>
                                </div>

                                <div className='single-link'>
                                    <Link href="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </div>



                                <div className='single-link'>
                                    <Link href="/sign-in">
                                        <span>Sign in</span>
                                    </Link>
                                </div>

                                
                                <div className='single-link'>
                                    <Link href="/how-it-works">
                                        <span>How it works</span>
                                    </Link>
                                </div>



                                <div className='single-link'>
                                    <Link href="/start-a-riseupgram">
                                        <span>Start a RiseUpGram</span>
                                    </Link>
                                </div>

                                {/* <div className='vlvdlspppsd'>
                                    <button><span>Donate now</span>
                                    
                                <div className='rpbdn-btn'>
                                <IoMdArrowDown color="#043F2E" size={28} className='sdpap-ss--acv'/>
                                </div>
                                    </button>
                                </div> */}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

    </>)
}