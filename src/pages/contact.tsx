import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { FaPlay } from "react-icons/fa";
import SpecialBoxFrame from '@/components/special-box-frame'
import { IoMdArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoArrowDownCircleOutline, IoCheckmarkOutline } from "react-icons/io5";
import Footer from '@/components/footer'
import HeaderNew from '@/components/header-new'
import Link from 'next/link'
import SEOpro from '@/components/SEO-pro'
import { useState } from 'react'
import { BASE_URL } from '../../config'
import { BiError } from "react-icons/bi";


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {

  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [successfullySendMessage, setSuccessfullySendMessage] = useState<string>('');

  const handleSendMessage = async () => {
    if (fullName && email && message && phoneNumber) {
      try {
        const response = await fetch(`${BASE_URL}/global/contact-send-message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name:fullName,
            email,
            message,
            phone_number: phoneNumber,
          }),
        });

        if (response.ok) {
          setSuccessfullySendMessage('ok');
          setFullName('');
          setEmail('');
          setMessage('');
          setPhoneNumber('');
          // Handle successful response here if needed
        } else {
          setSuccessfullySendMessage('error');
          // Handle error response here if needed
        }
      } catch (error) {
        console.error('Error occurred while sending the request:', error);
        setSuccessfullySendMessage('error');
      }
    } else {
      alert('All fields are required!');
    }
  };

  const handleSendMessage2 = async () => {
    if (fullName && email && message && phoneNumber) {
      try {
        const response = await fetch(`${BASE_URL}/global/contact-send-message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name:fullName,
            email,
            message,
            phone_number: phoneNumber,
          }),
        });

        if (response.ok) {
          setSuccessfullySendMessage('ok');
          setFullName('');
          setEmail('');
          setMessage('');
          setPhoneNumber('');
          // Handle successful response here if needed
        } else {
          setSuccessfullySendMessage('error');
          // Handle error response here if needed
        }
      } catch (error) {
        console.error('Error occurred while sending the request:', error);
        setSuccessfullySendMessage('error');
      }
    } else {
      alert('All fields are required!');
    }
  }

  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEOpro title='RiseUpGram: Contact'/>

       
      <HeaderNew noFixed={true}/>


      <div className='container'>
        <div className='wrapper'>
            <div className='contact-us-adolpkoda'>

              <div className='qq-cal-l'>

                <div className='lp-cpsl--pcslp'>
                  <h1>Contact us</h1>
                  <p>Whether you have a question, need assistance, or simply want to connect, our team is here for you! Expect swift responses and 24/7 availability to address your needs. Your satisfaction is our top priority.</p>
                  <ul className='dlsapp-xpap'>
                    <li>Prompt Assistance</li>
                    <li>Anytime Support</li>
                    <li>Your Thoughts Matter</li>
                    <li>Explore Collaborations</li>
                    <li>Media Inquiries Welcome</li>
                  </ul>
                  
                  <p>Connect with us to make your experience seamless. Lorem ipsum dolor sit amet consectetur adipisicing elit.






</p>
                </div>

              </div>
              
              <div className='qq-cal-l-1'>
                <div className='l-as--s-appxla'>
                  <div className='fwlpflwp'>

                    <div className='lcpsa-lasplxxx'>
                      <label>Full name</label>
                      <input placeholder='Name'
                        onChange={(e)=>{setFullName(e.target.value)}}
                        value={fullName}
                      />
                    </div>

                    <div className='lcpsa-lasplxxx'>
                      <label>Email</label>
                      <input placeholder='Email address'
                      
                      onChange={(e)=>{setEmail(e.target.value)}}
                      value={email}
                      />
                    </div>

                    <div className='lcpsa-lasplxxx'>
                      <label>Phone number</label>
                      <input placeholder='Phone number'

                        type='number'
                      
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}
                        value={phoneNumber}
                      />
                    </div>



                    <div className='lcpsa-lasplxxx'>
                      <label>Message</label>
                      <input placeholder='Message'
                      
                      onChange={(e)=>{setMessage(e.target.value)}}
                      value={message}
                      />
                    </div>

                    <div className='ldpsa-lcspl'>
                      <button onClick={()=>{handleSendMessage()}}>Send</button>
                    </div>


                    {successfullySendMessage === 'ok' ? 
                    
                    <div className='copied-blpsd' style={{marginTop:'20px'}}>
                            <div className='vps-pd'>
                                <IoCheckmarkOutline size={19} color='#02A95C'/>
                            </div>
                            <div className='v-ds-1-1'>
                                <span>Successfully sent!</span>
                            </div>
                        </div>
: successfullySendMessage === 'error' &&

<div className='copied-blpsd' style={{marginTop:'20px'}}>
                            <div className='vps-pd'>
                              <BiError size={19} color='red'/>
                            </div>
                            <div className='v-ds-1-1'>
                                <span style={{color:'red'}}>Something went wrong.</span>
                            </div>
                        </div>
  }

                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer className='ablcdp2dw'/>
 
      
    </>
  )
} 
