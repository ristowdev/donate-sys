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
              <h1>Cookie Policy</h1>


              <p>Effective Date: 09.01.2024</p>

              <p>This Cookie Policy explains how we use cookies and similar technologies on our website. By continuing to browse or use our site, you agree to the use of cookies as described in this policy.</p>

<h3>1. What Are Cookies?</h3>

<p><strong>1.1 Definition:</strong></p>

<ul>
	<li>Cookies are small text files that are placed on your device when you visit a website. They are commonly used to make websites work more efficiently and provide a better user experience.</li>
</ul>

<p><strong>1.2 Types of Cookies:</strong></p>

<ul>
	<li>We use both session and persistent cookies. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a longer period.</li>
</ul>

<h3>2. How We Use Cookies</h3>

<p><strong>2.1 Essential Cookies:</strong></p>

<ul>
	<li>These cookies are necessary for the proper functioning of our website. They enable you to navigate the site and use its features.</li>
</ul>

<p><strong>2.2 Performance Cookies:</strong></p>

<ul>
	<li>We use performance cookies to collect information about how visitors use our website. This helps us improve the site&#39;s performance and user experience.</li>
</ul>

<p><strong>2.3 Functionality Cookies:</strong></p>

<ul>
	<li>These cookies allow our website to remember choices you make (such as language preferences) and provide enhanced features.</li>
</ul>

<h3>3. Third-Party Cookies</h3>

<p><strong>3.1 Analytics:</strong></p>

<ul>
	<li>We may use third-party analytics services (e.g., Google Analytics) to analyze how users interact with our site. These services use cookies to collect information about your use of the site.</li>
</ul>

<p><strong>3.2 Social Media:</strong></p>

<ul>
	<li>Our website may include social media features that use cookies to track your interactions with these features.</li>
</ul>

<h3>4. Cookie Management</h3>

<p><strong>4.1 Consent:</strong></p>

<ul>
	<li>By using our website, you consent to the placement of cookies on your device as described in this policy.</li>
</ul>

<p><strong>4.2 Browser Settings:</strong></p>

<ul>
	<li>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the site.</li>
</ul>

<h3>5. Changes to Cookie Policy</h3>

<ul>
	<li>We may update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be effective when the revised policy is posted on our website.</li>
</ul>

<h3>6. Contact Us</h3>

<ul>
	<li>For any questions or concerns regarding our Cookie Policy, please contact us at contact@riseupgram.com.</li>
</ul>

<p>By using RiseUpGram, you acknowledge that you have read and understood this Cookie Policy.</p>

            </div>
          </div>

        </div>
      </div>


      <FFooter />

 
      
    </>
  )
} 
