
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";


interface IShareModalProps{
    setShareModelOpened: Dispatch<React.SetStateAction<any>>;
}

type Dispatch<A> = (value: A) => void;

export default function ShareModal(props: IShareModalProps) {

    const {
        setShareModelOpened
    } = props;

    return (<>


         <div className='modal'>
            <div className='modal-inside'>

                <div className='modal-header'>
                    <button className='mdh-eld-close' onClick={()=>{setShareModelOpened(false)}}>
                        <TfiClose color='#333333' size={20}/>
                    </button>
                </div>

                <div className='modal-content'>
                    <div className='mdc-spda'>
                        <h1>Help by sharing</h1>
                        <p>Fundraisers shared on social networks raise up to 5x more.</p>
                    </div>

                    <div className='vlpd-1-dwla'>
                        <div className='vp-1pallp'>
                            <button className='fpp2-1pdew'>
                                <div className='ici-spcps'>
                                    <img src="/facebook (3).png" />
                                </div>
                                <div className='pcps--paqq1'>
                                    <span>Facebook</span>
                                </div>
                            </button>

                            <button className='fpp2-1pdew'>
                                <div className='ici-spcps'>
                                    <img src="/twitter.png" />
                                </div>
                                <div className='pcps--paqq1'>
                                    <span>Twitter</span>
                                </div>
                            </button> 
                            
                            <button className='fpp2-1pdew'>
                                <div className='ici-spcps'>
                                    <img src="/whatsapp.png" />
                                </div>
                                <div className='pcps--paqq1'>
                                    <span>WhatsApp</span>
                                </div>
                            </button>  

                            
                            <button className='fpp2-1pdew'>
                                <div className='ici-spcps'>
                                    <img src="/envelope.png" />
                                </div>
                                <div className='pcps--paqq1'>
                                    <span>Email</span>
                                </div>
                            </button>         
                        </div>
                        <div className='pvpd-pqppqqq'>
                            <div className='dpc-appxxa'>
                                <span>Copy link</span>
                                <label>https://riseupgram.com/p/11dasvbfld</label>
                            </div>
                            <div className='bnt-slda'>
                                <button>Copy</button>
                            </div>
                        </div>
                        {/* <div className='copied-blpsd'>
                            <div className='vps-pd'>
                                <IoCheckmarkOutline size={19} color='#02A95C'/>
                            </div>
                            <div className='v-ds-1-1'>
                                <span>Copied!</span>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
         </div>

    
    </>)
}