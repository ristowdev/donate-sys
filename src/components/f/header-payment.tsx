import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SITE_URL } from "../../../config";


interface IFPaymentHeaderProps{
}

export default function FPaymentHeader(props: IFPaymentHeaderProps) {
    const {
    } = props;

    return (<>


        <div className="dlpsald">
          <div className="container">
            <div className="wrapper">
              <div className="vlpdpx-palda">
                <div className="dlaps-x-asaa">
                  <Link href={`/`}>
                  <div className="dps-x-pa-ps">
                    <MdOutlineArrowBackIosNew  size={22} color="#333333"/>
                    <span className="vp-apsa">Back</span>
                  </div>
                  </Link>
                </div>

                <div className="clalpsdl">
                    {/* <h1>riseupgram</h1> */}
                    <img src="/rug-pro.png" />
                </div>


                <div className="clalpsdl1" style={{opacity:0}}> 
                  <Link href={`/`} >Sign in</Link>
                </div> 


              </div>
            </div>
          </div>

        </div>
 
    
    </>)
}   