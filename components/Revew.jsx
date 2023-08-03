
import  style from './Revew.module.css'
// import Slider from '@material-ui/lab/Slider';
const testImage = '/image/New_Assets/circle.png'
const review1 = '/image/New_Assets/Review/d-1.jpg'
const review2 = '/image/New_Assets/Review/d-2.jpg'
const review3 = '/image/New_Assets/Review/d-2.jpg'
const review4 = '/image/New_Assets/Review/d-14.jpg'
const review5 = '/image/New_Assets/Review/d-4.jpg'
const review6 = '/image/New_Assets/Review/d-5.jpg'
const review7 = '/image/New_Assets/Review/d-6.jpg'
const review8 = '/image/New_Assets/Review/d-7.jpg'
const review9= '/image/New_Assets/Review/d-8.jpg'
const review11 = '/image/New_Assets/Review/d-9.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';


const Review = () => {
    return (
        <section>
            <div className={`${style.review_container} container`}>
                <div className={`${style.content_container}`}>
                    <div  className={style.content_wrapper}>
                        <h1>Review</h1>
                        <div className={`${style.line}`}></div>
                        <h2>Some smiling faces!</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <ul>
                            <li><img src={testImage} alt="" /> You get quality teaching with skilled instructors.</li>
                            <li><img src={testImage} alt="" /> 24 hours problem solving support from guids.</li>
                        </ul>
                    </div>
                    <div className={style.slider}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay= {1000}
                          
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review9} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review2} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review9} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review3} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review5} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review5} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review7} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review8} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                             <SwiperSlide>
                             <div>
                               <div className={style.img_container}>      
                                        <img src={review1} alt=""/>
                                </div>
                              </div>
                            </SwiperSlide>
                        
                            
                        </Swiper>
                        {/* <Slider /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;