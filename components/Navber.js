




import React, { useEffect, useState } from 'react';
const logo = '/image/AWSLogo.png';
const logo2 = '/image/mainLogo.png';
import style from './navber.module.css'
// import { FaAngleRight,FaAngleDown } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';





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

  const [showNav,setShowNav]=useState(false);
  const Nav=()=>{
    setShowNav(prev=>!prev)
  }

  console.log(showNav);
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
    <section className={style.navbar_container}>
      <nav className={`${style.navbar} container-fluid position-sticky`}>
        <Link href="/"><img src={colorChange ? logo2 : logo} alt="" /></Link>
        <ul className={`${showNav?style.link_wrapper:style.link_wrapper2}`}>
        <div className={style.close} ><AiOutlineClose onClick={Nav}></AiOutlineClose></div>
          <Link href="/" onClick={Nav}><li>HOME</li></Link>
          <Link href="/about" onClick={Nav}><li>ABOUT</li></Link>
          <Link href="/services" onClick={Nav}><li>SERVICES</li></Link>
          <li id={style.courses}>
            <div className='flex'>
            <span>COURSES</span>
            <span className={style.dropdown}><IoIosArrowDropdown /></span>
            
            {/* <span><FaAngleDown/></span> */}
            </div>
            <ul id={style.courses_menu}>
          
              <Link href="/cyberSecurity" onClick={Nav}><li><span>Cyber Security & Ethical Hacking</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/advancePhaython" onClick={Nav}><li><span>Advanced Python With Freelancing</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cyberSecurityAndAdvancePhyton" onClick={Nav}><li><span>Cyber Security and Advance Python (Duo)</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cehfMasterClass" onClick={Nav}><li><span>CEHF Masterclass</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/cosint" onClick={Nav}><li><span>C|OSINT (Certified Open Source Intelligence)</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/linux" onClick={Nav}><li><span>Linux</span>{/* <span><FaAngleRight /></span> */}</li></Link>
              <Link href="/networking" onClick={Nav}><li><span>Networking Security</span>{/* <span><FaAngleRight /></span> */}</li></Link>              
            </ul>
            </li>
          <a href="https://www.hackers.institute/" target='_blank' rel="noreferrer"><li>BLOGS</li></a>
          <Link href="/gallery" onClick={Nav}><li>GALLERY</li></Link>
          <Link href="/contact"  onClick={Nav}><li>CONTACT</li></Link>
          <Link href="/admission"  onClick={Nav} className={`${style.apply_btn}`}><li className={style.apply_button}>APPLY NOW</li></Link>
        </ul>
        <div className={style.menuIcon} onClick={Nav}><AiOutlineMenu/></div>
      </nav>
    </section>
  );
};

export default Navbar;