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
import HeaderNew from '@/components/header-new'
import Link from 'next/link'
import SEOpro from '@/components/SEO-pro'


const inter = Inter({ subsets: ['latin'] })

export default function StartARiseUpGram() {
  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    
<script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-MVSGWPKKQK"
            />

            <script
                dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-MVSGWPKKQK');
                    `,
                }}
            />  
      </Head> 
      <SEOpro title='RiseUpGram: Start a RiseUpGram'/>


      <style>
          {`
            body {
              background: #faf8f6 !important;
              /* Add more styles as needed */
            }
          `}
        </style>



      <div className='clsdp--cdsplpcs'>
        <div className='xpcl--alxl'>

          <div className='lp-x-alps'>
            <div style={{display:'flex'}}>
              <Link href="/">
                <div className='zlp-pasldp'>
                  <img src='/rug-pro.png' />
                </div>
              </Link>
            </div>

            <div className='lsp-lspaxlp'>
              <h1>Let's begin your<br/> fundraising journey</h1>
              <span>We're here to guide you every step of the way.</span>
            </div>

          </div>

        </div>

        <div className='clpsd-pldksaplxa'>
            <div className='lcd--csd-x-c-xdl'>
              <div className='lspa-xplas'>

                  
                <div className='zlp-pasldp kokdoa'>
                  <Link href="/">
                    <img src='/rug-pro.png' />
                  </Link>
                </div>
                <Link href="/sign-in">Sign in</Link>
              </div>


              <div className='laps-xlpa-1'>
                <div className='laps-xlpa'>


                  <div className='lps-lpsalp'>
                    <h1>Where will the funds go?</h1>
                    <p>Choose the location where you plan to withdraw your funds.</p>
                  </div>

                  <div className='lpals-a--lsplxas'>

                    <div className='lpx--xlapplx'>
                      <div className='laspl-salapd'>
                        <label>Country</label>
                        <select>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>New Zeland</option>
                          <option>Germany</option>
                          <option>France</option>
                        </select>
                      </div>

                      <div className='laspl-salapd dakdal'>
                        <label>Zip code</label> 
                        <input placeholder='Zip code' />
                      </div>
                    </div>

                    <div className='lpx--xlapplx'>

                      <div className='laspl-salapd '>
                        <label>Full name</label> 
                        <input placeholder='Full name' />
                      </div>

                      <div className='laspl-salapd dakdal'>
                        <label>Email</label> 
                        <input placeholder='Email address' />
                      </div>
                    </div>

                    <div className='lpx--xlapplx'>

                      <div className='laspl-salapd '>
                        <label>Fundraise goal</label> 
                        <input placeholder='$0' />
                      </div>

                      <div className='laspl-salapd dakdal'>
                        <label>Tell us more</label> 
                        <input placeholder='Describe your fundraise' />
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <div className='ls-palpxla'>
                <button onClick={()=>{alert("Your aplication was sucessfully. Our team will contact you soon!")}} style={{color:'white'}}>Apply</button>
              </div>
            </div>
        </div>

      </div>
 
      
    </>
  )
} 
