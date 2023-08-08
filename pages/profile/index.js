import React from 'react';
const admissionBanner ='/image/course.png'
const manAvatar ='/image/New_Assets/man.png'
const womanAvatar ='/image/New_Assets/woman.png'
const commonAvatar ='/image/New_Assets/common.png'
import style from './profile.module.css'
// import PaymentDetails from '../../PaymentDetails/PaymentDetails';
// import Payment from '../../Payment/Payment';
import { useEffect } from 'react';
import ApiUrl from '../api/api';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import RootLayout from '@/components/Layout';
import Payment from '@/common/Payment';
import PaymentDetails from '@/common/PaymentsDetals';
import { AiOutlineClose } from 'react-icons/ai';


const Profile = () => {
    const [profileData, setProfileData] = useState([])
    const [paymentData, setPaymentData] = useState([])
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')

    useEffect(() => {
        // let UserUUID = sessionStorage.getItem('reg_uuid');
        // console.log(UserUUID)
        // setEmail(localStorage.getItem('UserEmail'))
        axios.get(ApiUrl.ProfileApi + "?reg_uuid=" + 'a5255671-4a01-4af4-a4b4-5a0c4086e5e6').then((response) => {
            if (response.status === 200) {
                setProfileData(response.data);
                setDob(response.data.dob.split(/[- : /]/));
            }
        }).catch(() => {

        })

        // Payment History api
        axios.get(ApiUrl.BaseUrl + "admission-api/api/t-list/?reg_uuid=" + 'a5255671-4a01-4af4-a4b4-5a0c4086e5e6').then((response) => {
            if (response.status === 200) {
                setPaymentData(response.data);
            }
        }).catch(() => {

        })
    }, [])

    
    return (
        <div className={`${style.profile_container} container-fluid d-flex justify-content-center  `}>
            <div>
                <Link href="https://www.hackers.institute/2018/09/Ethical-Hacking-Course-Bangladesh.html"><img src={admissionBanner} alt="" /></Link>
            </div>
            <div className='container mx-0'>
                <h5 className={`${style.student_profile}`}>Student Profile</h5>
                <div className={`${style.line}`}></div>
                <div className='d-flex justify-content-around '>
                    <aside>
                        <div className={`${style.avatar_sec} `}>
                            {/* <div className='border rounded-circle w-50 text-center'> */}
                            {/* <img src={profileData.gender === 'male' ? manAvatar : profileData.gender === 'male' ? womanAvatar : commonAvatar} alt="" />manAvatar */}
                            <img src={womanAvatar} alt="" className={style.img}/>{/* manAvatar */}
                            {/* </div> */}
                            <p>#{profileData.u_id}</p>
                            <p>{profileData.Fullname}</p>
                            <p>{profileData?.batch_schedule_name}</p>
                        </div>
                    </aside>
                    <main className={`${style.details_container}`}>
                        
                        <ul className={`${style.infoTable}`}>
                            
                            <li><span className='font-weight-bold'>Name</span><span>:</span><span>{profileData?.Fullname}</span></li>
                            <li><span className='font-weight-bold'>Email</span><span>:</span><span>{email ? email : '-'}</span></li>
                            <li><span className='font-weight-bold'>Phone</span><span>:</span><span>{profileData?.phn}</span></li>
                            <li><span className='font-weight-bold'>NID</span><span>:</span><span>{profileData.nid}</span></li>
                            <li><span className='font-weight-bold'>DOB</span><span>:</span><span>{dob[2] + '-' + dob[1] + '-' + dob[0]}</span></li>
                            <li><span className='font-weight-bold'>Gender</span><span>:</span><span>{profileData?.gender}</span></li>
                            <li><span className='font-weight-bold'>Institute</span><span>:</span><span>{profileData?.institute}</span></li>
                            <li><span className='font-weight-bold'>Address</span><span>:</span><span>{profileData?.p_address}</span></li>
                            <li><span className='font-weight-bold'>City</span><span>:</span><span>{profileData?.city}</span></li>
                            <li><span className='font-weight-bold'>Hobby</span><span>:</span><span>{profileData.hobby}</span></li>
                            <li><span className='font-weight-bold'>Admission</span><span>:</span>
                                {profileData?.discount_user ? <span className="text-success">Done</span> :
                                    paymentData?.total?.total_amount >= profileData?.course_fee_divide ?
                                        <span className="text-success">Done</span>
                                        : paymentData?.total?.total_amount === null || 0 ?
                                            <span className="text-danger">Pending</span>
                                            :
                                            !paymentData.total ?
                                                <span className="text-danger">Pending</span>
                                                :
                                                <span className="text-primary">Seat Booking</span>
                                }</li>{/* <span>Done</span> */}
                            {/* {   profileData?.discount_user ? <h6 className="NameText text-center">Admission: <span className="text-success">Done</span></h6> :
                                    paymentData?.total?.total_amount >= profileData?.course_fee_divide ? 
                                    <h6 className="NameText text-center">Admission: <span className="text-success">Done</span></h6> 
                                    : paymentData?.total?.total_amount === null || 0 ?
                                    <h6 className="NameText text-center">Admission: <span
                                    className="text-danger">Pending</span></h6>
                                    :
                                    !paymentData.total ? 
                                    <h6 className="NameText text-center">Admission: <span
                                    className="text-danger">Pending</span></h6>
                                    :
                                    <h6 className="NameText text-center">Admission Status: <span
                                    className="text-primary">Seat Booking</span></h6>
                                } */}
                        </ul>
                    </main>
                </div>
                <div>
                    <h5 className={`${style.payment_summary}`}>Payment Summary</h5>
                    <div className={`${style.line}`}></div>
                    <table className='container '>
                        <thead className={`${style.payment_table_head}`}>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Number</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody className={`${style.payment_table_body}`}>
                            <tr>
                                <td>1</td>
                                <td>02/12/22</td>
                                <td>Nagad</td>
                                <td>+895264545</td>
                                <td>7000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>05/12/22</td>
                                <td>Nagad</td>
                                <td>+895264545</td>
                                <td>7000</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-right'>total:</td>
                                <td>14000 ৳</td>
                            </tr>
                        </tbody>
                        <tbody className={`${style.payment_table_body}`}>
                        {
                            paymentData?.data?.length === 0 ? <tr>
                                <td colSpan={5} className="text-center">No Payment Details Available</td>
                            </tr> :
                                paymentData?.data?.map((data,index) =>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{new Date(data.time).getDate()+"-"+parseInt(new Date(data.time).getMonth()+1)+"-"+new Date(data.time).getFullYear()}</td>
                                        {console.log(new Date(data.time).getDate()+"-"+parseInt(new Date(data.time).getMonth()+1)+"-"+new Date(data.time).getFullYear())}
                                        <td>{data?.payment_type}</td>
                                        <td>{data?.pay_number}</td>
                                        <td>{data?.amount}</td>
                                    </tr>
                                )
                                
                        }
                        <tr>
                            <td colSpan={3}></td>
                            <td className='text-right'>Total:</td>
                            <td>{paymentData?.total?.total_amount} &#2547;</td>
                        </tr>
                     </tbody>
                    </table>
                </div>
                <Payment></Payment>
                <PaymentDetails></PaymentDetails>
    
           
            </div>
            <div>
                <Link href="https://www.hackers.institute/2018/09/Ethical-Hacking-Course-Bangladesh.html"><img src={admissionBanner} alt="" /></Link>
            </div>
        </div>
    );
};

export default Profile;

Profile .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}