'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import style from './success.module.css'
import useWindowSize from 'react-use/lib/useWindowSize'
import RootLayout from '@/components/Layout';

const SuccessSmsPage= () => {
    let [width,setWidth]=useState('');
    let [height,setHeight]=useState('')
    
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, []);

   
    return (
        <div>
             <div>
                     <div className={`${style.success} mb-5`} >
                     <Confetti width={width} height={height}  opacity={.4}/>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0" style={{ border: "none", backgroundColor: "#fafafa"}}>
                                <span>
                                   <button className="close1 btn closeBtn" >

                                   </button>
                                    <div className={`mb-5 p-5`}>
                                           <h6 className={`${style.CongratulationText} text-center mb-3`}>Congratulations!</h6>
                                            <div className="SmsBox">
                                <h6 className={`${style.FormIdText} mb-3 text-center`}>Your Registration ID</h6>
                                <h6 className={`${style.FormIdText} mb-3 text-center`}>#</h6>
                                <h6 className={style.SuccessMsgText}>Your form has been submitted successfully.</h6>
                                <h6 className={style.SuccessMsgText}>To complete registration <Link href="/login"> <span className={`${style.pay_now_btn} btn pt-1 pb-1 `}>pay now</span> </Link> </h6>
                                <h6 className={style.SuccessMsgText}>Your <b className={style.SuccessMsgBoldText}>User ID,
                                    Password</b> has been send to your email. Please check your <b
                                    className={style.SuccessMsgBoldText}>mail inbox or spam box</b> for further instruction.</h6>
                            </div>
                                    </div>

                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default SuccessSmsPage;

SuccessSmsPage .getLayout =(page)=>{
    return <RootLayout>{page}</RootLayout>
}