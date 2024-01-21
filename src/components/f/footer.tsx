import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { IoMdArrowDown } from "react-icons/io";

interface IFooterProps{
    className?: string;
}

export default function FFooter(props: IFooterProps) {
    const {
        className
    } = props;
    return (<>

        
      <div className='lxp-alpxla'>
            <div className='xlpa-psalpl'>

            <div className='lp-f-f-foo-terr--al'>

                        <div className='lpx-alpalogo lllaaaaa'>
                            <img src="/rug-pro.png" />
                        </div>  

                        <div className='lxp-alpxlas'>
                            <p>Celebrate the Power of Purposeful Reading and Transform Lives</p>
                        </div>

                        <div className='lpx-alplpfla'>

                        <div className='lpz-alspl dksaodkapk'>
                            <div className='zxlpalpsl-ls1' style={{marginLeft:0}}>
                                <Link href="/f/privacy-policy">Privacy Policy</Link>
                            </div>
                            <div className='zxlpalpsl-ls1'>
                                <Link href="/f/terms-and-conditions">Terms and Conditions</Link>
                            </div>
                            <div className='zxlpalpsl-ls1'>
                                <Link href="/f/cookie-policy">Cookie Policy</Link>
                            </div>
                            <div className='zxlpalpsl-ls1'>
                                <Link href="/f/refund-policy">Refund Policy</Link>
                            </div>
                            </div>
                        </div>


                        <div className='lxp-alpxlas fkwpel'>
                            <p>© 2024 All rights are reserved - RiseUpGram.</p>
                        </div>

            

        </div>
        </div>
        </div>

    </>)
}