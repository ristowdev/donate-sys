
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';


interface IButtonsStickyProps{
    fundraiserDetails: any;
    setShareModelOpened: Dispatch<React.SetStateAction<any>>;
    notAtTheMoment?: boolean;
}

type Dispatch<A> = (value: A) => void;

export default function ButtonsSticky(props: IButtonsStickyProps) {

    const {
        fundraiserDetails,
        setShareModelOpened,
        notAtTheMoment
    } = props;

    const router = useRouter();
    const [showBottomButtons, setBottomButtons] = React.useState<boolean>(false);


    const buttonListRef = React.useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
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

            <div className='btns-action-clas' >
                <div className='vlpvs--dcspcs-cd1cwdf'>
                  <button onClick={()=> {setShareModelOpened(true)}}>Share</button>
                </div>  
                <div className='vlpvs--dcspcs-cd1cwdf-1' ref={buttonListRef}>
                  <button onClick={()=>{
                    if(!notAtTheMoment){
                      router.push(`/donate/${fundraiserDetails._id}`)
                    }else{
                      alert("This fundraiser is not accepting donations at the moment.")
                    }
                  }}>Donate now</button>
                </div>  
            </div>



            {showBottomButtons && <>
                <div className='xppa-ppxpa'>
                    <div className='vlpvs--dcspcs-cd1cwdf flpwlfpw'>
                    <button onClick={()=> {setShareModelOpened(true)}}>Share</button>
                    </div>  
                    <div className='vlpvs--dcspcs-cd1cwdf-1 lflsls' ref={buttonListRef}>
                    <button onClick={()=>{
                        // router.push(`/donate/${fundraiserDetails._id}`)

                      if(!notAtTheMoment){
                        router.push(`/donate/${fundraiserDetails._id}`)
                      }else{
                        alert("This fundraiser is not accepting donations at the moment.")
                      }
                    }}>Donate now</button>
                    </div>  
                </div>
            </>}


    </>)
}