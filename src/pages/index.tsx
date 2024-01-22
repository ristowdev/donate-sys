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
import { faqs } from '../../faqs'
import { useState } from 'react'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import FIndex from '@/components/fIndex'
import Loading from '@/components/loading'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const { gc } = router.query;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [underConstruction, setUnderConstruction] = useState<boolean>(false);
  const [isloadingg, setisloadding] = useState<boolean>(true);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  useEffect(() => {
    // Retrieve the value from cookies when the component mounts
    const storedValue = Cookies.get('_ax90');

    if (storedValue) {
      // Parse the stored value from string to boolean
      const parsedValue = JSON.parse(storedValue);
      if(parsedValue === 'GP.AXPL.A90LL'){
        setUnderConstruction(true);  
        setisloadding(false);
      }else{
        setisloadding(false);
      }
      // console.log(parsedValue)
      // setIsChecked(parsedValue);
    }else{
      if(String(gc) === 'dca'){
        Cookies.set('_ax90', JSON.stringify('GP.AXPL.A90LL'));

        setUnderConstruction(true);
        setisloadding(false);

      }
      setisloadding(false);

    }
  }, [gc]); 
  // console.log(gc)

  return (
    <> 
      {isloadingg ?<>
      <Loading />
      </> : 
      
      underConstruction ?
      <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

      
      </Head>
      <SEOpro title={'RiseUpGram: Your home for help'}/>
       
      <HeaderNew />

      <div className='container'> 
        <div className='wrapper'> 
          <div className='hero-section'>

              <div className='call-to-action-section'>
                <div className='blur-div'></div>
                <div className='all-info-outside-blur'>
                  <h1>Great futures are built <br/>with a small charity</h1>
                  <p>The world largest fundraising platform, <br/>optimized for your charity in a more easy way</p>
                  <div className='ctas-buttons'>
                    <div className='ctas-btns-donate-btn ctas-btn-overall'>
                      <Link href="/fundraisers"><button>Donate now</button></Link>
                    </div>
                    <div className='ctas-btns-watch-btn ctas-btn-overall'>
                      <button><div style={{marginRight:'11px',display:'flex',alignItems:'center',justifyContent:'center'}}><FaPlay size={14}/></div> Watch video</button>
                    </div>
                  </div>
                </div>

              </div>
          </div>

        </div>
      </div> 

      <div className='container-2'> 
        <div className='wrapper-2'> 
          <div className='random-projects'> 
              
              
              <div className='rp-spadpdsdasd'>
                <div className='rp-box ad-firs'>
                  <div className='inside-rp-box'>
                    <div className='main-text-sprpr'>
                      <h1>65%</h1>

                      <p>17 Thousend people Died, Thousends injuried, Houses and Buildings Destroyed. Turkey-Syria Grieves.</p>
                    </div>
                    </div>
                    <div className='dpdpdpdpdppp azlal'>

                        <div className='rp-ba-d-n-btn'>
                          <button><span style={{color:'white'}}>Donate now</span>
                            <div className='rpbdn-btn'>
                            <IoMdArrowDown color="#043F2E" size={28} className='sdpap-ss--acv'/>
                            </div>
                          </button>
                      </div>
                    </div>

                  </div>

                  <div className='arp-dpdpa vlxzzz'>
                    <div className='indp-dap'>
                      <img src="/ziuzuz.png" />
                    </div>
                    <div className='apdpdass-ss'>
                      <span>Let them<br/> be heard</span>
                    </div>
                  </div>
              </div>



            <div className='clvldlvsd'>
              <div className='apdp-dpsdpsapda'>
                <div className='fldps-sss'></div>
                <img src='/buz.jpg' />
                <div className='dpdpss--sa'>
                  <div className='dppda-dpsccsd'>
                    
                    <div className='dppdpd'>
                      <span>Health</span>
                    </div>

                    <div className='fpfppvpvbb'>
                      <p>Lifeskills for 2,865 Children in South Africa</p>
                    </div>

                  </div>

                </div>
              </div>


              <div className='dpdppdvbbbvvbdfd vdslpcppappsss'>
                <div className='pvpvpvv'>
                    <h4>Join 5000+<br/> People Donate</h4>
                </div>
                <div className='dppv-bfpdfbdbdf'>

                <div className='rp-ba-d-n-btn mmkkklll'>
                            <Link href="/fundraisers">
                            <button><span>Join community</span>
                              <div className='rpbdn-btn'>
                              <IoMdArrowDown color="white" size={28} className='sdpap-ss--acv'/>
                              </div>
                            </button>
                            </Link>

                      </div>

                      <div className='ldvlsppclllxx'>
                      <Link href="/fundraisers">
                        <button><span>Join community</span></button>
                        </Link>
                      </div>
                </div>
              </div>

              <div className='apdp-dpsdpsapda ckvkkdlslskdd'>
                <div className='fldps-sss'></div>
                <img src='/pict_large.jpg' />
                <div className='dpdpss--sa'>
                  <div className='dppda-dpsccsd'>
                    
                    <div className='dppdpd'>
                      <span>Education</span>
                    </div>

                    <div className='fpfppvpvbb'>
                      <p>Spoonsor food, education to Orphans Kenya</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>


            <div className='rp-spadpdsdasd fkfkfkd'>

                <div className='rp-box ad-firs' style={{background:'#C8F168'}}>
                      <img src="/handtohand.png"  className='dllllvlvl'/>
                  {/* <div className='inside-rp-box'> */}
                                             {/* <h1>65%</h1>

                      <p>17 Thousend people Died, Thousends injuried, Houses and Buildings Destroyed. Turkey-Syria Grieves.</p> */}
                    {/* </div> */}
                    <div className='dpdpdpdpdppp'>

                        <div className='rp-ba-d-n-btn'>
                        <Link href="/fundraisers">
                          <button style={{background:'#A6CA5B', border:'none', color:'#1D2A21'}}><span>Explore more</span>
                            <div className='rpbdn-btn' style={{background:'#243124'}}>
                            <IoMdArrowDown color="#D9FE70" size={28} className='sdpap-ss--acv'/>
                            </div>
                          </button>
                          </Link>
                    </div>
                </div>

               
              

              </div>
              <div className='arp-dpdpa' style={{background:'#243124'}}>
                  <div className='indp-dap'>
                    <img src="/giclv.png" />
                  </div>
                  <div className='apdpdass-ss' >
                    <span style={{color:'#DBFE70'}}>Your home<br/> for help</span>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>


      <div className='container-2'> 
        <div className='wrapper-2 vmfkdlvfk'> 

          <div className='first-section'>
            {/* <div className='bg-fs'>
              <img src="/bgwall.png"/>
            </div> */}


            <div className='text-main desktop'>
                <h1>Fundraising on RiseUpGram takes<br/>just a few minutes</h1>
            </div>


            <div className='text-main mobile'>
                <h1>Fundraising on RiseUpGram takes just a few minutes</h1>
            </div>

            <div className='three-boces'>

                <div className='dppfpv'>
                  <div className='pfpvpvdv'>
                    <img src="/cllc.png" />
                  </div>

                  <div className='pcpvpv'>
                    <h5>Give Happines</h5>
                  </div>    
                  <div className='cpvpsdpvsd'>
                    <p>Giving happiness to others is one of the most fulfilling things you can do in life.</p>
                  </div>
                </div>


                <div className='dppfpv vlvlvlvlvll'>
                  <div className='pfpvpvdv'>
                    <img src="/lovv.png" />
                  </div>

                  <div className='pcpvpv'>
                    <h5>Share Love</h5>
                  </div>    
                  <div className='cpvpsdpvsd'>
                    <p>When you share love with those around you, you create a ripple effect of kindness.</p>
                  </div>
                </div>

                <div className='dppfpv'>
                  <div className='pfpvpvdv'>
                    <img src="/oscc.png" />
                  </div>

                  <div className='pcpvpv'>
                    <h5>Build Socially</h5>
                  </div>    
                  <div className='cpvpsdpvsd'>
                    <p>Building socially requires not just connecting with others, but also actively contributing.</p>
                  </div>
                </div>
            </div>
          </div>
        
        </div>
      </div>

      <div className='container-2'> 
        <div className='wrapper-2'> 

          <div className='secound-section'>
              
              <div className='ss-header'>
                  <div className='ss-h-cap'>
                    <h1>Fundrasiers In Extreme Need</h1>
                  </div>
                  <div className='ss-h-arrows'>

                  </div>
              </div>

              <div className='list-fundraisers-row'>
                <div className='fundraiser-single-l-r'>
                  <div className='fslr-p'>
                      <div className='fslr-p-img'>
                        <img src="/tsclv.png" />
                      </div>
                      <div className='flpr-pet-te'>
                        <h1>Help Turkey and Syira <br/>Earthquake Relief Fund</h1>

                        <p>Since 2006, SOIL has been working in urban...</p>
                      </div>

                      <div className='lvldvfdps-raised'>
                        <span>$90,294</span>
                        <label>raised  of $100,000 goal</label>
                      </div>

                      <div className='lslv-ra-goal'>
                        <div className='lsvl-goal-progess-bar'>
                          <div className='lvl-pb-progress'></div>
                        </div>
                      </div>

                      <div className='slc-total-supporters'>
                        <div className='cpvpvpvfffw1ew'>
                          <div className='clvlvfpppp'>
                            <FaHeart size={20} color='#E86273'/>
                          </div>
                          <div className='pvpd-vdsvs'>
                            <span>10,583 Supporters</span>
                          </div>
                        </div>
                        <div className='d-type-dpv'>
                          <span>Medical</span>
                        </div>
                      </div>
                  </div>
                </div>



                <div className='fundraiser-single-l-r vfvdfvd'>
                  <div className='fslr-p'>
                      <div className='fslr-p-img'>
                        <img src="/tsclv.png" />
                      </div>
                      <div className='flpr-pet-te'>
                        <h1>Help Turkey and Syira <br/>Earthquake Relief Fund</h1>

                        <p>Since 2006, SOIL has been working in urban...</p>
                      </div>

                      <div className='lvldvfdps-raised'>
                        <span>$90,294</span>
                        <label>raised  of $100,000 goal</label>
                      </div>

                      <div className='lslv-ra-goal'>
                        <div className='lsvl-goal-progess-bar'>
                          <div className='lvl-pb-progress'></div>
                        </div>
                      </div>

                      <div className='slc-total-supporters'>
                        <div className='cpvpvpvfffw1ew'>
                          <div className='clvlvfpppp'>
                            <FaHeart size={20} color='#E86273'/>
                          </div>
                          <div className='pvpd-vdsvs'>
                            <span>10,583 Supporters</span>
                          </div>
                        </div>
                        <div className='d-type-dpv'>
                          <span>Medical</span>
                        </div>
                      </div>
                  </div>
                </div>


                <div className='fundraiser-single-l-r cdnnnvsmd'>
                  <div className='fslr-p'>
                      <div className='fslr-p-img'>
                        <img src="/tsclv.png" />
                      </div>
                      <div className='flpr-pet-te'>
                        <h1>Help Turkey and Syira <br/>Earthquake Relief Fund</h1>

                        <p>Since 2006, SOIL has been working in urban...</p>
                      </div>

                      <div className='lvldvfdps-raised'>
                        <span>$90,294</span>
                        <label>raised  of $100,000 goal</label>
                      </div>

                      <div className='lslv-ra-goal'>
                        <div className='lsvl-goal-progess-bar'>
                          <div className='lvl-pb-progress'></div>
                        </div>
                      </div>

                      <div className='slc-total-supporters'>
                        <div className='cpvpvpvfffw1ew'>
                          <div className='clvlvfpppp'>
                            <FaHeart size={20} color='#E86273'/>
                          </div>
                          <div className='pvpd-vdsvs'>
                            <span>10,583 Supporters</span>
                          </div>
                        </div>
                        <div className='d-type-dpv'>
                          <span>Medical</span>
                        </div>
                      </div>
                  </div>
                </div>


                <div className='fundraiser-single-l-r budd' style={{marginRight:'0px'}}>
                  <div className='fslr-p'>
                      <div className='fslr-p-img'>
                        <img src="/tsclv.png" />
                      </div>
                      <div className='flpr-pet-te'>
                        <h1>Help Turkey and Syira <br/>Earthquake Relief Fund</h1>

                        <p>Since 2006, SOIL has been working in urban...</p>
                      </div>

                      <div className='lvldvfdps-raised'>
                        <span>$90,294</span>
                        <label>raised  of $100,000 goal</label>
                      </div>

                      <div className='lslv-ra-goal'>
                        <div className='lsvl-goal-progess-bar'>
                          <div className='lvl-pb-progress'></div>
                        </div>
                      </div>

                      <div className='slc-total-supporters'>
                        <div className='cpvpvpvfffw1ew'>
                          <div className='clvlvfpppp'>
                            <FaHeart size={20} color='#E86273'/>
                          </div>
                          <div className='pvpd-vdsvs'>
                            <span>10,583 Supporters</span>
                          </div>
                        </div>
                        <div className='d-type-dpv'>
                          <span>Medical</span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>


      <div className='third-section'>
          
            <div className='blurs'>
              <div className='ts-blurs-blur bl-left'> 
                
              </div>


              <div className='ts-blurs-blur bl-right'> 
                
              </div>
            </div>
            

            <div className='container-2'> 
              <div className='wrapper-2'> 

                  <div className='helphelphe-lpd'>

                    <div className='clvlspdvs-hellp-lef'>
                      
                      <div className='vppvf-pvdfs-dvvvqwe'>
                        <div className='lt-pflf'>
                            <div className='ltep-wvpbpfe'>
                              <img src="/afrikanac.png" />
                            </div>
                        </div>


                        <div className='lt-pflf-b'>
                            <div className='ltep-wvpbpfe vzfdpep'>
                              <img src="/itpce.png" />
                            </div>
                        </div>

{/* 
                        <div className='lt-pflf-a'>
                            <div className='ltep-wvpbpfe vzfdpep'>
                              <img src="/itpce.png" />
                            </div>
                        </div> */}


                        <div className='lt-pflf-c'>
                            <div className='ltep-wvpbpfe vzfdpep'>
                              <img src="/gangster.png" />
                            </div>
                        </div>


                        <div className='lt-pflf-a'>
                            <div className='ltep-wvpbpfe'>
                              <img src="/kukle.png" />
                            </div>
                        </div>

                      </div>


                    </div>

                    <div className='main-blfdpv'>
                      <h1 className='desktop-tablet'>Join our community for donating and be a part<br/> of a positive change in the world. With over:</h1>
                      <h1 className='tablet'>Join our community for donating and be a part of a positive change in the world. With over:</h1>

                      <div className='nvmb-blf'>
                        <span>120,859+</span>
                      </div>

                      <div className='cta-vnm-btn-fvl'>
                        <label>people already joining</label>
                        <Link href="/fundraisers"><button className='vldlsvl'>Yes, I want to join community</button></Link>
                        

                        <Link href="/fundraisers"><button className='vldlsvl-1'>Join community</button></Link>
                      </div>
                    </div>

                  </div>
              
              </div>
          </div>

      </div>
      

      <div className='fourth-section kweokf'>  

          <div className='track-main'>
              <div className='tcm-fts-s'>
                  <span>let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other </span>
              </div>

              <div className='tcm-fts-s ag-v-as'>
                  <span>let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other * let's help each other </span>
              </div>
          </div>

      </div>

      <div className='lpsda-pxlpals'>
        <div className='ldlpas-xplapls-1'>
            <img src="/hh1.png" />
        </div>
        <div className='ldlpas-xplapls-2'>
            <img src="/hh2.png" />
        </div>
      </div>
      {/* ghel1.png */}

      {/* <div className='fourth-section'>
          <div className='track-main'>

            <div className='tcm-fts-s'>

              <div className='bfdllpbfd-vdf'>
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
              </div> 
            </div>



            <div className='tcm-fts-s ag-v-as'>

              <div className='bfdllpbfd-vdf'>
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
                <div className='vvlpbfd'>
                  <span>* let's help each other</span>
                </div> 
              </div> 
            </div>
            
          </div> 
      </div> */}



      <div className='container-2'> 
          <div className='wrapper-2'> 
            <div className='fifth-section'>
              <div className='vlvpdsp-tee'>
                  <h1>Meet our team</h1>
                  <p className='desktop'>The world's largest social fundraising platform, optimized<br/> for your charity in a more easy way</p>
                  <p className='mobile'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
              </div>

              <div className='team-members-dll'>
                  <div className='dvpd-pclc-tm-single'>
                      <div className='clvppd'>
                        <img src="/habert-ceo.webp" />
                      </div>
                      <div className='whosxldscl'>
                          <h2>Anotiono Roberto</h2>
                          <span>CEO & Founder</span>
                      </div>
                  </div>

                  <div className='dvpd-pclc-tm-single vfvdfvd'>
                      <div className='clvppd'>
                        <img src="/stt.webp" />
                      </div>
                      <div className='whosxldscl'>
                          <h2>Amanda Rodriguez</h2>
                          <span>Chief Marketing Officer</span>
                      </div>
                  </div>

                  <div className='dvpd-pclc-tm-single cdnnnvsmd'>
                      <div className='clvppd'>
                        <img src="/bbb.webp" />
                      </div>
                      <div className='whosxldscl'>
                          <h2>Deborah Reynolds</h2>
                          <span>Chief Financial Officer</span>
                      </div>
                  </div>

                  <div className='dvpd-pclc-tm-single budd'>
                      <div className='clvppd'>
                        <img src="/lead.webp" />
                      </div>
                      <div className='whosxldscl'>
                          <h2>Melissa Taylor</h2>
                          <span>Customer Support Manager</span>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>


      <div className='container-2'> 
          <div className='wrapper-2 vmfkdlvfk'> 
            <div className='sixth-section'>
                  <div className='vlpd-lodp'>
                      <img src="/question-logo.png" />
                  </div>
                  <div className='top-vlgpb-bf'>
                      <h1>Frequently asked questions</h1>
                      <p>Have another question? Email us at <u>contact@riseupgram.com</u></p>
                  </div>

                  <div className='question-list'>
                  {faqs.map((faq, index) => (
                  <div key={index} className={`question-single-pv ${openIndex === index ? 'open' : ''}`}>
                    <div className='qpps-question' onClick={() => toggleFAQ(index)}>
                      <div className='asp-pcqi'>
                        <span>{faq.question}</span>
                      </div>
                      <div className={`aro-varorov-vd ${openIndex === index ? 'rotate' : ''}`}>
                        <IoArrowDownCircleOutline size={30} />
                      </div>
                    </div>
                    {openIndex === index && (
                      <div className='ansewrsors'>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                  </div>
            </div>
        </div>
      </div>


      <Footer className='home-footer'/>
                   
                   
      </> : <>
          
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <style>
            {`
              body {
                background-color: black !important;
                /* Add more styles as needed */
              }
 
            `}
          </style>
          </Head>
          <SEOpro title={'RiseUpGram: Your home for help'}/>

          <FIndex />
      
      </>
    }
 
      
    </>
  )
} 
