import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { BASE_URL } from '../../config';
import { IoCheckmarkOutline } from "react-icons/io5";
import { BiError } from "react-icons/bi";
import FFooter from '@/components/f/footer';
import FHeader from './f/header';


interface Props {
    // Define your component props here
}

const FIndex: React.FC<Props> = () => {



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

    return (

        <>
        
        <FHeader />


        <div className='lxp-alpxla'>
            <div className='xlpa-psalpl'>

                <div className='xlpa-ppxlapl'>
                    <div className='lxp-apxplas'>
                        <h1>Your Passport to a World of Impactful Giving</h1>

                        <p>Embark on a Transformative Journey as Your Passport Opens the Door to a World of Impactful Giving, Where Every Page Unveils Stories that Inspire Change and Ignite Hope.</p>


                        <div className='zxlpalpsl-ls1 daskxlal dalpxlpa' style={{marginLeft:0}}>
                                <Link href="/#book-a-call">
                                    <button>
                                    Book a call
                                    </button></Link>
                            </div>



                        <img src="/preschool-fundraising-ideas_11zon.jpg" />
                    </div>

                    
                </div>

            </div>
        </div>




        <div className='lxp-alpxla' >
            <div className='xlpa-psalpl' >

                <div className='xlpa-ppxlapl' id="about-us">
                    <div className='xlpa-ppxlapl-d-as-aa' >
                        <h1>About us</h1>
                        


                        <p>


                        We are a community of changemakers united by a shared belief in the transformative power of giving. At the core of our mission is the commitment to create positive change by harnessing the collective strength of individuals who believe in making a difference.
Driven by the idea that every act of kindness, no matter how small, contributes to a greater impact, we have come together to curate a collection that goes beyond words. Our mission is to turn the pages of inspiration into tangible change, using the universal language of storytelling.
</p>

<div className='lxppallx--allx'>
    <img src="/dddd.jpg" />
</div>
<p> 
What sets us apart is the unwavering belief that your passport to a world of impactful giving begins with the simple act of reading. Within these pages, you'll discover narratives that resonate, ideas that provoke, and a roadmap that empowers you to contribute to causes that matter.
As stewards of change, we are dedicated to channeling the proceeds from our eBook into initiatives that leave a lasting imprint on lives. By joining us, you become a vital part of a community that believes in the potential of every story to shape a better world.
Thank you for being a crucial chapter in our journey. Together, let's turn the ordinary into the extraordinary and make a lasting impact on the world we share.
                        </p>
                    </div>
                </div>

            </div>
        </div>


        <div className='lxp-alpxla'>
            <div className='xlpa-psalpl'>

                <div className='xlpa-ppxlapl flpaslpxla' id="product">
                    <div className='xlpa-ppxlapl-d-as-aa'>
                        <h1>Our product</h1>
                    </div>

                    
                    <div className='lpx-alpsldp-x-all'>
                        <div className='lpx-alpsl'>
                            <img src="/cmb-book-image.png" />
                        </div>

                        <div className='lpz-lpasl'>
                            <p>

                            Introducing our Blueprint for Impact: A strategic guide designed to amplify your influence and drive success in your next fundraising endeavor. This comprehensive blueprint is not just a plan; it's your key to unlocking unprecedented potential for positive change.
<br/>
<br/>
Navigate the landscape of impactful fundraising with confidence as our Blueprint equips you with proven strategies, effective communication techniques, and a roadmap tailored to elevate your cause. Crafted through a combination of experience and innovation, this resource is a compass guiding you towards your fundraising goals.
                       <br/><br/>
                       Discover the art of compelling storytelling, learn how to engage your audience effectively, and master the science of leveraging digital platforms for maximum reach. The Blueprint for Impact is not just a tool; it's your companion on the journey to creating a meaningful difference.   
                       
                            </p>
                        </div>
                    </div>

                    <div className='zxlpalpsl-ls1 daskxlal dalpxlpa dlaplxpa'>
                                <Link href="/#book-a-call">
                                    <button>
                                    Book a call
                                    </button></Link>
                            </div>
                </div>

            </div>
        </div>


        <div className='lxp-alpxla'>
            <div className='xlpa-psalpl'>

                <div className='xlpa-ppxlapl flpaslpxla' id="book-a-call">
                    <div className='xlpa-ppxlapl-d-as-aa'>
                        <h1>Book a call</h1>
                    </div>


                    <div className='lxp-alpxla-psla flplwpdfl'>

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
        </div>

 

      <FFooter />


        </>

    );
};

export default FIndex;
