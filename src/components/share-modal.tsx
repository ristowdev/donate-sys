
import * as React from 'react';
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { SITE_URL } from '../../config';
import ClipboardJS from 'clipboard';
import Link from 'next/link';


interface IShareModalProps{
    setShareModelOpened: Dispatch<React.SetStateAction<any>>;
    shareUrl?:string;
}

type Dispatch<A> = (value: A) => void;

export default function ShareModal(props: IShareModalProps) {

    const {
        setShareModelOpened,
        shareUrl
    } = props;


    const clipboardButtonRef = React.useRef<HTMLButtonElement | null>(null);
    const [copiedLink, setCopiedLink] = React.useState<string>('');

    React.useEffect(() => {
        if (clipboardButtonRef.current) {
        const clipboard = new ClipboardJS(clipboardButtonRef.current, {
            text: () => SITE_URL + shareUrl,
        });

        clipboard.on('success', (e) => {
            setCopiedLink('ok');
        });

        clipboard.on('error', (e) => {
            setCopiedLink('problem');
        });

        return () => {
            clipboard.destroy();
        };
        }
    }, [SITE_URL, shareUrl]);

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + shareUrl)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL + shareUrl)}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(SITE_URL + shareUrl)}`;
    const emailShareUrl = `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(SITE_URL + shareUrl)}`;

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
                            <Link href={facebookShareUrl} target="_blank" className='dlpas--ldap'>
                                <button className='fpp2-1pdew'>
                                    <div className='ici-spcps'>
                                        <img src="/facebook (3).png" />
                                    </div>
                                    <div className='pcps--paqq1'>
                                        <span>Facebook</span>
                                    </div>
                                </button>
                            </Link> 

                            <Link href={twitterShareUrl} target="_blank" className='dlpas--ldap'>
                                <button className='fpp2-1pdew'>
                                    <div className='ici-spcps'>
                                        <img src="/twitter.png" />
                                    </div>
                                    <div className='pcps--paqq1'>
                                        <span>Twitter</span>
                                    </div>
                                </button> 
                            </Link>
                            <Link href={whatsappShareUrl} target="_blank" className='dlpas--ldap'> 
                                <button className='fpp2-1pdew'>
                                    <div className='ici-spcps'>
                                        <img src="/whatsapp.png" />
                                    </div>
                                    <div className='pcps--paqq1'>
                                        <span>WhatsApp</span>
                                    </div>
                                </button>  
                            </Link>

                            <Link href={emailShareUrl} target="_blank" className='dlpas--ldap'>
                                <button className='fpp2-1pdew'>
                                    <div className='ici-spcps'>
                                        <img src="/envelope.png" />
                                    </div>
                                    <div className='pcps--paqq1'>
                                        <span>Email</span>
                                    </div>
                                </button>      
                            </Link>

                        </div>
                        <div className='pvpd-pqppqqq'>
                            <div className='dpc-appxxa'>
                                <span>Copy link</span>
                                <label>{SITE_URL + shareUrl }</label>
                            </div>
                            <div className='bnt-slda'>
                                <button onClick={()=>{ 
                                    
                                }}
                                ref={clipboardButtonRef}
                                >Copy</button>
                            </div>
                        </div>
                        
                        {copiedLink === "ok" ?
                        <div className='copied-blpsd'>
                            <div className='vps-pd'>
                                <IoCheckmarkOutline size={19} color='#02A95C'/>
                            </div>
                            <div className='v-ds-1-1'>
                                <span>Copied!</span>
                            </div>
                        </div> : copiedLink === "problem" && 
                        <div className='copied-blpsd'> 
                            <div className='v-ds-1-1'>
                                <span style={{color:'red'}}>Something went wrong. Can't copy the link.</span>
                            </div>
                        </div>}
                        
                    </div>
                </div>

            </div>
         </div>

    
    </>)
}