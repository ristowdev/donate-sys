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
import { CiUser } from "react-icons/ci"; 
import { CiShoppingTag } from "react-icons/ci";
import Link from 'next/link'
import { FaHandHoldingHeart } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import ShareModal from '@/components/share-modal'
import { useEffect, useRef, useState } from 'react'
import AllDonationsModal from '@/components/all-donation-modal'
import { useRouter } from 'next/router'
import HeaderNew from '@/components/header-new'
import { useGetFundraiserQuery } from '@/slices/fundraisers/fundraisersApiSlices'
import Loading from '@/components/loading'
import ButtonsSticky from '@/components/buttons-sticky'
import parse, { domToReact } from 'html-react-parser';
import { BASE_URL, FILES_URL, SITE_URL } from '../../../config'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import SEOpro from '@/components/SEO-pro'
import Cookies from 'js-cookie';
import SEOf from '@/components/SEO-F'

const inter = Inter({ subsets: ['latin'] })
// interface HomeProps {
//   fundraiserDetailsPro: any;
// }

// const Home: React.FC<HomeProps> = ({ fundraiserDetailsPro }) => {

// import type { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }
 

export default function Fundraiser() {

  const [shareModelOpened, setShareModelOpened] = useState<Boolean>(false);
  const [allDonationsModelOpened, setAllDonationsModelOpened] = useState<Boolean>(false);
  const router = useRouter();
  const { id, a } = router.query;
 

  const { data: fundraiserDetails, isError, isLoading, isSuccess, error } = useGetFundraiserQuery(id);

  const [showBottomButtons, setBottomButtons] = useState<boolean>(false);

  
  useEffect(()=>{
    if (shareModelOpened || allDonationsModelOpened) {
        document.documentElement.classList.add('body-scroll-lock');
      } else {
        document.documentElement.classList.remove('body-scroll-lock');
      }
  }, [shareModelOpened, allDonationsModelOpened]);

  const buttonListRef = useRef<HTMLDivElement>(null);




  const calculateProgressOfFundraiser = (raised: number, goal: number) => {
    const percentage = (raised / goal) * 100;

    // Ensure the percentage is capped at 100%
    return Math.min(percentage, 100);
  }

  function formatDonationAmount(inputValue: number) {
  
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(inputValue);
  
    return formattedAmount;
  }


  const countDonationsWithMessageLengthGreaterThanTwo = (donations: { message: string }[]): number => {
    const filteredDonations = donations.filter(donation => donation.message.length > 2);
    return filteredDonations.length;
  };

  const filteredDonations = fundraiserDetails?.donations?.filter((donation: any) => donation.message.length > 2);
 

  const formatTime = (dateTimeString: string): string => {
    const currentDate = new Date();
    const inputDate = new Date(dateTimeString);
    const timeDifference = currentDate.getTime() - inputDate.getTime();
  
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (minutes < 60) {
      return `${minutes} min${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} h`;
      } else {
        return `${hours} h`;
        // return `${hours} h ${remainingMinutes} min`;
      }
    } else {
      const remainingHours = hours % 24;
      if (remainingHours === 0) {
        return `${days} d`;
      } else {
        return `${days} d`;
      }
    }
  };

  const [visibleItems, setVisibleItems] = useState(10);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 20);
  };


  const [readMore, readMoreOpen] = useState<boolean>(false);



  function formatNumber(number: number): string {
      if (number >= 10000) {
          const formattedNumber = (number / 1000).toFixed(1);
          return `${formattedNumber}K`;
      }
      return number.toString();
  }



  useEffect(() => {
    // Retrieve the value from local storage when the component mounts
    // const storedValue = localStorage.getItem('ax90012');
    const storedValue = Cookies.get('checked');


    if (!storedValue) { 
      // If no value is found in local storage, set a default value and store it
      // const defaultValue = true;
      // localStorage.setItem('ax90012', JSON.stringify('spalsxaz'));
      Cookies.set('_ax90', JSON.stringify('GP.AXPL.A90LL'));

    }
  }, []);


  // const seoTitle = fundraiserDetails?.title || 'RiseUpGram: Donate now';
  // const seoThumbnail = fundraiserDetails?.thumbnail || 'social-share-rug.jpg';


  
  const [fTheSeo, setFTheSeo] = useState<boolean>(false);


  useEffect(()=>{
    if(fundraiserDetails){
      console.log(fundraiserDetails)
      setFTheSeo(true);
    }

  }, [fundraiserDetails]);
  return (
    <>


      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {fTheSeo && fTheSeo === true && 
        <SEOf 
          title={fundraiserDetails.title}
          desc={fundraiserDetails.short_desc}
          img={fundraiserDetails.thumbnail}
          id={fundraiserDetails._id}
        />
      }
      {/* {a === '1'
      
      && <SEOf 
        title='Help Save Little Anna - A Brave Fighter Battling Heart Condition'
        desc='My daughter, Anna, needs urgent support for a life-saving heart operation. Your generosity can make a difference. Thank you for being there for us.'
        img='help-to-anna.png'
        id='65b0a7936ac0a9003a4508f6'
      />
      } */}


    {/* {id &&  */}
      {/* <SEOf 

        title={`${
          id === '65b0a7936ac0a9003a4508f6' 
            ? 'Help Save Little Anna - A Brave Fighter Battling Heart Condition' 
            : 'RiseUpGram: Donate now.'
        }`}
        id={String(id)}
        desc={`${
          id === '65b0a7936ac0a9003a4508f6' 
          ? 'My daughter, Anna, needs urgent support for a life-saving heart operation. Your generosity can make a difference. Thank you for being there for us.' 
          : 'Join our crowdfunding community to support and fund meaningful causes. Start or contribute to campaigns that make a difference.'}`
        }
        img={`${
          id === '65b0a7936ac0a9003a4508f6'
          ? 'help-to-anna.png' 
          : 'social-share-rug.jpg'
        }`}
      
      /> */}
      {/* } */}

      {/* 65b0a7936ac0a9003a4508f6 */}
      


      {isLoading ? <Loading /> : fundraiserDetails && <>
      
      {/* <SEOpro 
        title={fundraiserDetails.title}
        thumbnail={fundraiserDetails.thumbnail}
      /> */}

      {/* <NextSeo
        title={`Fundraiser by ${fundraiserDetails.organizer} : ${fundraiserDetails.title}`}
        description={fundraiserDetails.short_desc}
        canonical={SITE_URL}
        openGraph={{
          url: `${SITE_URL+'/fundraiser/'+id}`,
          title: `${fundraiserDetails.title}`,
          description: `${fundraiserDetails.short_desc}`,
          images: [
            {
              url: `${FILES_URL+'/'+fundraiserDetails.thumbnail}`,
              width: 800,
              height: 600,
              alt: '',
              type: 'image/jpeg',
            } 
          ],
          siteName: 'RiseUpGram',
        }}
        facebook={{
          appId:'1787186335128133'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      /> */}
       
      {/* <Header className='xpaps' noFixed={true}/> */}
      <HeaderNew noFixed={true}/>



      <div className='container'> 
        <div className='wrapper'> 

          <div className='main-pro-cld'>
          <h1 className='lclpapas'>{fundraiserDetails.title} </h1>

            <div className='vlpsdps'>
              
              <div className='vldlls'>


                <div className='vpdssppsd'>
                  <img src={`${FILES_URL+'/'+fundraiserDetails.thumbnail}`} />
                </div>

                <h1 className='lclpapa1-1-s'>{fundraiserDetails.title}</h1>
                


                <div className='lxlllxlla'>
                 
                    <div className='lslv-ra-goal fd3as'>
                      <div className='lsvl-goal-progess-bar' style={{background:'#e6f5ef'}}>
                        <div className='lvl-pb-progress' style={{background:'#02a95c', width:calculateProgressOfFundraiser(fundraiserDetails.raised, Number(fundraiserDetails.goal))+'%'}}></div>

                      </div>
                    </div>

                    <div className='lvldvfdps-raised'>
                      <span>{formatDonationAmount(fundraiserDetails.raised)}</span>
                      <label>raised  of {formatDonationAmount(fundraiserDetails.goal)} goal</label>
                      <div className='sllslss'>
                        <p className='sxazzz'>•</p>
                        {/* <p className='xxpppapzp'><b>3.1K</b></p> */}
                        <p className='lzlla'><a style={{color:'black', marginRight:'5px'}}>{formatNumber(fundraiserDetails.total_donations)}</a> donations</p>
                      </div>
                    </div>

                    {/* <div className='vldsps'>
                      <span><b><label style={{color:'black'}}>3.1K</label></b> donations</span>
                    </div> */}

                    <ButtonsSticky 
                        fundraiserDetails={fundraiserDetails}  
                        setShareModelOpened={setShareModelOpened}    
                    />

                    

                </div>
                


                <div className='pc-1pdq'>

                  <div className='vldppspspssd2dd'>
                    <div className='vlpsdcsd'>
                      <CiUser size={25}/>
                    </div>
                    <span>{fundraiserDetails.organizer} is organizing this fundraiser.</span>
                  </div>


                  <div className='timc-ecl'>  
                    <div className='clcprtme dkkkksalls'>
                      <span><div>Created</div> {formatTime(fundraiserDetails.createdAt)} ago</span>
                    </div>
                    <div className='vldpsp3d33'>
                      <span>•</span>
                    </div>
                    <div className='clcprtme vdlscds'>
                      {/* <Link href="/"> */}
                        <div className='dlvpdp010de'>
                          <div className='vpdlc133333f'>
                            <CiShoppingTag size={25}/>
                          </div>
                          <span>{fundraiserDetails.category}</span>
                        </div>
                      {/* </Link> */}

                    </div>

                  </div>


                  <div className='contenc-cdslc'>
                    <p>
                    {!readMore ? parse(fundraiserDetails.long_desc.slice(0, 1000)+"...") : parse(fundraiserDetails.long_desc) }
                    {/* <br/>
                    <br/> */}
                    {/* Our family is stunned by the outpouring of support this fundraiser has generated. We've increased our fundraising goal in response and are so incredibly grateful for the community's generosity.
                    <br/>
                    <br/>
  We have been fielding many questions from individuals and media, and want to reassure everyone that the Ambrosio children, while now without their parents, have always had the presence and support of a large extended family that will ensure they are raised together in a safe and loving home.
  <br/>
                    <br/>
  We ask that you please respect the memory of Jen and Ryan by granting the family privacy during this difficult time.
                     */}
                    </p>
                    {!readMore && <div className='lxppapldadas'></div>}
                    
                  </div>
                  {!readMore && 
                  <div className='zlpas'>
                      <button onClick={()=> {readMoreOpen(true)}}>Read more</button>
                    </div>}

                  <div className='donate-share-btns'>

                    <div className='dsb-b-do'>
                      <button onClick={()=>{
                            router.push(`/donate/${fundraiserDetails._id}`)
                        }}>Donate</button>
                    </div>

                    <div className='dsb-b-do fvlf'>
                      <button onClick={()=>{setShareModelOpened(true)}}>Share</button>
                    </div>
                  </div>


                  <div className='xlpzpappa'>
                    <div className='zlpapsld'>
                        <h1>Donations <button onClick={()=>{setAllDonationsModelOpened(true)}}>({formatNumber(fundraiserDetails.total_donations)})</button></h1>
                    </div>
                    <div className='dfgvbfv4 pfpdsa'>
                      <div className='vmnbmfk'>
                        <GrLineChart size={20} color='#6d2e91'/>
                      </div>
                      <div className='pvoble12'>
                        <span>{formatNumber(fundraiserDetails.total_donations)} people just donated</span>
                      </div>
                    </div>

                    <div className='vpd1wsda'>
                    {fundraiserDetails.donations.slice(0, 3).map((donation: any, index: number)=>(

                      <div className='vpdps-1sdq' key={index}>
                          <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                          </div>
                          <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                              <span>{donation.is_anonymous ? 'Anonymous' : donation.full_name}</span>
                            </div>

                            <div className='c-p1sl'>
                              <span>{formatDonationAmount(donation.amount)}</span>
                              <div className='casp-1sa'><p>•</p></div>
                              <label>{formatTime(donation.createdAt)}</label>
                            </div>
                          </div>
                      </div>
                    ))}
                    </div>
                    
                    <div className='clspaq-pwqqqq'>
                      <button onClick={()=>{setAllDonationsModelOpened(true)}}>See all</button>
                    </div>
                  </div>


                  <div className='fr-team'>
                    <div className='vldpspd'>
                        <span>Fundraising team (1)</span>
                    </div>
                    <div className='teamm-bme'>

                      <div className='vlpd03p2d'>
                          <div className='vldpf22323'>
                            <CiUser size={25}/>
                          </div>
                          <div className='vldp2345666'>
                            <span>{fundraiserDetails.organizer}</span>
                            <label>Organizer</label>
                          </div>
                      </div>

                    </div>
                  </div>


                  <div className='words-of-support'>
                    <div className='vlvpd111'>
                      <span>Words of support ({countDonationsWithMessageLengthGreaterThanTwo(fundraiserDetails.donations)})</span>
                      <label>Please donate to share words of support.</label>
                    </div>
                    <div className='wos-list'>
                      

                      {/* {filteredDonations.map((wos:any)=>( */}
                      {filteredDonations.slice(0, visibleItems).map((wos: any, index:number) => (
                        <>
                          <div className='cps-wos-ld-ds' key={index}>
                            <div className='vl-d-qq'>
                              <div className='vud-uu-dp'>
                                <FaHandHoldingHeart size={21}/>
                              </div>
                            </div>
                            <div className='dlcp-c12dccd-1'>
                              <div className='dlcp-c12dccd'>
                                  <span>{wos.is_anonymous ? 'Anonymous' : wos.full_name}</span>
                              </div>
                              <div className='clvpd-1pa'>
                                <span>{formatDonationAmount(wos.amount)}</span>
                                <div className='vlvpdds111'><p>•</p></div>
                                <label>{formatTime(wos.createdAt)}</label>
                              </div>

                              <div className='dff31dsax-sad'>
                                <p>{wos.message}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                       
                       
                      {filteredDonations.length > visibleItems && (
                        <div className='show-more-btn-slld'>
                          <button onClick={handleShowMore}>Show more</button>
                        </div>
                      )}

                    </div>
                  </div>

                </div>



                

              </div>
              <div className='vlppsdds'>
                <div className='df3f2aa'>
                  <div className='lvldvfdps-raised'>
                    <span>{formatDonationAmount(fundraiserDetails.raised)}</span>
                    <label>raised  of {formatDonationAmount(fundraiserDetails.goal)} goal</label>
                  </div>
                  <div className='lslv-ra-goal fd3as'>
                    <div className='lsvl-goal-progess-bar' style={{background:'#e6f5ef'}}>
                      <div className='lvl-pb-progress' style={{background:'#02a95c', width:calculateProgressOfFundraiser(fundraiserDetails.raised, Number(fundraiserDetails.goal))+'%'}}></div>

                    </div>
                  </div>

                  <div className='vldsps'>
                    <span>{formatNumber(fundraiserDetails.total_donations)} donations</span>
                  </div>

                  <div className='btns-action-clas'>
                      <div className='vlpvs--dcspcs-cd1cwdf'>
                        <button onClick={()=> {setShareModelOpened(true)}}>Share</button>
                      </div>  
                      <div className='vlpvs--dcspcs-cd1cwdf-1'>
                        <button onClick={()=>{
                            router.push(`/donate/${fundraiserDetails._id}`)
                        }}>Donate now</button>
                      </div>  
                  </div>

                  <div className='dfgvbfv4'>
                    <div className='vmnbmfk'>
                      <GrLineChart size={20} color='#6d2e91'/>
                    </div>
                    <div className='pvoble12'>
                      <span>{formatNumber(fundraiserDetails.total_donations)} people just donated</span>
                    </div>
                  </div>

                  <div className='vpd1wsda'>

                    {fundraiserDetails.donations.slice(0, 3).map((donation: any, index: number)=>(

                      <div className='vpdps-1sdq' key={index}>
                          <div className='vlisd-vsd1'>
                            <FaHandHoldingHeart size={21}/>
                          </div>
                          <div className='vpds-p1sqw'>
                            <div className='flwe-1-d--fwe'>
                              <span>{donation.is_anonymous ? 'Anonymous' : donation.full_name}</span>
                            </div>

                            <div className='c-p1sl'>
                              <span>{formatDonationAmount(donation.amount)}</span>
                              <div className='casp-1sa'><p>•</p></div>
                              <label>{formatTime(donation.createdAt)}</label>
                            </div>
                          </div>
                      </div>
                    ))}

 
                  </div>
                  
                  <div className='clspaq-pwqqqq'>
                    <button onClick={()=>{setAllDonationsModelOpened(true)}}>See all</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {shareModelOpened &&  <ShareModal setShareModelOpened={setShareModelOpened} shareUrl={`/fundraiser/${id}`}/>}

      {allDonationsModelOpened && <AllDonationsModal setAllDonationsModelOpened={setAllDonationsModelOpened} fundraiserDetails={fundraiserDetails}/> }
      
      
      <Footer className='home-footer kdkakkkkakaka'/>
 
      
      </>}

    </>
  )
} 


// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const id = params?.id;
//   // Fetch data for the specific ID from the database
//   // const fundraiserDetails = /* logic to fetch data based on id */;
//   // const { data: fundraiserDetailsPro, isError, isLoading, isSuccess, error } = useGetFundraiserQuery(id);
//   const [ss, sdA] = useState<string>(['da']);
//   useEffect(()=>{
//     var xhr = new XMLHttpRequest();
//   xhr.withCredentials = false;

//   xhr.addEventListener("readystatechange", function() {
//     if(this.readyState === 4) {
//       sdA(this.responseText);
//     }
//   });

//   xhr.open("GET", `${BASE_URL}/global/fundraisers/${id}`);

//   xhr.send();
//   },[]);
//   return {
//     props: {
//       ss,
//     },
//   };
// };

// export default Home;
