'use client';
import Link from 'next/link';
import style from './Login.module.css'
const bgImage = '/image/New_Assets/login.png'
import {AiFillEye ,AiFillEyeInvisible} from "react-icons/ai";
import RootLayout from '@/components/Layout';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify'


const Login= () => {
    const [show,setShow] = useState(true)
    const handleSubmit =(e)=>{
           e.preventDefault();
           const data = new FormData(e.target);
           axios.post("http://192.168.0.119:8000/v1/login/",data)
           .then(function (response) {
             console.log(response);
             if(response.status === 200 && response.data.login === 1){
                sessionStorage.setItem('u_id',response.data.u_id)
                sessionStorage.setItem("create_at", response.data.create_at);
                sessionStorage.setItem("day_active",response.data.day_active);
                sessionStorage.setItem("time",response.data.time);
                sessionStorage.setItem("admission", response.data.admission);
                sessionStorage.setItem("reg_uuid", response.data.reg_uuid);
                // localStorage.setItem("Type",response.data.admission);
                localStorage.setItem("Type", 1);
                localStorage.setItem("Course_title",response.data.title
                );
                toast.success('successfully login', {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                //    window.location = "/profile";
             }
             else if (response.status === 200 && response.data.login === 2) {
                toast.error(response.data.msg, {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
            } else {
                toast.error('Username or password wrong!', {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
            }
           })
           .catch(function (error) {
             console.log(error);
           });
           localStorage.setItem('UserEmail',data.get("email"))
   
       
     
     
        
    }
    return (
        <div className={`${style.mainlogin} container`}>
             <ToastContainer className="toastMargin justify-content-center"/>
        <div className={`${style.login_box} d-lg-flex justify-content-center align-items-center`}>
        <div className={`${style.aside_left} lg-w-50 h-100 d-flex justify-content-center align-items-center`}>
            <img src={bgImage} alt="" className='w-75' />
        </div>
        <div className='lg-w-50 py-5 ps-5'>
            <h4 className={`${style.titel} text-center`}>Login with email & password</h4>
              <form className='w-75 mx-auto mt-5' onSubmit={(e)=>handleSubmit(e)}>
                <div className='d-flex flex-column'>
                <label>Email</label>
                    <input type="email" name="email" className={style.input} />
                </div>
                <div className='d-flex flex-column mt-5 position-relative'>
                    <label>Password</label>
                    {
                        show? <input name="password" type="password"   py-2 className={`${style.input} bg-danger}`}/>:
                        <input name="password" type="tax"  py-2 className={`${style.input} bg-danger}`}/>
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