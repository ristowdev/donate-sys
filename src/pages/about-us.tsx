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

export default function AboutUs() {
  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEOpro title='RiseUpGram: About Us'/>

       
      <HeaderNew noFixed={true}/>


      <div className='container'>
        <div className='wrapper'>
            <div className='lc-about-us'>
              <div className='lspp-ppdapllsp-asp'>
                  <h1>About RiseUpGram</h1>
                  <p>RiseUpGram is the #1 and most trusted leader in online fundraising. We built our reputation by serving and supporting our community every step of the way.</p>
              </div>

              <div className='lcpsl-pdlapls'>
                <div className='vsd-vl-sl'>

                  <div className='dsppc-spdps-as'>
                    <div className='clpsp--apspxlaq1a'>
                      <h3>Uniting Causes, Igniting Change</h3>
                      <p>
                      RiseUpGram is not just a platform; it's a movement dedicated to uniting causes and igniting change. We understand the power of coming together to create positive impact. With RiseUpGram, you're not just raising funds – you're building a network of support that transcends boundaries.
                      In a world full of challenges, RiseUpGram stands as a beacon of hope. Our platform connects visionaries with the resources they need to make a difference. Join us, be a part of the change, and let your cause resonate with a global community that cares.


                      </p>
                    </div>

                    <div className='lpxp-palcpla'>
                      <img src="/t1.png" />
                    </div>


                  </div>
                  <div className='dsppc-spdps-as'>
                    <div className='clpsp--apspxlaq1a'>
                      <h3>Rise Together, Thrive Together</h3>
                      <p>
                      RiseUpGram is a community-driven crowdfunding platform where dreams take root and flourish. We believe that by rising together, we can overcome any obstacle. Whether it's personal goals, community projects, or charitable initiatives, RiseUpGram provides the support system needed to thrive.
                      At RiseUpGram, we celebrate diversity and champion every cause, big or small. Our platform encourages individuals and organizations alike to share their stories, connect with like-minded supporters, and turn dreams into reality. Together, we rise and thrive.


</p>
                    </div>

                    <div className='lpxp-palcpla'>
                      <img src="/t2.png" />
                    </div>


                  </div>

                  <div className='dsppc-spdps-as'>
                    <div className='clpsp--apspxlaq1a'>
                      <h3>Your Platform, Your Voice</h3>
                      <p>
                      RiseUpGram is more than a platform; it's your voice amplified. We provide a space where individuals and communities can express their passions and overcome challenges. With us, your dreams and endeavors find resonance among a global audience ready to support your journey.
                      At RiseUpGram, we believe in the power of storytelling and the strength of community. Through our platform, you can share your narrative, connect with backers who believe in your cause, and make a lasting impact. Your journey starts here – let your voice be heard.






</p>
                    </div>

                    <div className='lpxp-palcpla'>
                      <img src="/t3.png" />
                    </div>


                  </div>

                  <div className='dsppc-spdps-as'>
                    <div className='clpsp--apspxlaq1a'>
                      <h3>RiseUpGram - A Platform for Impact</h3>
                      <p>
                      RiseUpGram is your gateway to a community that believes in the potential of every dream. Our platform goes beyond financial support; it fosters connections, builds bridges, and inspires action. Join us in the journey of turning ideas into achievements, making the world a better place, one project at a time. Your impact starts here, at RiseUpGram.





</p>
                    </div>

                    <div className='lpxp-palcpla'>
                      <img src="/t4.png" />
                    </div>


                  </div>

                </div> 

              </div>

              <div className='lpdslvsp'>
                <Link href="/fundraisers"><button style={{color:'white'}}>Donate now</button></Link>
              </div>
            </div>
        </div>
      </div>
 
       {/* <div className='container-3'>
        <div className='wrapper-3'>
          
          <div className='page-cpvdl'>
            <div className='vlvldfpppspsp'>
              <h1>About us</h1>

              <p>
              Welcome to [Your Company Name], where [brief description of your mission or purpose]. At [Your Company Name], we are dedicated to [describe the core values or goals of your organization].
              </p>

              <h2>Our Mission</h2>
              <p>[Your Company Name] was founded with a singular mission: [insert mission statement here]. We believe in [core belief or value] and strive to [specific actions or objectives related to your mission].</p>

              <h2>What Sets Us Apart</h2>
              <p>
              At [Your Company Name], we pride ourselves on [highlight a unique aspect of your organization]. Whether it's our commitment to [specific cause], our innovative approach to [industry], or our unwavering dedication to [core value], we aim to [impact or change you hope to make].
              </p>

              <h2>Our Team</h2>
              <p>
              Meet the passionate individuals behind [Your Company Name]. Our team is composed of [brief description of key team members], each bringing their unique expertise and dedication to [specific aspect of your work]. Together, we work tirelessly to [achieve your mission or goals].
              </p>

              <h2>How We Started</h2>
              <p>
              [Your Company Name] started as a [brief history or story of the organization's origins]. Since then, we have [highlight key milestones or achievements], growing into the organization we are today.
              </p>

              <h2>Get Involved</h2>
              <p>
              Join us on our journey to [mission or goal]. Whether you're a supporter, volunteer, or partner, there are many ways to get involved and make a positive impact with [Your Company Name]. Explore our website to [highlight key areas or initiatives], and together, let's make a difference.
              </p>
            </div>
            </div>
            </div>
        </div> */}

      <Footer className='ablcdp2dw'/>
 
      
    </>
  )
} 
