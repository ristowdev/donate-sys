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


    const [showBottomButtons, setBottomButtons] = React.useState<boolean>(false);


  const buttonListRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(()=>{
    if (menuOpened) {
        document.documentElement.classList.add('body-scroll-lock');
        if(noFixed) window.scrollTo(0, 0);
      } else {
        document.documentElement.classList.remove('body-scroll-lock');
      }
  }, [menuOpened]);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Buttons are still in view
          setBottomButtons(false);
        } else {
          setBottomButtons(true);
          // Buttons are out of view
          // You can dispatch an action, set a state, or perform any other action
          // to indicate that the buttons are out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (buttonListRef.current) {
      observer.observe(buttonListRef.current);
    }

    return () => {
      if (buttonListRef.current) {
        observer.unobserve(buttonListRef.current);
      }
    };
  }, []);

    return (<>

        {(showBottomButtons && !noFixed ) &&
        <div className='sppxppalllslallps'>

        </div>}

        <div className={`psdppx--apspap  ${noFixed && 'dallslpxppzpas'} ${(menuOpened) && 'dpcpxpoa--odoa-od-1'}`} ref={buttonListRef}>
            <div className='container-2'>
                <div className='wrapper-2'>
                    <div className='ppxpaplxla'>
                        <div className='zlpaspd'>

                            <Link href="/projects">
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

        {(showBottomButtons && !noFixed ) &&
            <div className={`psdppx--apspap dpxppapsaxllll ${noFixed && 'dallslpxppzpas'} ${menuOpened && 'dpcpxpoa--odoa-od ckskdllxlllll'}`} ref={buttonListRef}>
                <div className='container-2'>
                    <div className='wrapper-2'>
                        <div className='ppxpaplxla'>
                            <div className='zlpaspd'>

                                <Link href="/projects">
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
        }



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