
import Link from 'next/link'
import style from  './Footer.module.css'
import { useEffect } from 'react'
import ScrollToTop from 'react-scroll-to-top'
const icon1 = '/image/New_Assets/address.png'
const icon2 = '/image/New_Assets/telephone.png'
const icon3  ='/image/New_Assets/at.png'
const social1 ='/image/New_Assets/facebook.png'
const social2 = '/image/New_Assets/youtube.png'
const social3 ='/image/New_Assets/linkedin.png'
const favIcon ='/image/favicon.ico'


const Footer = () => {
    // const location = useLocation()
    // className={`${location.pathname === '/new' && 'parent_container'}`}
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      

 
    return (
        <section className={style.parent_container} id='main'>
              <ScrollToTop smooth />
            <div className={`container ${style.footerCard} `}>
                <div className={style.footer_wrapper}>
                    <div className={style.footer_wrapper_img}>
                    <img className={style.icon} src={icon1} alt="" />
                    </div>
                    <div>
                        <h5>Address</h5>
                        <p>House No-1, BLOCK-B Banasree, <br /> Main Road Rampura, Dhaka - 1219</p>
                    </div>
                </div>
                <div className={`${style.phone} ${style.footer_wrapper}`}>
                <div className={style.footer_wrapper_img}>
                      <img className={style.icon} src={icon2} alt="" /> 
                    </div>
                    
                    <div>
                        <h5>Phone</h5>
                        <div>
                            <p>+880 1310 333 444</p>
                            <p>+880 1885 841 489</p>
                        </div>
                    </div>
                </div>
                <div className={style.footer_wrapper}>
                <div className={style.footer_wrapper_img}>
                      <img className={style.icon} src={icon3} alt="" /> 
                    </div>
                    <div>
                        <h5>Email</h5>
                        <p>info@arenawebsecurity.net</p>
                    </div>
                </div>
            </div>
            <footer className={style.footer}>
                <div>
                    <div className={`position-relative ${style.contactWrapper} `}>
                        <img src={favIcon} alt=""/>
                        <h1 className='text-white text-center'>Contact Us</h1>
                        <p className='text-white text-center pb-5'>Please contact us to want know more about us.</p>
                    </div>
                    <div className={`container ${style.footerContainer} `}>
                        <div>
                            <h5>Information</h5>
                            <ul className={style.list_wrapper}>
                                <Link href='/about' className='text-decoration-none' onClick={topFunction} >  <li>About Us</li></Link>
                                <Link href='/contact' className='text-decoration-none' onClick={topFunction}>  <li>Contact</li></Link>
                                <Link href='/faq' className='text-decoration-none' onClick={topFunction}>   <li>FAQ</li></Link>
                                <Link href='/career' className='text-decoration-none' onClick={topFunction}>  <li>Career</li></Link>
                                <Link href='/https://www.hackers.institute/' className='text-decoration-none'>   <li>Blog</li></Link>
                                <Link href='/services' className='text-decoration-none' onClick={topFunction}>   <li>Service</li></Link>
                                <Link href='/gallery' className='text-decoration-none' onClick={topFunction}>    <li>Gallery</li></Link>
                                <Link href='/privacyPolicy' className='text-decoration-none' onClick={topFunction}>   <li>Privacy Policy</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h5>Courses</h5>
                            <ul className={style.list_wrapper}>
                            <Link href='/cyberSecurity' className='text-decoration-none' onClick={topFunction}>   <li>Cyber Security & Ethical Hacking</li></Link>
                            <Link href='/advancePhaython' className='text-decoration-none' onClick={topFunction}> <li>Advanced Python & Freelancing</li></Link>
                            <Link href='/cyberSecurityAndAdvancePhyton' className='text-decoration-none' onClick={topFunction}> <li>Cyber Security & Python (DUO)</li></Link>
                            <Link href='/cosint' className='text-decoration-none' onClick={topFunction}>  <li>C|OSINT</li></Link>
                            <Link href='/linux' className='text-decoration-none' onClick={topFunction}>  <li>Linux</li></Link>
                            <Link href='/networking' className='text-decoration-none' onClick={topFunction}>     <li>Networking Security</li></Link>
                            <Link href='/cehfMasterClass' className='text-decoration-none' onClick={topFunction}>  <li>CEHF Masterclass</li></Link>  
                            </ul>
                        </div>
                        <div>
                            <h5>Technologies</h5>
                            <ul className={style.list_wrapper}>
                                <li>React, Vue Js, jQuery</li>
                                <li>Python, Node.js, Php</li>
                                <li>SQL, MySQL, FireBase, SQLite</li>
                                <li>Java, Dart, Flutter</li>
                                <li>UI/UX</li>
                            </ul>
                        </div>
                    </div>
                  
                    <div className={` container ${style.social}`}>
                        <div className={style.socialContainer}>   
                        <Link href='https://www.facebook.com/ArenaBangladesh/' className='text-decoration-none'>
                        <div className={style.socialWrapper}>
                                <img src={social1} alt="facebook icon" />
                                <span>Facebook</span>
                            </div>
                            
                            </Link>                            
                            <Link href='https://www.youtube.com/channel/UCABV9wzGHQcgyIMP-Vr57tw'className='text-decoration-none'>
                            <div className={style.socialWrapper}>
                                        <img src={social2} alt="youtube icon" />
                                <span>Youtube</span>
                            </div>
                            </Link>
                           <Link href='https://www.linkedin.com/company/arena-web-security' className='text-decoration-none'>
                                <div className={style.socialWrapper}>
                                        <img src={social3} alt="linkedin icon" />
                                        <span >Linkedin</span>
                                </div>
                            </Link> 
                           
                        </div>
                    </div>
                    <p className='text-center text-white position-relative m-0 py-5'>Copyright © 2023 All Rights Reserved by Arena Web Security.</p>
                </div>
              
            </footer>
        </section>
    );
};

export default Footer;