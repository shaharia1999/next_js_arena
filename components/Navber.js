




import React, { useEffect, useState } from 'react';
const logo = '/image/AWSLogo.png';
const logo2 = '/image/mainLogo.png';
import style from './navber.module.css'
// import { FaAngleRight,FaAngleDown } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Fragment } from 'react';
import axios from 'axios';
import ApiUrl from '@/pages/api/api';
import Marquee from 'react-fast-marquee';





const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const [email,setEmail]=useState(false);
  const [noticifation,setnoticifation]=useState([]);


  

  useEffect(()=>{
    const mail=(localStorage.getItem("UserEmail"))
    if(mail){
      setEmail(true)
    }
    if(location.pathname !== '/new'){
      setColorchange(true)
    }
    if(location.pathname == '/new' && window.scrollY>1){
      setColorchange(true)
    }
    axios.get(ApiUrl.BaseUrl +'api/time-date/').then((response) => {
      setnoticifation(response.data.data);
      console.log(response.data.data)
  }).catch(() => {

  })
  
  },[]);

  const [showNav,setShowNav]=useState(false);
  const Nav=()=>{
    setShowNav(prev=>!prev)
  }
  const Nav2=()=>{
    setShowNav(prev=>!prev)
    
    sessionStorage.removeItem("create_at");
    sessionStorage.removeItem('day_active');
    sessionStorage.removeItem('admission');
   localStorage.removeItem('UserEmail');
    localStorage.removeItem('Fullname');
    localStorage.removeItem('u_id');
    localStorage.removeItem('phn');
    localStorage.removeItem('dob');
    localStorage.removeItem('create_at');
    localStorage.removeItem('gender');
    localStorage.removeItem('nid');
    localStorage.removeItem('p_address');
    localStorage.removeItem('img');
    localStorage.removeItem('hobby');
    localStorage.removeItem('city');
    localStorage.removeItem('institute');
    localStorage.removeItem('admission');
    localStorage.removeItem('day_active');
    localStorage.removeItem('reg_uuid');
    localStorage.removeItem('Type');
    sessionStorage.removeItem("create_at");
    sessionStorage.removeItem('day_active');
    sessionStorage.removeItem('admission');
    sessionStorage.removeItem("time");
    window.location='/'
    
  }


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
  return (<Fragment>
                        <div className={`${style.notifications}  py-0.5`}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 marquee-div">
                                <Marquee pauseOnHover={true} speed={80} gradientWidth={0} className="marquee-text">

                                   
                                     Admission going on for &nbsp;<span style={{color:'#5AADDD',fontWeight:'600'}}>{noticifation[0]?.batch_schedule_name}</span>&nbsp; course by Arena Web Academy. The class will
                                    start
                                    on {/* 15th January 2023 */} {noticifation[0]?.deadline_date_s.split('-')[2]+'-'+noticifation[0]?.deadline_date_s.split('-')[1]+'-'+noticifation[0]?.deadline_date_s.split('-')[0]}. For admission: 01310333444 *** &nbsp; &nbsp; &nbsp; Admission going on for &nbsp;<span style={{color:'#7D5AA6',fontWeight:'600'}}>{noticifation[1]?.batch_schedule_name}</span>&nbsp; course by Arena Web Academy. The class will
                                    start
                                    on {noticifation[1]?.deadline_date_s.split('-')[2]+'-'+noticifation[1]?.deadline_date_s.split('-')[1]+'-'+noticifation[1]?.deadline_date_s.split('-')[0]}. For admission: 01310333444 *** &nbsp; &nbsp; &nbsp;
                                </Marquee>
                            </div>
                        </div>
                    </div>
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
        {
          email === false && <Link href="/admission"  onClick={Nav} className={`${style.appdddly_btn}`}><li className={style.apply_button}>APPLY NOW</li></Link>
        }
        {
          email === true && <li className={style.apply_button}  onClick={Nav2}>LogOut</li>
        }
       
      </ul>
      <div className={style.menuIcon} onClick={Nav}><AiOutlineMenu/></div>
    </nav>
  </section>
  </Fragment>

 
  );
};

export default Navbar;