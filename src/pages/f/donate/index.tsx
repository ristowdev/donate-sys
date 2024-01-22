import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { FaPlay } from "react-icons/fa";
import SpecialBoxFrame from '@/components/special-box-frame'
import { IoMdArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import { CiWarning } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link'
import Loading from '@/components/loading'
import { useRouter } from 'next/router' 
import SEOpro from '@/components/SEO-pro'
import { PAYMENT_PROCESSOR_URL } from '../../../../config';

const inter = Inter({ subsets: ['latin'] })

export default function Donate() {
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  const router = useRouter();

  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            body {
              // background: #faf8f6 !important;
              /* Add more styles as needed */
            }
          `}
        </style>
      </Head>
      <SEOpro title='RiseUpGram: Donate'/>
      {/* <Header className='pdcppapd-asda'/> */}
    
      <div className='cpspplxa'>
        {/* {iframeLoading && <Loading />} */}

        <iframe src={`${PAYMENT_PROCESSOR_URL}?s=mmma`} width='100%' height="100vh" style={{border:'none'}}
                onLoad={() => setIframeLoading(false)} 
        >
        </iframe>
      </div>

 
      
    </>
  )
} 
