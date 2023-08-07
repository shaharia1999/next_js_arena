




import React, { useEffect, useState } from 'react';
const logo = '/image/AWSLogo.png';
const logo2 = '/image/mainLogo.png';
import style from './navber.module.css'
// import { FaAngleRight,FaAngleDown } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Link from 'next/link';




const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  

  useEffect(()=>{
    if(location.pathname !== '/new'){
      setColorchange(true)
    }
    if(location.pathname == '/new' && window.scrollY>1){
      setColorchange(true)
    }
  },[])
  const changeNavbarColor = () => {
    if (location.pathname === '/new') {
      if (window.scrollY >= 10) {
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    }
  };
//   window.addEventListener('scroll', changeNavbarColor);
  return (
    <section className={`${colorChange ? style.navbar_container : style.navbar_container2}`}>
      <nav className={`${style.navbar} container-fluid`}>
        <Link href="/"><img src={colorChange ? logo2 : logo} alt="" /></Link>
        <ul className={`${style.link_wrapper}`}>
          <Link href="/"><li>HOME</li></Link>
          <Link href="/about"><li>ABOUT</li></Link>
          <Link href="/services"><li>SERVICES</li></Link>
          <li id={style.courses}>
            <div>
            <span>COURSES</span>
            {/* <span><FaAngleDown/></span> */}
            </div>
            <ul id={style.courses_menu}>
              <Link href="/cyberSecurity"><li><span>Cyber Security & Ethical Hacking</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/advancePhaython"><li><span>Advanced Python With Freelancing</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cyberSecurityAndAdvancePhyton"><li><span>Cyber Security and Advance Python (Duo)</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cehfMasterClass"><li><span>CEHF Masterclass</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cosint"><li><span>C|OSINT (Certified Open Source Intelligence)</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/linux"><li><span>Linux</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/networking"><li><span>Networking Security</span>{/* <span><FaAngleRight /></span> */}</li></Link>              
            </ul>
            </li>
          <a href="https://www.hackers.institute/" target='_blank' rel="noreferrer"><li>BLOGS</li></a>
          <Link href="/gallery"><li>GALLERY</li></Link>
          <Link href="/contact"><li>CONTACT</li></Link>
          <Link href="/admission" className={`${style.apply_btn}`}><li>APPLY NOW</li></Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;