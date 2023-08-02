


const testImage = '/asset/image/New_Assets/1.jpg'
const testImage2 = '/asset/image/New_Assets/2.jpg'
import style from './service.module.css'
import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Services = () => {
    return (
        <section className='service_container'>
        <div className='container'>
        <span className='services_txt'>Services</span>
        <div className='line'></div>
        <h2 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='service_para'>We provide something that is <br/> very exceptional & good.</h2>
            {/* Slider */}
            <Swiper
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>01.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Cyber Security Course</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>02.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Software Development</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>03.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Mobile App Development</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>04.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Advanced Python Training</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>05.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Network Security Service</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>06.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Software Testing</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>07.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Cyber Security Consultancy</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>08.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Software Maintenance</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>09.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>SEO</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>10.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>E-commerce Solution</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>11.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>Digital Marketing</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className='serv_num'>12.</h6>
            <div className='line2'></div>
            <h4 className='serv_title'>UI/UX & Graphics Design</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className='img_container'>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </section>
    );
};

export default Services;