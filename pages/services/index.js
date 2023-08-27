import React from 'react';
import style from './Servicepage.module.css'

// Import Swiper styles
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import { Navigation, Pagination,EffectFade ,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RootLayout from '@/components/Layout';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { AiFillLock, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaConnectdevelop, FaLinux } from 'react-icons/fa';
import {  SiFreelancer, SiTestcafe} from 'react-icons/si';
import { DiRequirejs} from 'react-icons/di';
import { GiArtificialIntelligence, GiHillFort } from 'react-icons/gi';
import { BsDatabaseExclamation } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';


// import required modules
// import { , Navigation, Pagination } from "swiper";
const ecom ='/image/New_Assets/e-com.jpg'
const ecom2 = '/image/New_Assets/at.png'
const ecom3 = '/image/New_Assets/cancel.png'
const ecom4 ='/image/New_Assets/at.png'
const ecom5 = '/image/New_Assets/login.png'
const ecom6 ='/image/New_Assets/telephone.png'

const Service = () => {
    const services = 12
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data);
        axios.post("http://192.168.0.119:8000/contact/",data)
        .then(function (response) {
            e.target.reset();
        if( response.status === 200){
            Swal.fire({
                title: 'Submit Success',
                timer: 10000,
                button: false,
                timerProgressBar: true,
                customClass: 'swal-Title',
            })
        }

          
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }
    useEffect(()=>{
        const element=    document.getElementById('main');
        element.scrollIntoView();
    
        })
    return (
        <section id='main'>
            <Swiper
                spaceBetween={30}
                // navigation={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                className={`${style.mySwiper }${style.slider_wrapper}`}
            >
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                        <div className={style.slider_img}><img src={ecom} alt="" /></div>
                        
                        <div className={style.slider_content}>
                            <h1>Cyber Security Consultancy</h1>
                            <p>The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}> <img src={ecom2} alt="" /></div>
                       
                        <div className={style.slider_content}>
                            <h1>Cyber Security Course</h1>
                            <p>Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own home network, Arena Web Security offers approachable, hands-on ethical hacking courses to help you keep your networks safe from cyber criminals & make your career at professional marketplace.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>  <img src={ecom3} alt="" /></div>
                       
                        <div className={style.slider_content}>
                            <h1>Software Testing</h1>
                            <p>Web Application & Website Testing Services, Manual Testing, Test Automation, Mobile Testing, Web Testing, Desktop Testing, Security and Penetration Testing, Game Testing, Documentation, QA and Testing, DevOps. Full-cycle Independent QA and Managed testing Services for web, desktop, mobile apps, server-side systems, and devices.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>  <img src={ecom4} alt="" /></div>
                       
                        <div className={style.slider_content}>
                            <h1>VAPT</h1>
                            <p>Vulnerability Assessment & Penetration Testing describes a broad range of security assessment services designed to identify & help address cyber security exposures across an organisation’s IT estate. To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the other types of VAPT services.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>  <img src={ecom5} alt="" /></div>
                        
                        <div className={style.slider_content}>
                            <h1>Software Maintenance</h1>
                            <p>The Arena Web Security is your one stop solution for complete software and maintenance services. We ami to provided trusted source to maintain and improve your existing application. When you hire web application maintenance services, you will be assigned a cluster of professional with the vast expertise of application maintenance services.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>  <img src={ecom6} alt="" /></div>
                        
                        <div className={style.slider_content}>
                            <h1>Software Development</h1>
                            <p>Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>    <img src={ecom} alt="" /></div>
                      
                        <div className={style.slider_content}>
                            <h1>Networking Security Service (NSS)</h1>
                            <p>Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}> <img src={ecom2} alt="" /></div>
                       
                        <div className={style.slider_content}>
                            <h1>Mobile App Development</h1>
                            <p>We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>  <img src={ecom3} alt="" /></div>
                       
                        <div className={style.slider_content}>
                            <h1>Ecommerce Solution</h1>
                            <p>Our Ecommerce development services cater to multi-disciplinary requirements of performance, security, scalability and usability. Our SEO experts optimize the top selling products of your store with an on-page and off-page Ecommerce SEO strategy that drives loads of organic traffic to your website.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>    <img src={ecom4} alt="" /></div>
                      
                        <div className={style.slider_content}>
                            <h1>SEO</h1>
                            <p>SEO is not magic. Google doesn't randomly decide which website's go to the top of the search results. The algorithm adjusts rankings based on several factors. Our SEO campaigns optimize for each of those factors to show Google your website has what it's looking for.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>    <img src={ecom5} alt="" /></div>
       
                        <div className={style.slider_content}>
                            <h1>Digital Marketing</h1>
                            <p>We are provide Build your brand reputation across online channels, facebook marketing, email marketing, Page Boost, people engagement, Video Marketing, Promote greater consumer engagement, Leverage precise audience targeting Improve your conversion rates.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.slider} container`}>
                    <div className={style.slider_img}>    <img src={ecom6} alt="" /></div>
                  
                        <div className={style.slider_content}>
                            <h1>UI/UX & Graphics Design</h1>
                            <p>We design user friendly and intuitive interfaces expected by today’s consumer using the latest UX and UI best practices. Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers. Turn to Arena Web Security’s UI and UX services.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='container '>
                <h5 className={`${style.service_title }  mt-5 mb-0`}>We provide</h5>
                <div className={`${style.service_line} mb-5 `}></div>
                <div className={`${style.serviceBoxes} d-flex `}>
                <div className={`${style.box}w-25 text-center `}>
                        <img src={ecom} alt="" className='w-50' />
                        <p>Quality service</p>
                    </div>
                    <div className={`${style.box}w-25 text-center `}>
                        <img src={ecom} alt="" className='w-50' />
                        <p>Quality service</p>
                    </div>
                    <div className={`${style.box}w-25 text-center `}>
                        <img src={ecom} alt="" className='w-50' />
                        <p>Quality service</p>
                    </div>
                    <div className={`${style.box}w-25 text-center `}>
                        <img src={ecom} alt="" className='w-50' />
                        <p>Quality service</p>
                    </div>
                </div>
            </div>
            <main className={`${style.container} ${style.services_container} container`}>
                <h5 className={`${style.service_title} mb-0 mt-5`}>Our Services</h5>
                <div className={style.service_line}></div>
                <div className={`${style.service_wrapper} ${style.first_service}`}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Cyber Security Consultancy</h2>
                        <p>The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.</p>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-gap-5'>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillLock className={style.lock}></AiFillLock>
                            <Card.Title className={style.title}>Security Services</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                      
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body >
                        <div className='d-flex'><BsDatabaseExclamation className={style.lock}></BsDatabaseExclamation>
                            <Card.Title className={style.title}>Data Privacy</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillSafetyCertificate className={style.lock}></AiFillSafetyCertificate>
                            <Card.Title className={style.title}>Industry Certified</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
               
                        </Card.Body>
                        </Card>
                        </div>
                        </div>
                        
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Cyber Security Course</h2>
                        <p>Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own home network, Arena Web Security offers approachable, hands-on ethical hacking courses to help you keep your networks safe from cyber criminals & make your career at professional marketplace.</p>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-gap-5'>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><FaLinux className={style.lock}></FaLinux>
                            <Card.Title className={style.title}>Linux</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <button className={style.service_Btn}  onClick={topFunction}><Link href='/cyberSecurity' className={`${style.service_btn} text-decoration-none underline-none text-white`}>Read More</Link></button>
                        </Card.Body>
                  
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body >
                        <div className='d-flex'><AiFillLock className={style.lock}></AiFillLock>
                            <Card.Title className={style.title}>Cyber Security</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <button className={style.service_Btn}  onClick={topFunction}><Link href='/cyberSecurity' className={`${style.service_btn} text-decoration-none underline-none text-white`}>Read More</Link></button>
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><GiHillFort className={style.lock}></GiHillFort>
                            <Card.Title className={style.title}>Digital Forensic</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <button className={style.service_Btn}  onClick={topFunction}><Link href='/cyberSecurity' className={`${style.service_btn} text-decoration-none underline-none text-white`}>Read More</Link></button>
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><GiArtificialIntelligence className={style.lock}></GiArtificialIntelligence>
                            <Card.Title className={style.title}>Open Source Int.</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <button className={style.service_Btn}  onClick={topFunction}><Link href='/cyberSecurity' className={`${style.service_btn} text-decoration-none underline-none text-white`}>Read More</Link></button>
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><SiFreelancer className={style.lock}></SiFreelancer>
                            <Card.Title className={style.title}>Freelancing</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <button className={style.service_Btn}  onClick={topFunction}><Link href='/cyberSecurity' className={`${style.service_btn} text-decoration-none underline-none text-white`}>Read More</Link></button>
                        </Card.Body>
                        </Card>
                        </div>
                        </div>
                      
                    </article>
                </div>
           
            
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>VAPT</h2>
                        <p>Vulnerability Assessment & Penetration Testing describes a broad range of security assessment services designed to identify & help address cyber security exposures across an organisation’s IT estate. To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the other types of VAPT services.</p>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-gap-5'>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillLock className={style.lock}></AiFillLock>
                            <Card.Title className={style.title}> Cyber Security technician </Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                      
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body >
                        <div className='d-flex'><BsDatabaseExclamation className={style.lock}></BsDatabaseExclamation>
                            <Card.Title className={style.title}>Network Security / Ethical Hacking</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillSafetyCertificate className={style.lock}></AiFillSafetyCertificate>
                            <Card.Title className={style.title}>Penetration Testing</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
               
                        </Card.Body>
                        </Card>
                        </div>
                        </div>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Software Testing</h2>
                        <p>Web Application & Website Testing Services, Manual Testing, Test Automation, Mobile Testing, Web Testing, Desktop Testing, Security and Penetration Testing, Game Testing, Documentation, QA and Testing, DevOps. Full-cycle Independent QA and Managed testing Services for web, desktop, mobile apps, server-side systems, and devices.</p>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-gap-5'>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><DiRequirejs className={style.lock}></DiRequirejs>
                            <Card.Title className={style.title}> Requirement Analysis</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            In this stage, software testers work with stakeholders 
                            involved in the development process...
                            </Card.Text>
                           
                        </Card.Body>
                  
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body >
                        <div className='d-flex'><SiTestcafe className={style.lock}></SiTestcafe>
                            <Card.Title className={style.title}>Test Planning</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            After thorough analysis, a test plan is created. Test planning involves aligning with relevant stakeholders on the test strategy:
                            </Card.Text>
                        
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><FaConnectdevelop className={style.lock}></FaConnectdevelop>
                            <Card.Title className={style.title}>Test Case Development</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            After defining the scenarios and functionalities to be tested, we'll write the test cases
                            </Card.Text>
                    
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><GiArtificialIntelligence className={style.lock}></GiArtificialIntelligence>
                            <Card.Title className={style.title}>Test Environment Setup</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card> 
                        <Card.Body>
                            <div className='d-flex'><IoMdDoneAll className={style.lock}></IoMdDoneAll>
                            <Card.Title className={style.title}>Test Cycle Closure ..</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                        </div>
                        </div>
                      
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Software Maintenance</h2>
                        <p>The Arena Web Security is your one stop solution for complete software and maintenance services. We are to provided trusted source to maintain and improve your existing application. When you hire web application maintenance services, you will be assigned a cluster of professional with the vast expertise of application maintenance services.</p>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-gap-5'>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillLock className={style.lock}></AiFillLock>
                            <Card.Title className={style.title}>Corrective Software Maintenance</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                      
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body >
                        <div className='d-flex'><BsDatabaseExclamation className={style.lock}></BsDatabaseExclamation>
                            <Card.Title className={style.title}>Preventative Software Mtc.. </Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillSafetyCertificate className={style.lock}></AiFillSafetyCertificate>
                            <Card.Title className={style.title}>Perfective Software Maintenance</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
               
                        </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card >
                        <Card.Body>
                            <div className='d-flex'><AiFillSafetyCertificate className={style.lock}></AiFillSafetyCertificate>
                            <Card.Title className={style.title}>Adaptive Software Maintenance</Card.Title>
                            </div>
                            
                            <Card.Text className='mt-5'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
               
                        </Card.Body>
                        </Card>
                        </div>
                        </div>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Software Development</h2>
                        <p>Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Networking Security Service (NSS)</h2>
                        <p>Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Mobile App Development</h2>
                        <p>We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Ecommerce Solution</h2>
                        <p>Our Ecommerce development services cater to multi-disciplinary requirements of performance, security, scalability and usability. Our SEO experts optimize the top selling products of your store with an on-page and off-page Ecommerce SEO strategy that drives loads of organic traffic to your website.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>SEO</h2>
                        <p>SEO is not magic. Google doesn't randomly decide which website's go to the top of the search results. The algorithm adjusts rankings based on several factors. Our SEO campaigns optimize for each of those factors to show Google your website has what it's looking for.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>Digital Marketing</h2>
                        <p>We are provide Build your brand reputation across online channels, facebook marketing, email marketing, Page Boost, people engagement, Video Marketing, Promote greater consumer engagement, Leverage precise audience targeting Improve your conversion rates.</p>
                    </article>
                </div>
                <div className={style.service_wrapper}>
                    <aside>
                        <div className={style.service_img}>
                            <img src={ecom} alt="" className='w-100' />
                        </div>
                    </aside>
                    <article>
                        <h2>UI/UX & Graphics Design</h2>
                        <p>We design user friendly and intuitive interfaces expected by today’s consumer using the latest UX and UI best practices. Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers. Turn to Arena Web Security’s UI and UX services.</p>
                    </article>
                </div>
                <div className={style.contact_container}>
                    <div className={`${style.map} lg:w-50`}>
                    <iframe className='border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4921053577773!2d90.42471487599451!3d23.76548448819581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1685432813512!5m2!1sen!2sbd" title='map' height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={`${style.contact_wrapper} lg:w-50`}>
                        <div>
                            <h5 className={`${style.service_title} mb-0 mt-5 md:mt-0`}>Contact Us</h5>
                            <div className={style.service_line}></div>
                            <p className={`${style.contact_slogan} mt-4`}>Please conatct with us for any services.<br /> We would love to hear you out.</p>
                        </div>
                        <form className={style.contact_form} onSubmit={HandleSubmit}>
                        <span>Send Message</span>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">User Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Email</label>
                                <input type="email" name="email" required/>
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Number</label>
                                <input type="number" name="number" required />
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' required ></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type="Submit" name="" value="Send" className={style.submit_btn} />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
           
        </section>
    );
};

export default Service;

Service.getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}