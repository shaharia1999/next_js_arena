"use Client"


import RootLayout from '@/components/Layout'
import React, { useState } from 'react';
// const style = '/css/updated/Aboutpage.module.css'
import  style from './Aboutpage.module.css'
import ReactModal from 'react-modal';
const banner = '/image/New_Assets/aboutbanner2.jpg'
const about1 = '/image/New_Assets/About/AWTBrochure-01.png'
const about2 = '/image/New_Assets/About/AWTBrochure-02.png'
const about3 = '/image/New_Assets/About/AWTBrochure-03.png'
const about4 = '/image/New_Assets/About/AWTBrochure-04.png'
const about5 = '/image/New_Assets/About/AWTBrochure-05.png'
const about6 = '/image/New_Assets/About/AWTBrochure-06.png'
const about7 = '/image/New_Assets/About/AWTBrochure-07.png'
const about8 = '/image/New_Assets/About/AWTBrochure-08.png'
const about9 = '/image/New_Assets/About/AWTBrochure-09.png'
const about10 = '/image/New_Assets/About/AWTBrochure-10.png'
const about11 = '/image/New_Assets/About/AWTBrochure-11.png'
const about12 = '/image/New_Assets/About/AWTBrochure-12.png'
const about13 = '/image/New_Assets/About/AWTBrochure-13.png'
const about14 = '/image/New_Assets/About/AWTBrochure-14.png'
import Modal from "react-modal";
import "react-image-lightbox/style.css";
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

const About = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen);
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
        about1,about2,
    ];
    const useS=()=>{
        setIsOpen(true)
    }
    return (
        <div className={`container  ${style.aboutContainer}`}>
            <div className={`${style.banner_container}`}>
                <img src={banner} alt="" width="100%" />
            </div>
            <article className={`${style.aboutContent}`}>
                
                <h5>About Us</h5>
                <div></div>
                <p>Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.

                   <br/> <br/> Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already <strong>45<sup>+</sup></strong> batches received this training and have started to earn through online and corporate job.</p>
            </article>
            <Row className="container mx-auto text-center justify-content-center">
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className="LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={useS}>
                                <img className="w-100 " src={about1} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                       
                                    }
                                    onMoveNextRequest={() =>
                                    
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>

                    {/* <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className="LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about2} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>

                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about3} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>


                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about4} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>


                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about5} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>


                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about6} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about7} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about8} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about9} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about10} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about11} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about12} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about13} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mt-3">
                        <div>
                            <button className=" LightImg-container card shadow-lg p-0 m-0" type="button"
                                onClick={() => setIsOpen(true)}>
                                <img className="w-100 LightImgPreview" src={about14} alt="" />
                                <div className="middle">
                                    <div className="textExpand"><i className="fa fa-expand expandIcon"></i>
                                        <br /> View Image
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </div>
                    </Col> */}
                </Row>
        </div>
    );
};




export default About;
About .getLayout=(page)=>{
    return  (<RootLayout>{page}</RootLayout>)
}