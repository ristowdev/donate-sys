import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import HeaderMobile from './header-mobile';


interface IHeaderProps{
    className?:string;
    noFixed?:boolean;
}

export default function HeaderNew(props: IHeaderProps) {
    const {
        className,
        noFixed=false
    } = props;
    const [menuOpened, setOpenMenu] = React.useState<Boolean>(false);


    const [showBottomButtons, setBottomButtons] = React.useState<boolean>(false);


  const buttonListRef = React.useRef<HTMLDivElement>(null);

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

        <div className='dsa-dsqszddqd lpdlsapldaassa' ref={buttonListRef}>
            <div className='container'>
                <div className='wrapper'>

                    <div className='new-header-inside'>

                        <div className='left-links'>
                            <Link href="/projects">
                                <div className='dspaplx fldslpaa'>
                                    <FiSearch  size={20} color='#333333'/>
                                    <span>Search</span>
                                </div>
                                
                                
                            </Link>

                            <div className='zlpapsap'>

                                <Link href="/about-us">
                                    <div className='dspaplx'>
                                        <span>About</span>
                                    </div>
                                    
                                </Link>
                            </div>


                            <div className='zlpapsap'>

                                <Link href="/contact">
                                    <div className='dspaplx'>
                                        <span>Contact</span>
                                    </div>
                                    
                                </Link>
                            </div>

                        </div>
                        <Link href="/">
                        <div className='lgod-apas'>
                            <img src='/rug-pro.png' />
                        </div>
                        </Link>


                        <div className='right-links'>
                            <div className='lcpapslda'>
                                <Link href="/how-it-works">How it works</Link>
                            </div>
                            <div className='lcpapslda'>
                                <Link href="/sign-in">Sign in</Link>
                            </div>
                            <div className='sdlpda zlas'>
                                <Link href="/start-a-riseupgram">
                                    <button>Start a RiseUpGram</button>
                                </Link>
                            </div>

                            <div className='sdlpda zlas21'>
                                <Link href="/start-a-riseupgram">
                                    <button>Create</button>
                                </Link>
                            </div>
                            {/* <Link href="/">Search</Link> */}
                        </div>

                    </div>


                </div>
            </div>
        </div>









        {(showBottomButtons && !noFixed ) && <>
            <div className='dsa-dsqszddqd ldalpdslapalp ldpspapxpxppxz'>
            <div className='container'>
                <div className='wrapper'>

                    <div className='new-header-inside'>

                        <div className='left-links'>
                            <Link href="/projects">
                                <div className='dspaplx fldslpaa'>
                                    <FiSearch  size={20} color='#333333'/>
                                    <span>Search</span>
                                </div>
                                
                            </Link>

                            <div className='zlpapsap'>

                                <Link href="/about-us">
                                    <div className='dspaplx'>
                                        <span>About</span>
                                    </div>
                                    
                                </Link>
                            </div>


                            <div className='zlpapsap'>

                                <Link href="/contact">
                                    <div className='dspaplx'>
                                        <span>Contact</span>
                                    </div>
                                    
                                </Link>
                            </div>

                        </div>
                        <Link href="/">
                            <div className='lgod-apas'>
                                <img src='/rug-pro.png' />
                            </div>
                        </Link>

                        <div className='right-links'>
                            <div className='lcpapslda'>
                                <Link href="/how-it-works">How it works</Link>
                            </div>
                            <div className='lcpapslda'>
                                <Link href="/sign-in">Sign in</Link>
                            </div> 

                            <div className='sdlpda zlas'>
                                <Link href="/start-a-riseupgram">
                                    <button>Start a RiseUpGram</button>
                                </Link>
                            </div>

                            <div className='sdlpda zlas21'>
                                <Link href="/start-a-riseupgram">
                                    <button>Create</button>
                                </Link>
                            </div>
                            {/* <Link href="/">Search</Link> */}
                        </div>

                    </div>


                </div>
            </div>
        </div>
        
        </> }

        <HeaderMobile noFixed={noFixed}/>
    </>)
}