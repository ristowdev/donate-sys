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
import SEOpro from '@/components/SEO-pro'
import Link from 'next/link'
import FFooter from '@/components/f/footer'
import FHeader from '@/components/f/header'


const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <style>
            {`
              body {
                background: black !important;
                /* Add more styles as needed */
                color:white !important;
              }
            `}
          </style>
      </Head>
      <SEOpro title='RiseUpGram: Privacy Policy'/>

      <FHeader />

      <div className='lxp-alpxla dlpalpxl'>
        <div className='xlpa-psalpl'>
          
          <div className='page-cpvdl'>
            <div className='vlvldfpppspsp'>
              <h1>Refund Policy</h1>


              <p>Effective Date: 09.01.2024</p>

              <p>This Refund Policy outlines the terms and conditions for refunds on digital product purchases made through our website.</p>

<h3>1. Digital Products</h3>

<p><strong>1.1 Nature of Digital Products:</strong></p>

<ul>
	<li>RiseUpGram offers digital products for sale to support fundraising efforts. These products are intangible and delivered electronically.</li>
</ul>

<p><strong>1.2 Refund Eligibility:</strong></p>

<ul>
	<li>Refunds will be considered on a case-by-case basis and may be granted in the following situations:
	<ul>
		<li>Duplicate purchase</li>
		<li>Technical issues preventing access to the digital product</li>
		<li>Unintentional purchase or other exceptional circumstances</li>
	</ul>
	</li>
</ul>

<h3>2. Refund Process</h3>

<p><strong>2.1 Contact Us:</strong></p>

<ul>
	<li>To request a refund, please contact us at [insert contact information] within [insert number of days] days of the original purchase.</li>
</ul>

<p><strong>2.2 Required Information:</strong></p>

<ul>
	<li>When requesting a refund, please provide the following information:
	<ul>
		<li>Order number</li>
		<li>Description of the issue</li>
		<li>Any relevant supporting documentation</li>
	</ul>
	</li>
</ul>

<p><strong>2.3 Refund Decision:</strong></p>

<ul>
	<li>Refunds will be processed at the sole discretion of RiseUpGram. We reserve the right to refuse a refund if we determine that the request does not meet the eligibility criteria.</li>
</ul>

<h3>3. Refund Timeframe</h3>

<ul>
	<li>Refunds, if approved, will be processed within [insert number of days] days of the approval date. Please note that the time it takes for the refund to be reflected in your account may vary depending on your payment method.</li>
</ul>

<h3>4. Non-Refundable Items</h3>

<ul>
	<li>Certain digital products may be labeled as non-refundable, and these terms will be clearly communicated during the purchase process.</li>
</ul>

<h3>5. Changes to Refund Policy</h3>

<ul>
	<li>RiseUpGram reserves the right to update or modify this Refund Policy at any time. Any changes will be effective when the revised policy is posted on our website.</li>
</ul>

<h3>6. Contact Us</h3>

<ul>
	<li>For any questions or concerns regarding our Refund Policy, please contact us at contact@riseupgram.com</li>
</ul>

<p>By making a purchase on RiseUpGram, you acknowledge that you have read, understood, and agreed to this Refund Policy.</p>

            </div>
          </div>

        </div>
      </div>


      <FFooter />

 
      
    </>
  )
} 
