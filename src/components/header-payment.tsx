import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SITE_URL } from "../../config";


interface IPaymentHeaderProps{
    fundraiserId:string; 
}

export default function PaymentHeader(props: IPaymentHeaderProps) {
    const {
        fundraiserId
    } = props;

    return (<>


        <div className="dlpsald">
          <div className="container">
            <div className="wrapper">
              <div className="vlpdpx-palda">
                <div className="dlaps-x-asaa">
                  <Link href={`${SITE_URL}/fundraiser/${fundraiserId}`}>
                  <div className="dps-x-pa-ps">
                    <MdOutlineArrowBackIosNew  size={22} color="#333333"/>
                    <span className="vp-apsa">Fundraiser</span>
                  </div>
                  </Link>
                </div>

                <div className="clalpsdl">
                    {/* <h1>riseupgram</h1> */}
                    <img src="/rug-pro.png" />
                </div>


                <div className="clalpsdl1"> 
                  <Link href={`${SITE_URL}/sign-in`} >Sign in</Link>
                </div> 


              </div>
            </div>
          </div>

        </div>
 
    
    </>)
}   