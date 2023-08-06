import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './MentorSlides.module.css'
const image ='/image/Fahim.svg'
const image2 ='/image/TicketAssets/Team/SA_MUBIN.jpg'
const image3 ='/image/jewele.svg'
const image4 ='/image/ashif.jpeg'
const image5 ='/image/TicketAssets/Team/bijoy.jpeg'
const image6 ='/image/zawad.png'
const star ='/image/New_Assets/stars.png'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
const MentorSlides = () => {
    return (
        <div className={`${style.custom_slider_container} container py-5 px-0 mx-auto`}>
            <Swiper
               
               modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
               spaceBetween={50}
               slidesPerView={3}
            //    navigation
               autoplay={true}
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
                className={`${style.slider_container} mySwipe py-5 mb-5`}
            >
                <SwiperSlide>
                    <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Tanjim Al Fahim</h2>
                            <h6>CEO of Arena Web Security</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p> Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image5} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Bijoy Mondal</h2>
                            <h6>Admin Support</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security, Freelancing, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image3} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Md Jewele Islam</h2>
                            <h6>Software Engineer & Senior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Ethical Hacking, Freelancing, Python, PHP.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image4} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Md Ashif Islam</h2>
                            <h6>Junior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image2} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Syed Sakib Alam Mubin</h2>
                            <h6>Junior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security, Ethical Hacking, Linux RedHat</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper}`}>
                        <div className={`${style.slider_avatar}`}>
                        <img src={image6} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Zawad Bin Hafiz</h2>
                            <h6>Senior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <img src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Python, Django, Cyber Security</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MentorSlides;