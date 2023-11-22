"use client";
import React from "react";
const admissionBanner = "/image/course.png";
const manAvatar =
  "/image/profile/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg";
const womanAvatar = "/image/profile/beautiful-woman-avatar-character-icon-free-vector.jpg";
const commonAvatar = "/image/New_Assets/common.png";
import style from "./profile.module.css";
// import PaymentDetails from '../../PaymentDetails/PaymentDetails';
// import Payment from '../../Payment/Payment';
import { useEffect } from "react";
import ApiUrl from "../api/api";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import RootLayout from "@/components/Layout";
import Payment from "@/common/Payment";
import PaymentDetails from "@/common/PaymentsDetals";
import { AiOutlineClose } from "react-icons/ai";
import MyTimeCount from "@/components/TimeCounDown";
import { Fragment } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    let UserUUID = sessionStorage.getItem("reg_uuid");
    setId(UserUUID);

    const value = sessionStorage.getItem("day_active");
    const seassion = Number(value);
    if (seassion === null || seassion === 0 || seassion < 0) {
      window.location.href = "/login";
      Swal.fire({
        title:
          "Login and try again  ! Please Call The Help Number +88 01324176407",
        timer: 10000,
        button: false,
        timerProgressBar: true,
        customClass: "swal-Title",
      }).then((result) => {
        window.location.href = "/login";
      });
      localStorage.removeItem("UserEmail");
      localStorage.removeItem("img");
      localStorage.removeItem("u_id");
      localStorage.removeItem("phn");
      localStorage.removeItem("gender");
      localStorage.removeItem("hobby");
      localStorage.removeItem("dob");
      localStorage.removeItem("city");
      localStorage.removeItem("institute");
      localStorage.removeItem("Fullname");
      localStorage.removeItem("p_address");
      localStorage.removeItem("nid");
      localStorage.removeItem("create_at");
      localStorage.removeItem("UserEmail");
      localStorage.removeItem("day_active");
      sessionStorage.removeItem("create_at");
      sessionStorage.removeItem("day_active");
      sessionStorage.removeItem("admission");
      sessionStorage.removeItem("time");
      return;
    }

    setEmail(localStorage.getItem("UserEmail"));
    axios
      .get(ApiUrl.ProfileApi + "?reg_uuid=" + UserUUID)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          setProfileData(response.data);
          console.log(response.data);
          setDob(response.data.dob.split(/[- : /]/));
        }
      })
      .catch(() => {});
    // Payment History api
    axios
      .get(ApiUrl.BaseUrl + "api/t-list/?reg_uuid=" + UserUUID)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <Fragment>
      <div className={style.mainProfilePage}>
        <MyTimeCount></MyTimeCount>
        {/* <div className={`${style.profile_container} container-fluid d-flex justify-content-center  `}>
            <div>
                <Link href="https://www.hackers.institute/2018/09/Ethical-Hacking-Course-Bangladesh.html"><img src={admissionBanner} alt="" className='d-none d-lg-block' /></Link>
            </div>
            <div className='container mx-0'>
                <h5 className={`${style.student_profile}`}>Student Profile</h5>
                <div className={`${style.line}`}></div>
                <div className='d-lg-flex justify-content-around '>
                    <aside>
                        <div className={`${style.avatar_sec} `}>
                            <img src={womanAvatar} alt="" className={style.img}/>
                            <p>#{profileData.u_id}</p>
                            <p>{profileData.Fullname}</p>
                            <p>{profileData?.batch_schedule_name}</p>
                        </div>
                    </aside>
                    <main className={`${style.details_container}`}>
                        
                        <ul className={`${style.infoTable}`}>
                            
                            <li><span className={style.spanBold}>Name</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData?.Fullname}</span></li>
                            <li><span className={style.spanBold}>Email</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-1'>{email}</span></li>
                            <li><span className={style.spanBold}>Phone</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData?.phn}</span></li>
                            <li><span className={style.spanBold}>NID</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData.nid}</span></li>
                            <li><span className={style.spanBold}>DOB</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{dob[2] + '-' + dob[1] + '-' + dob[0]}</span></li>
                            <li><span className={style.spanBold}>Gender</span><span className='lg-ps-3 ps-2'>:</span ><span className='lg-ps-3 ps-2'>{profileData?.gender}</span></li>
                            <li><span className={style.spanBold}>Institute</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData?.institute}</span></li>
                            <li><span className={style.spanBold}>Address</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData?.p_address}</span></li>
                            <li><span className={style.spanBold}>City</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData?.city}</span></li>
                            <li><span className={style.spanBold}>Hobby</span><span className='lg-ps-3 ps-2'>:</span><span className='lg-ps-3 ps-2'>{profileData.hobby}</span></li>
                            <li><span className={style.spanBold}>Admission</span><span className='lg-ps-3 ps-2'>:</span>
                            {  data?.discount_user ? <h6 className="NameText text-center"> <span className="text-success">Done</span></h6> :
                                    data?.total?.total_amount >= data?.course_fee_divide ? 
                                    <h6 className="NameText text-center"><span className="text-success">Done</span></h6> 
                                    : data?.total?.total_amount === null || 0 ?
                                    <h6 className="NameText text-center"> <span
                                    className="text-danger">Pending</span></h6>
                                    :
                                    !data.total ? 
                                    <h6 className="NameText text-center"> <span
                                    className="text-danger">Pending</span></h6>
                                    :
                                    <h6 className="NameText text-center"> <span
                                    className="text-primary">Seat Booking</span></h6>
                                }
                                </li>
                        </ul>
                    </main>
                </div>
                <div>
                    <h5 className={`${style.payment_summary}`}>Payment Summary</h5>
                    <div className={`${style.line}`}></div>
                    <table className='container '>
\
                        <thead className={style.table}>
                        <tr>
                            <th>#</th>
                            <th>Date of Payment</th>
                            <th>Payment Type</th>
                            <th>Payment Number</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                       <tbody className={style.table2}>
                        {
                            data?.data?.length === 0 ? <tr>
                                <td colSpan={5} className="text-center">No Payment Details Available</td>
                            </tr> :
                                data?.data?.map((data,index) =>
                                    <tr className='px-2 py-2' key={index}>
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
                            <td>{data?.total?.total_amount} &#2547;</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <Payment></Payment>
                <PaymentDetails></PaymentDetails>
    
           
            </div>
            <div>
                <Link href="https://www.hackers.institute/2018/09/Ethical-Hacking-Course-Bangladesh.html"><img src={admissionBanner} alt="" className='d-none d-lg-block'/></Link>
            </div>
        </div> */}
        <div className="MainProfilePadding">
          <div className=" ">
            <div id="details_section" className="row justify-content-between  ">
              <div className={`col-lg-4 ${style.profile_img_sec}`}>
                <img
                  className={style.profileImg}
                  src={profileData.gender == "male" ? manAvatar : womanAvatar}
                  alt=""
                />
                <h6 className="IdText mt-3 text-center text-white">
                  ID: #{id}
                </h6>
                <h4 className="NameText text-center text-white ">
                  {profileData.Fullname}
                </h4>
                <div
                  className={`bg-white text-black ${style.profile_img_sec_con}`}
                >
                  <p>Admission Status</p>
                </div>

                {profileData?.discount_user ? (
                  <h6 className="NameText text-center">
                    {" "}
                    <span className="text-success">Done</span>
                  </h6>
                ) : paymentData?.total?.total_amount >=
                  profileData?.course_fee_divide ? (
                  <h6 className="NameText text-center">
                    {" "}
                    <span className="text-white">Done</span>
                  </h6>
                ) : paymentData?.total?.total_amount === null || 0 ? (
                  <h6 className="NameText text-center text-white mt-3">
                    <span className="text-warning">Pending</span>
                  </h6>
                ) : !paymentData.total ? (
                  <h6 className="NameText text-center">
                    <span className="text-warning">Pending</span>
                  </h6>
                ) : (
                  <h6 className="NameText text-center">
                    <span className="text-warning">Seat Booking</span>
                  </h6>
                )}

                <div
                  className={`bg-white text-black ${style.profile_img_sec_con}`}
                >
                  <p>Course Title</p>
                </div>
                <h6 className="courseTitle text-center mb-3 text-white">
                  <p className="d-inline-block"></p>{" "}
                  {profileData?.batch_schedule_name}{" "}
                </h6>
              </div>

              <div className="col-lg-8 m-0 p-0">
                <div className="">
                  <h3 className={style.profile_title}>Personal Details</h3>
                  <div className="p-lg-5 ps-2 p-md-5">
                    <div className="row ">
                      <h6 className="courseTitle col-lg-2 col-md-3  col-3 ">
                        <span className="TextBold">Name:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.Fullname}
                      </h6>
                    </div>

                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Phone:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.phn}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3 ">
                        <span className="TextBold">Email: </span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {email}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Nid:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.nid}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Birth Date:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {dob[2] + "-" + dob[1] + "-" + dob[0]}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Gender:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.gender}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Institute:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.institute}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Address:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.p_address}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">City:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.city}
                      </h6>
                    </div>
                    <div className="row">
                      <h6 className="courseTitle col-lg-2 col-md-3 col-3">
                        <span className="TextBold">Hobby:</span>
                      </h6>
                      <h6 className="courseTitle  col-lg-10 col-md-9  col-9">
                        {profileData.hobby}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
                    <h5 className={`${style.payment_summary}`}>Payment Summary</h5>
                    <div className={`${style.line}`}></div>
                    <table className='container '>

                        <thead className={style.table}>
                        <tr>
                            <th>#</th>
                            <th>Date of Payment</th>
                            <th>Payment Type</th>
                            <th>Payment Number</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                       <tbody className={style.table2}>
                        {
                            data?.data?.length === 0 ? <tr>
                                <td colSpan={5} className="text-center">No Payment Details Available</td>
                            </tr> :
                                data?.data?.map((data,index) =>
                                    <tr className='px-2 py-2' key={index}>
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
                            <td>{data?.total?.total_amount} &#2547;</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <Payment></Payment>
                <PaymentDetails></PaymentDetails>
      </div>
    </Fragment>
  );
};

export default Profile;

Profile.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
