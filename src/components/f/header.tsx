import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { IoMdArrowDown } from "react-icons/io";

interface IFHeaderProprs{
    className?: string;
}

export default function FHeader(props: IFHeaderProprs) {
    const {
        className
    } = props;
    return (<>
    <div className='fheader-clasp'> 

<div className='lxp-alpxla'>

    <div className='xlpa-psalpl'>
        <div className='lx-h-insida'>
            <div className='lpx-alpalogo'>
                <Link href="/">
                <img src="/rug-pro.png" />
                </Link>
            </div>  

            <div className='lpz-alspl dlpspappppppp'>
                <div className='zxlpalpsl-ls1 lslpxplalla'>
                    <Link href="/">Home</Link>
                </div>
                <div className='zxlpalpsl-ls1'>
                    <Link href="/#about-us">About us</Link>
                </div>
                <div className='zxlpalpsl-ls1'>
                    <Link href="/buy-a-product">Product</Link>
                </div>
                <div className='zxlpalpsl-ls1 daskxlal dosaoaopp'>
                    <Link href="/buy-a-product">
                        <button>
                        Buy now
                        </button></Link>
                </div>
            </div>
        </div>
    </div>
    
</div>

</div>

    </>)
}