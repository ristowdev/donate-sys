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
              <h1>Privacy Policy</h1>


              <p>Effective Date: 09.01.2024</p>

              <p>Thank you for choosing RiseUpGram. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website and use our services. By accessing RiseUpGram, you agree to the terms outlined in this Privacy Policy.</p>

<h3>1. Information We Collect</h3>

<p><strong>1.1 Personal Information:</strong></p>

<ul>
	<li>To facilitate transactions and provide our services, we may collect personal information such as your name, email address, and billing details.</li>
</ul>

<p><strong>1.2 Usage Information:</strong></p>

<ul>
	<li>We gather information about your interactions with our website, including pages visited, time spent on the site, and other relevant analytics.</li>
</ul>

<p><strong>1.3 Device Information:</strong></p>

<ul>
	<li>We collect information about the device you use to access RiseUpGram, such as device type, browser type, and IP address.</li>
</ul>

<h3>2. How We Use Your Information</h3>

<p><strong>2.1 Transaction Processing:</strong></p>

<ul>
	<li>We use your personal information to process transactions, deliver digital products, and provide customer support.</li>
</ul>

<p><strong>2.2 Communication:</strong></p>

<ul>
	<li>With your consent, we may use your email address to send updates, newsletters, or information related to RiseUpGram and fundraising efforts.</li>
</ul>

<p><strong>2.3 Analytics:</strong></p>

<ul>
	<li>We analyze user behavior to improve our website, enhance user experience, and optimize our services.</li>
</ul>

<h3>3. Information Sharing</h3>

<p><strong>3.1 Third-Party Service Providers:</strong></p>

<ul>
	<li>We may share your information with trusted third-party service providers who assist us in delivering our services, processing transactions, or analyzing website performance.</li>
</ul>

<p><strong>3.2 Legal Compliance:</strong></p>

<ul>
	<li>We may disclose your information if required by law or in response to legal requests.</li>
</ul>

<h3>4. Security</h3>

<ul>
	<li>RiseUpGram employs industry-standard security measures to protect your information. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.</li>
</ul>

<h3>5. Your Choices</h3>

<ul>
	<li>You can opt out of receiving promotional emails by following the unsubscribe instructions included in each email.</li>
</ul>

<h3>6. Children&rsquo;s Privacy</h3>

<ul>
	<li>RiseUpGram is not intended for users under the age of 13. We do not knowingly collect or store information from individuals under 13 years of age.</li>
</ul>

<h3>7. Changes to This Privacy Policy</h3>

<ul>
	<li>RiseUpGram reserves the right to update this Privacy Policy. Any changes will be effective upon posting the revised policy on our website.</li>
</ul>

<h3>8. Contact Us</h3>

<ul>
	<li>For any questions, concerns, or requests regarding your privacy, please contact us at contact@riseupgram.com.</li>
</ul>

<p>By using RiseUpGram, you acknowledge that you have read and understood this Privacy Policy.</p>


            </div>
          </div>

        </div>
      </div>


      <FFooter />

 
      
    </>
  )
} 
