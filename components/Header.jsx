// import Navbar from './Navbar';
// import Navbar from '../Common/Navbar'
import { Icon } from '@iconify/react';
import style from './hedar.module.css'

const Header = () => {
    return (
        <section>
      
            <div className={`${style.header_container}`}>
                {/* <h1 className={style.header_title}>Some text here</h1>
            <svg width="130%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#56b5e3"></stop><stop offset="95%" stop-color="#7d58a5"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 136.8,427.20000000000005 273.6,504.40000000000003 456,480 C 638.4,455.59999999999997 866.4000000000001,329.6 1038,291 C 1209.6,252.4 1324.8,301.2 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity=".9" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg> */}
                <div className={style.wave}>
                    {/* <Navbar /> */}
                    
                    <div  className={`container ${style.details}`}>
                        <h1 className={style.header_title}>Arena Web Security</h1>
                        <p className={style.header_slogan}>New window of world wide web</p>
                        <p className={style.aboutTxt}>Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.</p>
                        <button className={style.btn}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={`${style.badge_container} container`}>
                <div className={style.badge}>
                    <span className={style.icon_wrapper}><Icon icon="mdi:tick-circle" className={style.icon} /></span>
                    <p>Security</p>
                </div>
                <div className={style.badge}>
                    <span className={style.icon_wrapper}><Icon icon="mdi:tick-circle" className={style.icon} /></span>
                    <p>Service</p>
                </div>
                <div className={style.badge}>
                    <span className={style.icon_wrapper}><Icon icon="mdi:tick-circle" className={style.icon} /></span>
                    <p>Quality</p>
                </div>
            </div>
        </section>
    );
};

export default Header;