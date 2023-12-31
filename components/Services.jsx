


const testImage = '/image/New_Assets/1.jpg'
const testImage2 = '/image/New_Assets/2.jpg'
const logo = '/image/AWSLogo.png';
import style from './service.module.css'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import Slide from 'react-reveal/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';
import Fade from 'react-reveal';


const Services = () => {
    return (   
      <section className={style.service_container}> 
      <div className='container'>  
      <span className={style.services_txt}>Services</span>
        <div className={style.line}></div>
        <Fade left duration={2000}><h2  className={style.service_para}>We provide something that is <br/> very exceptional & good.</h2></Fade>

     <div className='container '>
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
    //   slidesPerView={3}
      Pagination={true}
      autoplay={true}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
   
        
        breakpoints={{
            // when window width is >= 640px
            0: {
            //   width: 300,
              slidesPerView: 1,
            },
            520: {
            //   width: 300,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            950: {
            //   width: 768,
              slidesPerView: 3,
            },
       
          }}
     
           
  
    >
       <SwiperSlide>
        <div>
             <h6 className={style.serv_num}>01.</h6>
           <div className={style.line2}></div>
            <h4 className={style.serv_title}>Cyber Security Course</h4>
            <p>Some random short paragraphgh here. Some random short .</p>    
                   <div className={style.img_container}>      
                      <img src={testImage} alt=""/>
                  </div>
      </div>
         </SwiperSlide>
         <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>01.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Cyber Security Course</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>02.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Software Development</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>03.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Mobile App Development</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>04.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Advanced Python Training</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>05.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Network Security Service</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>06.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Software Testing</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>07.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Cyber Security Consultancy</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>08.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Software Maintenance</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>09.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>SEO</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>10.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>E-commerce Solution</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>11.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>Digital Marketing</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h6 className={style.serv_num}>12.</h6>
            <div className={style.line2}></div>
            <h4 className={style.serv_title}>UI/UX & Graphics Design</h4>
            <p>Some random short paragraphgh here. Some random short .</p>
            <div className={style.img_container}>
                <img src={testImage2} alt=""/>
            </div>
        </div>
        </SwiperSlide>
     
    </Swiper>
    </div>
    </div>
    </section> 
  );
};
     
    

export default Services;