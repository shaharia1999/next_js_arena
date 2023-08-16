import React from 'react';
// import MentorSlides from '../CyberSecurity/MentorSlides';
import style from '../advancePhaython/cyberSecurityCourseLandingPage.module.css'
import MentorSlides from '@/slider/slider';
import VewGelary from '@/imageGelary/gelary';
import { Button, Col, Collapse, Row } from 'react-bootstrap';
const promoBanner = '/image/course.png'
const circle2 = '/image/New_Assets/button.png'
const star ='/image/New_Assets/review.png'
const coder ='/image/New_Assets/Programmer.png'
const arrow = '/image/New_Assets/circle.png'
const shield ='/image/New_Assets/shield2.png'
import { Animated } from 'react-animated-css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import RootLayout from '@/components/Layout';


const Networking = () => {
    const [bkashOpen, setBkashOpen] = useState(false)
    const [nagadOpen, setnagadOpen] = useState(false)
    const [dbblOpen, setdbblOpen] = useState(false)
    const [westernOpen, setwesternOpen] = useState(false)
    const [eblOpen, seteblOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [open, setOpen] = useState(true)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [banner, setBanner] = useState('')
    const images = [
        'https://arenawebsecurity.net/static/media/cyber-security1.svg',
        'https://arenawebsecurity.net/static/media/cyber-security2.svg',
        'https://arenawebsecurity.net/static/media/cyber-security3.svg',
        'https://arenawebsecurity.net/static/media/cyber-security4.svg',
        'https://arenawebsecurity.net/static/media/cyber-security5.svg',
        'https://arenawebsecurity.net/static/media/cyber-security6.svg',
        'https://arenawebsecurity.net/static/media/cyber-security7.svg',
    ];
    // useEffect(() => {
    //     axios.get(ApiUrl.BannerApi).then((response) => {
    //         if (response.status === 200) {
    //             setBanner(response?.data?.data[0]?.image_link);
    //         }
    //     }).catch(() => {

    //     })
    // }, [])
    return (
        <div>
            <div className={`${style.page_top}  `}>
                <img src={promoBanner} alt="" className={style.page_top_img} />
                <div className='container mx-3'>
                    <div className={`${style.overview}`}>
                        <h5 className="mb-0">Overview</h5>
                        <div className={`${style.line}`}></div>
                        <p>Cybersecurity needs a programming language and today Python is very popular because of its flexibility and lightweight features. This course can help to build skills across the cyberattack world for both cyber attackers and defenders. Near future Python is and will be the most demanding programming and scripting language for cybersecurity. So, by completing this course you can land your first IT job or you can start your career in freelancing. This course could open the door become a complete web expert. Arena Web Security offers approachable, hands-on ethical hacking and python programming courses to help you keep your networks safe from cyber criminals & make your career at the professional marketplace in the field of both ethical hacking and python programming.</p>
                    </div>
                    <div>
                    <h5 className='mb-0'>Key Features</h5>
                    <div className={`${style.line}`}></div>
                    <div className={`${style.badge_container} container`}>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span> {/* <Icon className={style.icon} icon="map:sheild" /> */}
                            <p>Cyber Security</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Linux</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Digital Forensic</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Open Source Intelligence</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Core Python</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Django and REST Framework</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Web Scraping</p>
                        </div>
                        <div className={style.badge}>
                            <span className={style.icon_wrapper}>{/* <Icon icon="mdi:tick-circle" className={style.icon} /> */}<img src={shield} alt="" /></span>
                            <p>Freelancing</p>
                        </div>
                    </div>
                </div>
                    {/* Module section */}
                    <div>
                    <h5 >Module</h5>
                    <div className={`${style.line} `}></div>
                    <div className=''>
                    <h5 className={style.dev_titles}>Cyber Security & Ethical Hacking:</h5>
                   
                    <ul className={`${style.module_list}`}>
                        <li><img src={arrow} alt="" /><span>Introduction</span></li>
                        <li><img src={arrow} alt="" /><span>Configure and architect a small network for maximum physical and wireless security.</span></li>
                        <li><img src={arrow} alt="" /><span>Understand how we are tracked online by corporations, nation-states your ISP and others.</span></li>
                        <li><img src={arrow} alt="" /><span>The very latest up-to-date information and methods.</span></li>
                        <li><img src={arrow} alt="" /><span>Able to configure firewalls on all platforms including Windows, MacOS, and Linux for all types of attack scenarios.</span></li>
                        <li><img src={arrow} alt="" /><span>Perform network monitoring to discover and identify potential hackers and malware using tools like Wireshark, Tcpdump, and Syslog.</span></li>
                        <li><img src={arrow} alt="" /><span>Will look at search engine privacy - understand how to mitigate the tracking and privacy issues of search engines and their associated services.</span></li>
                        <li><img src={arrow} alt="" /><span>What are the best password managers to use and why. How passwords are cracked, and how to mitigate the password attacks.</span></li>
                    </ul>
                    <h5 className={style.dev_titles}>Advance Python with Django and Scrapping:</h5>
                    <ul className={`${style.module_list}`}>
                        <li><img src={arrow} alt="" /><span>Introduction</span></li>
                        <li><img src={arrow} alt="" /><span>Configure and architect a small network for maximum physical and wireless security.</span></li>
                        <li><img src={arrow} alt="" /><span>Understand how we are tracked online by corporations, nation-states your ISP and others.</span></li>
                        <li><img src={arrow} alt="" /><span>The very latest up-to-date information and methods.</span></li>
                        <li><img src={arrow} alt="" /><span>Able to configure firewalls on all platforms including Windows, MacOS, and Linux for all types of attack scenarios.</span></li>
                        <li><img src={arrow} alt="" /><span>Perform network monitoring to discover and identify potential hackers and malware using tools like Wireshark, Tcpdump, and Syslog.</span></li>
                        <li><img src={arrow} alt="" /><span>Will look at search engine privacy - understand how to mitigate the tracking and privacy issues of search engines and their associated services.</span></li>
                        <li><img src={arrow} alt="" /><span>What are the best password managers to use and why. How passwords are cracked, and how to mitigate the password attacks.</span></li>
                    </ul>
                    </div>
                </div>
                </div>
                <img src={promoBanner} alt="" className={style.page_top_img2}  />
            </div>
            {/* <div><VewGelary></VewGelary></div> */}
            <div className=''>
                <div className={`${style.mentors_slides}`}>
                    <div className='container '>
                        <div className='d-flex justify-content-center position-relative'>
                            <img src={star} alt="" className={`${style.starImage}`} />
                            <div className={`${style.team_text}`}>
                                <h5 className='mb-0 text-center'>TEAM</h5>
                                <p className={`${style.team_slogan}`}>Learn from the best techers</p>
                                <div className={`${style.sliderline}`}></div>
                            </div>
                        </div>
                    </div>
                    
                    <MentorSlides /> 
                </div>
                {/* <Row className="container mx-auto mt-5">
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={2000}
                            isVisible={true}>
                            <div className="CyberSecurityLandingCard mt-1" style={{ width: 'auto' }}>
                                <Button
                                    className={`btn-block CyberSecurityLandingMainTitle ${style.collapse_btn}`}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example0"
                                    aria-expanded={open}>
                                    <h6 className="float-left">
                                        সাইবার সিকিউরিটি (Cyber Security) পরিচিতি
                                    </h6>

                                    {(() => {
                                        if (open) {
                                            return (
                                                <h6 className="float-right">-</h6>
                                            )
                                        } else if (!open) {
                                            return (
                                                <h6 className="float-right">+</h6>
                                            )
                                        }
                                    })()}

                                </Button>
                                <Collapse className="p-2" in={open}>
                                    <div id={`${style.example0}`}>
                                        <h1 className="CyberSecurityLandingBodyTitle">সাইবার সিকিউরিটি কি ? </h1>
                                        <h6 className="CyberSecurityLandingBodySubTitle text-justify">ইন্টারনেটে
                                            হ্যাকিং বা
                                            ম্যালওয়ার অ্যাটাক থেকে নিজে কিংবা নিজের সিস্টেম বাচতে যেসব ব্যাবস্থা
                                            গ্রহণ করা হয় এবং ওয়েবসাইট, নেটওয়ার্ক, এপ্লিকেশন ছাড়াও নিজেদের ব্যাবহৃত
                                            ইলেক্ট্রিক ডিভাইস গুলোতে সাইবার আক্রমন প্রতিহত করার পদ্ধতি সবই সাইবার
                                            সিকিউরিটির অন্তর্ভুক্ত। হ্যাকিং শব্দটি যেহেতু এসেই পড়লো এ নিয়ে কিছু কথা
                                            হয়ে যাক , যারা হ্যাকিং
                                            করে তাদের বলা হয় হ্যাকার । <br /> <br /> অনেকেরই ধারনা হ্যাকাররা মেধাবী বা
                                            কম্পিউটার
                                            পরিচালনায় দক্ষ কিন্তু তারা অসৎ। কিন্তু আমাদের সচরাচর এই ধারণাটা সম্পূর্ণ
                                            ভূল। কারণ সাইবার সিকিউরিটি নিয়ে যারা কাজ করে তারাও কিন্তু হ্যাকার,
                                            অন্যান্য হ্যাকার থেকে তাদের প্রধান পার্থক্যই হচ্ছে সাইবার সিকিউরিটি
                                            বিশেষজ্ঞরা তাদের মেধা ও কম্পিউটার পরিচালনার দক্ষতা ভাল এবং প্রফেশনাল
                                            কাজে ব্যয় করে। যার ফলে স্বপ্নীল এই হ্যাকিং জগতে তারা ক্যারিয়ার গঠনের
                                            পাশাপাশি তাদের জ্ঞানকে সকলের উপকারে ব্যাবহার করতে পারে। </h6>
                                    </div>
                                </Collapse>
                            </div>
                        </Animated>
                        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={2000}
                            isVisible={true}>
                            <div className="CyberSecurityLandingCard mt-1" style={{ width: 'auto' }}>
                                <Button
                                    className={`btn-block CyberSecurityLandingMainTitle ${style.collapse_btn}`}
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example0"
                                    aria-expanded={open1}>
                                    <h6 className="float-left">সাইবার সিকিউরিটি জানা কেনো প্রয়োজন? </h6>

                                    {(() => {
                                        if (open1) {
                                            return (
                                                <h6 className="float-right">-</h6>
                                            )
                                        } else if (!open1) {
                                            return (
                                                <h6 className="float-right">+</h6>
                                            )
                                        }
                                    })()}

                                </Button>
                                <Collapse className="p-2" in={open1}>
                                    <div id={`${style.example0}`}>
                                        <h1 className="CyberSecurityLandingBodyTitle">সাইবার সিকিউরিটি জানা কেনো
                                            প্রয়োজন?</h1>
                                        <h6 className="CyberSecurityLandingBodySubTitle text-justify">বর্তমানের সব
                                            কিছুই প্রযুক্তি নির্ভর হয়ে পড়েছে। সে সাথে বিশ্বব্যাপী ছড়িয়ে যাওয়ার জন্য
                                            সেটি হয়ে গেছে ইন্টারনেট নির্ভরও। আমাদের ব্যাক্তিজীবন থেকে কর্মজীবন সবই
                                            এখন ইন্টারনেট দ্বারা নিয়ন্ত্রিত। এর জন্য সকলেরই সাইবার সিকিউরিটি
                                            সম্পর্কে জ্ঞান থাকা প্রয়োজন। বর্তমান বিশ্বের বড়ো সব প্রতারনা বা স্ক্যাম
                                            গুলোও হচ্ছে ইন্টারনেটের মাধ্যমে । সাইবার সিকিউরিটি সম্পর্কে কম জ্ঞানের
                                            কারনে মানুষ খুব সহজেই প্রতারনার শিকার হচ্ছে। সেগুলো থেকে নিজে এবং নিজের
                                            পরিবারকে সুরক্ষিত করার জন্যও আমাদের সকলের কম বেশি সাইবার সিকিউরিটি
                                            সম্পর্কে ধারনা থাকতে হবে। <br /> <br />
                                            এছাড়াও প্রাতিষ্ঠানিক ভাবে সাইবার সিকিউরিটি হতে পারে ক্যারিয়ার গঠনের বড়
                                            একটি সুযোগ। বর্তমানে বড় বড় সকল প্রতিষ্ঠানই অনলাইনে তাদের কার্যক্রম
                                            নিরাপদে রাখার জন্য সাইবার সিকিউরিটি বিশেষজ্ঞ নিয়োগ দিচ্ছে। শুধুই কি কোন
                                            প্রতিষ্ঠান? তা কিন্তু নয়। প্রায় সকল দেশ তাদের নিজস্ব নিরাপত্তায় সরকারী
                                            ভাবে সাইবার সিকিউরিটি এক্সপার্ট নিয়োগ দিচ্ছে। এমন কার্যক্রম আমাদের দেশেও
                                            হচ্ছে। ইথিক্যাল হ্যাকিং এখন ফ্রীল্যান্সিং এর একটি জনপ্রিয় বিষয়ও হয়ে
                                            উঠছে। সাইবার নিরাপত্তা একটি গুরুত্বপুর্ণ বিষয় হওয়ায় আইটির যে কোন
                                            চাকুরিতেই আপনার এই জ্ঞান থাকাটা বাধ্যতামূলক হয়ে গেছে। <br /> <br /> সাইবার
                                            সিকিউরিটি ,
                                            বিভিন্ন ওয়েবসাইট বা সিস্টেমের নিরাপত্তা দুর্বলতা নির্ণয় করে সাইবার
                                            সিকিউরিটি এক্সপার্টরা পাচ্ছেন বড় পুরুষ্কার । ক্যারিয়ার হিসেবে তাই সাইবার
                                            সিকিউরিটি হতে পারে আপনার মতো একজন আইটি প্রিয় মানুষের জন্য প্রথম পছন্দের
                                            বিষয়। </h6>
                                    </div>
                                </Collapse>
                            </div>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={2000}
                            isVisible={true}>
                            <div className="CyberSecurityLandingCard mt-1" style={{ width: 'auto' }}>
                                <Button
                                    className={`btn-block CyberSecurityLandingMainTitle ${style.collapse_btn}`}
                                    onClick={() => setOpen2(!open2)}
                                    aria-controls="example0"
                                    aria-expanded={open2}>
                                    <h6 className="float-left">
                                        কিভাবে শিখবেন সাইবার সিকিউরিটি (Cyber Security) ?
                                    </h6>

                                    {(() => {
                                        if (open2) {
                                            return (
                                                <h6 className="float-right">-</h6>
                                            )
                                        } else if (!open2) {
                                            return (
                                                <h6 className="float-right">+</h6>
                                            )
                                        }
                                    })()}

                                </Button>
                                <Collapse className="p-2" in={open2}>
                                    <div id={`${style.example0}`}>
                                        <h1 className="CyberSecurityLandingBodyTitle">কিভাবে শিখবেন সাইবার
                                            সিকিউরিটি?</h1>
                                        <h6 className="CyberSecurityLandingBodySubTitle text-justify">সরাসরি সাইবার
                                            সিকিউরিটি বিষয়টি আমাদের দেশের বিশ্ববিদ্যালয়ে না থাকায় ,আপনি বেসরকারী কোন
                                            প্রতিষ্ঠান থেকে সাইবার সিকিউরিটির কোর্স করতে পারেন। আন্তর্জাতিক
                                            সংবাদমাধ্যম ফোর্বসের একটি আর্টিকেলে ১৩টি উচ্চ বেতনের চাকরির কথা বলা
                                            হয়েছে, যেগুলোতে কোনো ধরনের ডিগ্রির প্রয়োজন নেই। এর মধ্যে সাইবার
                                            সিকিউরিটি অন্যতম। শুধুমাত্র দক্ষতা দিয়েই এই পথে ক্যারিয়ার গড়া সম্ভব।
                                            আপনি নিজেই এই সম্পর্কে ধারনা পেতে গুগল এবং ইউটিউবের সাহায্য নিতে
                                            পারেন,ইংরেজি সহ বিভিন্ন ভাষায় সেখানে অসংখ্য রিসোর্স পাওয়া যাবে। প্রয়োজন
                                            শুধু ধৈর্য্য ও অনুশীলন। <br /><br /> আপনি বাংলায় সাজানো রিসোর্স পেতে চাইলে
                                            সাইবার ৭১
                                            এর Learn with Cyber 71 ( লিঙ্কঃ
                                            <a target="_blank"
                                                href="https://www.youtube.com/c/LearnwithCyber71"> https://www.youtube.com/c/LearnwithCyber71</a> )
                                            এই ইউটিউব চ্যানেলটি
                                            সাবস্ক্রাইব করে রাখতে পারেন। বাংলাতে এখানে সাইবার সিকিউরিটি, ইথিক্যাল
                                            হ্যাকিং শীর্ষক কয়েকটি ডেমো ক্লাস রয়েছে। বিদেশি কিছু প্রতিষ্ঠান পরীক্ষার
                                            মাধ্যমে সাইবার সিকিউরিটি এক্সপার্ট হিসেবে সনদ প্রদান করে। আপনি CEH,
                                            CISM, CISSP, CISA সার্টিফিকেশন গুলোকে আপনার পছন্দের তালিকায় রাখতে পারেন।
                                            তবে এসব প্রতিষ্ঠানের পরীক্ষা দেয়ার আগে আপনাকে অবশ্যই প্রফেশনালই সাইবার
                                            সিকিউরিটি শিখতে হবে । <br /> <br /> দেশের প্রথম প্রাতিষ্ঠানিক সাইবার
                                            নিরাপত্তা
                                            প্রশিক্ষণ সেন্টার এরিনা ওয়েব সিকিউরিটি হতে পারে আপনার প্রধান পছন্দ।
                                            আন্তর্জাতিক মানদণ্ডের সাথে ফ্রিল্যান্সিং সেক্টর যোগ করে কোর্সটিকে সাজানো
                                            হয়েছে যার ফলে আপনি ইথিক্যাল হ্যাকিং এর উপর অনলাইন মার্কেটপ্লেস গুলোতে
                                            কাজ করে নিতে পারেন। ক্যারিয়ার ডেভেলপমেন্টের জন্য এরিনা ওয়েব সিকিউরিটির
                                            কোর্স করাটি হতে পারে আপনার জন্য একটি সুন্দর এবং সময়োপযোগী
                                            সিদ্ধান্ত। </h6>
                                    </div>
                                </Collapse>
                            </div>
                        </Animated>


                        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={2000}
                            isVisible={true}>
                            <div className="CyberSecurityLandingCard mt-1" style={{ width: 'auto' }}>
                                <Button
                                    className={`btn-block CyberSecurityLandingMainTitle ${style.collapse_btn}`}
                                    onClick={() => setOpen3(!open3)}
                                    aria-controls="example0"
                                    aria-expanded={open3}>
                                    <h6 className="float-left">কেন এরিনা ওয়েব সিকিউরিটির কোর্স করবেন?</h6>

                                    {(() => {
                                        if (open3) {
                                            return (
                                                <h6 className="float-right">-</h6>
                                            )
                                        } else if (!open3) {
                                            return (
                                                <h6 className="float-right">+</h6>
                                            )
                                        }
                                    })()}

                                </Button>
                                <Collapse className="p-2" in={open3}>
                                    <div id={`${style.example0}`}>
                                        <h1 className="CyberSecurityLandingBodyTitle">কেন এরিনা ওয়েব সিকিউরিটির
                                            কোর্স করবেন?</h1>
                                        <h6 className="CyberSecurityLandingBodySubTitle text-justify">তসম্পূর্ন
                                            অনলাইন ল্যাব
                                            ভিত্তিক কোর্স এবং মিড এক্সামের সুবিধা। তাই চাকুরীজীবী কিংবা ছাত্র, যেকোন
                                            পেশার মানুষই অনলাইন থেকে নিজস্ব সার্ভারের মাধ্যমে ক্লাসে যোগদান করতে
                                            পারবে। দেশসেরা কয়েকজন সাইবার সিকিউরিটি বিশেষজ্ঞদের দ্বারা প্রশিক্ষণ এবং
                                            তাদের
                                            তত্বাবধানে ইন্টার্ন হিসেবে মার্কেটপ্লেসে প্র্যাক্টিস এর সুযোগ। <br />
                                            <br /> একদম
                                            ব্যাসিক থেকে শুরু হওয়ায় কোর্স করার পূর্বে প্রোগ্রামিং সংক্রান্ত জ্ঞান না
                                            থাকলেও চিন্তা নেই। যেকোন বয়স বা যেকোন পেশার মানুষের উপযোগী করেই তৈরী করা
                                            হয়েছে কোর্স আউটলাইন। পরীক্ষা পরবর্তী অনলাইন ভেরিফাই প্রসেসের মাধ্যমে
                                            সার্টিফিকেশন প্রদান করা হয় যার ফলে সাইবার সিকিউরিটির সার্টিফিকেশন আপনি
                                            বিশ্বব্যাপি যে কোন প্রতিষ্ঠানেই ব্যাবহার করতে পারছেন। </h6>
                                    </div>
                                </Collapse>
                            </div>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={2000}
                            isVisible={true}>
                            <div className="CyberSecurityLandingCard mt-1" style={{ width: 'auto' }}>
                                <Button
                                    className={`btn-block CyberSecurityLandingMainTitle ${style.collapse_btn}`}
                                    onClick={() => setOpen4(!open4)}
                                    aria-controls="example0"
                                    aria-expanded={open4}>
                                    <h6 className="float-left">
                                        সাইবার সিকিউরিটি ক্যারিয়ার সেক্টর
                                    </h6>

                                    {(() => {
                                        if (open4) {
                                            return (
                                                <h6 className="float-right">-</h6>
                                            )
                                        } else if (!open4) {
                                            return (
                                                <h6 className="float-right">+</h6>
                                            )
                                        }
                                    })()}

                                </Button>
                                <Collapse className="p-2" in={open4}>
                                    <div id={`${style.example0}`}>
                                        <h1 className="careerBodyTitle">ক্যারিয়ার সেক্টর</h1>
                                        <h6 className="careerBodySubTitle">ক্যারিয়ার সেক্টরঃ আইটি এনালিস্ট, সাইবার
                                            সিকিউরিটি স্পেশালিস্ট, ইথিক্যাল হ্যাকার, আইটি ইঞ্জিনিয়ার, ডিজিটাল
                                            ফরেন্সিক
                                            স্পেশালিস্ট, ফ্রিল্যান্সার।</h6>

                                        <h1 className="careerBodyTitle">বৈশিষ্ট্যঃ</h1>
                                        <ul>
                                            <li className="careerBodySubTitle"> দেশসেরা সাইবার সিকিউরিটি বিশেষজ্ঞ
                                                টীম
                                                দ্বারা প্রশিক্ষণ।
                                            </li>
                                            <li className="careerBodySubTitle"> যারা প্রোগ্রামিং সম্পর্কে আগের থেকে
                                                ধারনা নেই তাদেরকে কোর্সের সাথে ফ্রি বেসিক ট্রেনিং প্রদান করা হয়।
                                            </li>
                                            <li className="careerBodySubTitle"> কোর্স শেষে এক মাসের ইন্টার্নি
                                                প্রজেক্ট
                                                আমাদের আমাদের টীমের সাথে বিভিন্ন মার্কেটপ্লেসের কাজ গুলো করার সুযোগ।
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </div>
                        </Animated>
                    </Col>

                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <img className="w-100 card MasterCourseBanner" src={banner} alt="" />
                    </Col>
                </Row> */}
                {/* Information Table */}
                <div className={`container  mx-auto ${style.info_table} ${style.network_info_table}`}>
                    <img src={coder} alt="" className={`${style.info_img}`} />
                    <div className={`${style.py_60}`}>
                        <h5>Basic Information</h5>
                        <ul>
                            <li><img src={circle2} alt="" /><span>Course duration 24 hours</span></li>
                            <li><img src={circle2} alt="" /><span>Course fees BDT 85,000/-</span></li>
                            <li><img src={circle2} alt="" /><span>Professional Corporate Certified Course. (Only for corporate deal)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Networking;

Networking .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}