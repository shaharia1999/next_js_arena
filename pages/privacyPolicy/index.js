'use client'
import React from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';
import style from './privacy.module.css'
import RootLayout from '@/components/Layout';
import ScrollToTop from 'react-scroll-up';

const PrivacyPolicy = () => {
    // window.scroll(0,0)
    // const style = {
    //     fontWeight:'600'
    // }
    return (
        <div className={`${style.main} container`}>
            <h2 className='my-5'>PRIVACY NOTICE</h2>
            <p className="text-justify">This privacy notice for Arena Web Security, describes how and why we might collect, store, use, ('process' your information when you use our services Services'), such as when you:</p>
            <ul>
                <li>Register at our website at arenawebsecurity.net, or any website of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices.</p>

            <h4 className='mt-5 mb-4'>SUMMARY OF KEY POINTS</h4>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Arena Web Security and the Services, the choices you make, and the service and features you use. The personal information we collect may include the following:</p>
            <ul>
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Job titles</li>
                <li>Contact or authentication data</li>
                <li>Billing addresses</li>	
            </ul>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> Do we process any sensitive personal information?</span> We do not process sensitive personal information.</p>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> Do we receive any information from third parties?</span> We do not receive any information from third parties.</p>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> How do we process your information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> In what situations and with which parties do we share personal information?</span> We do not share information in specific situations and with specific third parties except</p>
            <ul>
                <li>Any regulatory, supervisory or government authority having jurisdiction over Arena Web Security</li>
                <li>Any person to whom Arena Web Security is required or authorized by law or a court of law to disclose such information</li>
            </ul>
            <p className="text-justify"><span className={style.style}><i><BsQuestionCircleFill/></i> How do we keep your information safe?</span> We have organizational and technical processes and procedures in place to protect your personal information.</p>
            <h4 className='mt-5 mb-4'>Payment Data</h4>
            <p className="text-justify">We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a Bkash), and the security code associated with your payment instrument. All payment data is stored by Bkash. You may find their privacy in their website.
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
            <p className="text-justify"><span className={style.style}>Withdrawing your consent:</span> You can withdraw your consent at any time by contacting us through email (info@arenawebsecurity.net) or via hotline (+880 1310 333 444)</p>
        </div>
    );
};

export default PrivacyPolicy;

PrivacyPolicy.getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}