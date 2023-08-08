'use client';
import Link from 'next/link';
import style from './Login.module.css'
const bgImage = '/image/New_Assets/login.png'
import {AiFillEye ,AiFillEyeInvisible} from "react-icons/ai";
import RootLayout from '@/components/Layout';
import { useState } from 'react';
import axios from 'axios';

const Login= () => {
    const [show,setShow] = useState(true)
    const handleSubmit =(e)=>{
           e.preventDefault();
           const data = new FormData(e.target);
           axios.post("http://192.168.0.116:8000/v1/login/",data)
           .then(function (response) {
             console.log(response);
           })
           .catch(function (error) {
             console.log(error);
           });
           console.log(data.get("email"))
     
     
        
    }
    return (
        <div className={`${style.mainlogin} container`}>
        <div className={`${style.login_box} d-flex justify-content-center align-items-center`}>
        <div className={`${style.aside_left} w-50 h-100 d-flex justify-content-center align-items-center`}>
            <img src={bgImage} alt="" className='w-75' />
        </div>
        <div className='w-50 py-5'>
            <h4 className={`${style.titel} text-center`}>Login with email & password</h4>
              <form className='w-75 mx-auto mt-5' onSubmit={(e)=>handleSubmit(e)}>
                <div className='d-flex flex-column'>
                <label>Email</label>
                    <input type="email" name="email" className={style.input} value={'your.email+fakedata82963@gmail.com'}/>
                </div>
                <div className='d-flex flex-column mt-5 position-relative'>
                    <label>Password</label>
                    {
                        show? <input name="password" type="password"  value={36206991} py-2 className={`${style.input} bg-danger}`}/>:
                        <input name="password" type="tax" value={36206991} py-2 className={`${style.input} bg-danger}`}/>
                    }
                   
                    {
                        show ? <AiFillEye className={style.eye} onClick={()=>setShow(prev => !prev)} ></AiFillEye> :
                        <AiFillEyeInvisible className={style.eye} onClick={()=>setShow(prev => !prev)}/>
                    }
                </div>
                <div className='d-flex flex-column align-items-center mt-5'>
                    <input type="submit" name="" value="Login" className={`${style.login_btn}`} />
                    <Link href="/new-admission" className='mt-4'><p className='d-inline-block border-bottom'>Apply for course</p></Link>
                </div>
            </form>
        </div>
    </div>
    </div>
    );
};

export default Login;

Login .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}