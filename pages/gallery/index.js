
import RootLayout from '@/components/Layout';

import style from './Gallery.module.css'
const test1 = '/image/aws1.webp'
const test2 = '/image/aws2.webp'
const test3 = '/image/aws3.webp'
const test4 ='/image/aws4.webp'
const test5 ='/image/aws5.webp'
const test6 = '/image/aws6.webp'
const test7 ='/asset/image/aws7.webp'
const test8 ='/asset/image/aws8.webp'

const Gallery = () => {
    return (
        <div className={`container mx-auto ${style.gallery_container}`}>
            <div className={`${style.gallery_content}`}>
                <h3>Some of our memorable events <br/> that we always cherish in our heart!</h3>
                <p>Layout.js is not necessary, but allows you to render components across every route. It’s very helpful when adding global elements such as navigation .</p>
            </div>
            <div></div>
            <img src={test1} alt=""/>
            <div></div>
            <div></div>
            {/* <div></div> */}
            <div className={style.second_image}>
            {/* <img src={test2} alt=""/> */}
            </div>
            <img src={test3} alt=""/>
            <div></div>
            <img src={test4} alt=""/>
            <img src={test5} alt=""/>
            <img src={test6} alt=""/>
            <img src={test7} alt=""/>
            <div className={style.last_image}>
            {/* <img src={test8} alt=""/> */}
            </div>
        </div>
    );
};

export default Gallery;


Gallery .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}
