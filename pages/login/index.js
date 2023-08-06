'use client';
import Link from 'next/link';
import style from './Login.module.css'
const bgImage = '/image/New_Assets/login.png'
import {AiFillEye ,AiFillEyeInvisible} from "react-icons/ai";
import RootLayout from '@/components/Layout';
import { useState } from 'react';
// import { useState } from 'react';
// const cross = '/image/New_Assets/cancel.png'
// const { Link, Redirect } = 'react-router-dom';
// import Tooltip from'react-bootstrap/Tooltip';
// import Button from'react-bootstrap/Button';
// import OverlayTrigger from'react-bootstrap/OverlayTrigger'
// import { useState } from 'react';
// const axios = 'axios';
// // const ApiUrl = '../../../api/ApiURL';
// // const SessionHelper = '../../../SessionHelper/SessionHelper';
// const { ToastContainer, toast } = 'react-toastify';
// const eye = '/image/New_Assets/eye.png'
// const eye_hidden = '/image/New_Assets/eye-hidden.png'


// const Login = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [emailError, setEmailError] = useState(false)
//     // const [passwordError,setPasswordError] = useState(false)
//     const [serverError, setServerError] = useState(false)
//     const [type,setType] = useState('password')
//     const [status ,setStatus] = useState(0)

//     // const emailValidation = (email) => {
//     //     const regEx = /^\S+@\S+\.\S+$/
//     //     const emailValidated = regEx.test(email)
//     //     if (email.length < 1) {
//     //         setEmail(null)
//     //         setEmailError(false)
//     //         return
//     //     }
//     //     else if (emailValidated) {
//     //         setEmail(email)
//     //         setEmailError(false)
//     //         return
//     //     }
//     //     else {
//     //         setEmailError(true)
//     //         setEmail('')
//     //         return
//     //     }
//     // }

//     // const studentLogin = (e) => {
//     //     e.preventDefault()
//     //     const email = e.target.email.value
//     //     const password = e.target.password.value

//     //     emailValidation(email)

//     //     if (password.length < 1) {
//     //         setPassword(null)
//     //         // setEmailError(false)
//     //     }
//     //     else if (password.length>1) {
//     //         setPassword(password)
//     //     }
//     //     else {
//     //         setPassword('')
//     //     }

//     //     let MyFormDataJson = {'email': email, 'password': password}

//     //     if(email && password){
//     //         console.log('api call success');
//     //         /* axios.post(ApiUrl.SendLogin, MyFormDataJson)
//     //             .then(function (response) {
//     //                 // handle success
//     //                 console.log(response);
//     //             })
//     //             .catch(function (error) {
//     //                 // handle error
//     //                 console.log(error);
//     //             }) */


