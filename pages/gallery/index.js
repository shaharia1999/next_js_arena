
import RootLayout from '@/components/Layout';

import style from './Gallery.module.css'
import { SlideshowLightbox } from 'lightbox.js-react';
const test1 = '/image/aws1.webp'
const test2 = '/image/aws2.webp'
const test3 = '/image/aws3.webp'
const test4 ='/image/aws4.webp'
const test5 ='/image/aws5.webp'
const test6 = '/image/aws6.webp'
const test7 ='/asset/image/aws7.webp'
const test8 ='/asset/image/aws8.webp'
import 'lightbox.js-react/dist/index.css'
import { useEffect } from 'react';

const Gallery = () => {
    // useEffect(()=>{
    //     const element=    document.getElementById('main');
    //     element.scrollIntoView();
      
    
    //     })
    return (
        <div id='main'>
        <div className={`container mx-auto ${style.gallery_container}`} >
            <div className={`${style.gallery_content}`} >
                <h3>Some of our memorable events <br/> that we always cherish in our heart!</h3>
                <p>Layout.js is not necessary, but allows you to render components across every route. It’s very helpful when adding global elements such as navigation .</p>
            </div>
           
            <div className={`container  ${style.aboutContainer}`}>
      
            <SlideshowLightbox className={`${style.aboutImg}`}>
                <img className="" src={test1} />
                <img className="" src={test2} />
                <img className="" src={test3} />
                <img className="" src={test4} />
                <img className="" src={test5} />
            </SlideshowLightbox> 
        </div>
        </div>
        </div>
    );
};

export default Gallery;


Gallery .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}
