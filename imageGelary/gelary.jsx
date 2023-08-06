"use Client"


import RootLayout from '@/components/Layout'
import React, { useState } from 'react';
// const style = '/css/updated/Aboutpage.module.css'
import  style from '../pages/about/Aboutpage.module.css'
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
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { Col, Row } from 'react-bootstrap';


const VewGelary = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen);
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
        about1,about2,
    ];
   
    return (
        <div className={`container  ${style.aboutContainer}`}>
      
            <SlideshowLightbox className={`${style.aboutImg}`}>
    <img className="" src={about1} />
    <img className="" src={about2} />
    <img className="" src={about3} />
    <img className="" src={about4} />
    <img className="" src={about5} />
    <img className="" src={about6} />
    <img className="" src={about7} />
    <img className="" src={about8} />
    <img className="" src={about9} />
    <img className="" src={about10} />
    <img className="" src={about11} />
    <img className="" src={about12} />
    <img className="" src={about3} />
 
</SlideshowLightbox> 
        </div>
    );
};




export default VewGelary;