//     //             axios.post(ApiUrl.SendLogin, MyFormDataJson).then((response) => {
//     //                 console.log(response)
//     //                 if (response.status === 200 && response.data.login === 1) {
//     //                     SessionHelper.SetUserEmail(email);
//     //                     localStorage.setItem("u_id", response.data.u_id);
//     //                     localStorage.setItem("create_at", response.data.create_at);
//     //                     localStorage.setItem("day_active", response.data.day_active);
//     //                     localStorage.setItem("admission", response.data.admission);
//     //                     localStorage.setItem("reg_uuid", response.data.reg_uuid);
//     //                     localStorage.setItem("Type", 1);
//     //                     localStorage.setItem("Course_title",response.data.title);
//     //                     toast.success('successfully login', {
//     //                         position: "bottom-center",
//     //                         theme: "colored",
//     //                         hideProgressBar: false,
//     //                         closeOnClick: true,
//     //                         pauseOnHover: true,
//     //                         draggable: true,
//     //                         progress: undefined,
//     //                         autoClose: 3000,
//     //                     });
//     //                     setStatus(1)
//     //                 } else if (response.status === 200 && response.data.login === 2) {
//     //                     toast.error(response.data.msg, {
//     //                         position: "bottom-center",
//     //                         theme: "colored",
//     //                         hideProgressBar: false,
//     //                         closeOnClick: true,
//     //                         pauseOnHover: true,
//     //                         draggable: true,
//     //                         progress: undefined,
//     //                         autoClose: 3000,
//     //                     });
//     //                 } else {
//     //                     toast.error('Username or password wrong!', {
//     //                         position: "bottom-center",
//     //                         theme: "colored",
//     //                         hideProgressBar: false,
//     //                         closeOnClick: true,
//     //                         pauseOnHover: true,
//     //                         draggable: true,
//     //                         progress: undefined,
//     //                         autoClose: 3000,
//     //                     });
//     //                 }
//     //             }).catch(() => {
//     //                 toast.error('Request Fail ! Try Again', {
//     //                     position: "bottom-center",
//     //                     theme: "colored",
//     //                     hideProgressBar: false,
//     //                     closeOnClick: true,
//     //                     pauseOnHover: true,
//     //                     draggable: true,
//     //                     progress: undefined,
//     //                     autoClose: 3000,
//     //                 });
//     //             })
//     //     }
//     // }
//     return (
//         <div className={`${style.login_box} d-flex justify-content-center align-items-center`}>
//             <div className={`${style.aside_left} w-50 h-100 d-flex justify-content-center align-items-center`}>
//                 <img src={bgImage} alt="" className='w-75' />
//             </div>
//             <div className='w-50 py-5'>
//                 <h4 className='text-center'>Login with email & password</h4>
//                 {/* <form className='w-75 mx-auto mt-5' onSubmit={(e) => studentLogin(e)}> */}
//                 <form className='w-75 mx-auto mt-5' >
//                     <div className='d-flex flex-column'>
//                         <label>Email</label>
//                         {/* <input type="email" name="email" onBlur={(e) => emailValidation(e.target.value)} /> */}
//                         <input type="email" name="email"  />
//                         <input type="email" name="email"/>
//                         {email === null ? <p className='d-flex align-items-center mt-1'><img src={cross} alt="" className={`${style.cross} mr-2`} />Email field can not be empty!</p>
//                             : emailError &&
//                             <p className='d-flex align-items-center mt-1'><img src={cross} alt="" className={`${style.cross} mr-2`} />Invalid email adress!</p>
//                         }
//                     </div>
//                     <div className='d-flex flex-column mt-5 position-relative'>
//                         <label>Password</label>
//                         {/* <input type={type} name="password" onBlur={(e) => setPassword(e.target.value)} /> */}
//                         <input type={type} name="password" />
//                         {password === null && <p className='d-flex align-items-center mt-3'><img src={cross} alt="" className={`${style.cross} mr-2`} />Password field can not be empty!</p>}
//                         {serverError && <p className='d-flex align-items-center mt-3'><img src={cross} alt="" className={`${style.cross} mr-2`} /> Username or Password is wrong!</p>}
//                         <img className={style.eye} src={type === 'text' ? eye : eye_hidden} alt="password" onClick={()=> type === 'text' ? setType('password'):setType('text')}/>
//                         <img className={style.eye} src={type === 'text' ? eye : eye_hidden} alt="password" />
//                     </div>
//                     <div className='d-flex flex-column align-items-center mt-5'>
//                         <input type="submit" name="" value="Login" className={`${style.login_btn}`} />
//                         <Link to="/new-admission" className='mt-4'><p className='d-inline-block border-bottom'>Apply for course</p></Link>
//                     </div>
//                 </form>
//                 <ToastContainer/>
//                 {status === 1 && <Redirect to="/new-profile"/>}
//             </div>
//         </div>
//     );
// };

// export default Login;

// const [data,Setdata]=useState(false)

// console.log(data);
const Login= () => {
    const [show,setShow] = useState(false)
            // const handle=(e)=>{
            //     setShow(!e);
            // }
    return (
        <div className={`${style.mainlogin} container`}>
        <div className={`${style.login_box} d-flex justify-content-center align-items-center`}>
        <div className={`${style.aside_left} w-50 h-100 d-flex justify-content-center align-items-center`}>
            <img src={bgImage} alt="" className='w-75' />
        </div>
        <div className='w-50 py-5'>
            <h4 className={`${style.titel} text-center`}>Login with email & password</h4>
    
              <form className='w-75 mx-auto mt-5' >
                <div className='d-flex flex-column'>
                <label>Email</label>
                    <input type="email" name="email" className={style.input} />
                  
                </div>
                <div className='d-flex flex-column mt-5 position-relative'>
                    <label>Password</label>
                    <input name="password" type="password" py-2 className={`${style.input} bg-danger}`}/>
                    <AiFillEye className={style.eye} ></AiFillEye>
                    <AiFillEyeInvisible className={style.eye}/>
                </div>
                <div className='d-flex flex-column align-items-center mt-5'>
                    <input type="submit" name="" value="Login" className={`${style.login_btn}`} />
                    <Link href="/new-admission" className='mt-4'><p className='d-inline-block border-bottom'>Apply for course</p></Link>
                </div>
            </form>
            {/* <ToastContainer/> */}
            {/* {status === 1 && <Redirect to="/new-profile"/>} */}
        </div>
    </div>
    </div>
    );
};

export default Login;

Login .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}