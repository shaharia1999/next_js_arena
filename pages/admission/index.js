import React, { useState } from 'react';
import style from './Apply.module.css'
const test = '/image/mainLogo.png'
import { DatePicker } from 'react-rainbow-components';
import RootLayout from '@/components/Layout';
import ApiUrl from '../api/api';
import axios from 'axios';

const Form = () => {
    const [dob,setDob] = useState('')
    const api=ApiUrl.SendApiUrl;
    const birth_dateOnChange =(date)=>{
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let new_date = year+'-'+month+'-'+day
        setDob(new_date)
    }
    const copyAddress = (event) => {
        console.log("copied");
        let val = event.target.checked;
        /* if (val === true) {
            let permanent_address = this.state.present_address;
            let permanent_city = this.state.present_city;
            let permanent_postal = this.state.present_postal;

            this.setState(({permanent_address: permanent_address}));
            this.setState(({permanent_city: permanent_city}));
            this.setState(({permanent_postal: permanent_postal}));
        } else {
            let permanent_address = '';
            let permanent_city = '';
            let permanent_postal = '';

            this.setState(({permanent_address: permanent_address}));
            this.setState(({permanent_city: permanent_city}));
            this.setState(({permanent_postal: permanent_postal}));
        } */
    }
    let config = {
        headers: {'content-type': 'multipart/form-data'}
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("batch_schedule_time", "0");
        // const name = e.target.name.value
        // const number = e.target.number.value
        // const email = e.target.email.value
        // const fbName = e.target.fb_name.value
        // const nid = e.target.nid.value
        // const presentAddress = e.target.present_address.value
        // const presentCity = e.target.present_city.value
        // const presentCode = e.target.present_code.value
        // const permanentAddress = e.target.permanent_address.value
        // const permanentCity = e.target.permanent_city.value
        // const permanentCode = e.target.permanent_code.value
        // const office = e.target.office_address.value
        // const date_of_birth = dob
        // const occupation = e.target.occupation.value
        // const institute = e.target.institute_info.value
        // const department = e.target.department.value
        // const intituteId = e.target.institute_id.value
        // const altName = e.target.alt_name.value
        // const altNumber = e.target.alt_mobile.value
        // const altRelation = e.target.alt_relation.value
        // const interest = e.target.interest.value
        // const reason = e.target.reason.value
        // const nationality =JSON.stringify(e.target.nationality.value) 
        // const course = e.target.course.value
        // const ALLDATA=[name,number,email,fbName,nid,presentAddress,presentCity,presentCode,permanentAddress,permanentCity,permanentCode,office,date_of_birth,occupation,institute,department,intituteId,altName,altNumber,altRelation,interest,reason,nationality,course];
        axios.post("http://192.168.0.116:8000/api/form/",data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
    }

   

    // function handleSubmit(e) {
    //     event.preventDefault();
    //     const data = new FormData(e.target);
    //     const value = Object.fromEntries(data.entries());
    //     var deta = JSON.stringify(value)
    //     deta = JSON.parse(deta)
    //     console.log(deta);

    // }
    // const form = document.querySelector('form');
    // form.addEventListener('submit', handleSubmit);
    return (
        <section className={`${style.apply_container} position-relative`}>
            <div className={`${style.form_container} container mx-auto px-0`}>
                <h1 className='text-center mb-5'>Student Information</h1>
                <form className='' onSubmit={(e)=>handleSubmit(e)}>
                    <div className='d-flex flex-column' style={{ gap: '50px 0px' }}>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Personal Information</h5>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Student Name<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_name" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Mobile Number<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_mobile" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Email<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_email" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Facebook Name<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="fb_id" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>NID/Birth Certificate/Passport<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="nid" />
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Address</h5>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Address (Present)<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="present_address" />
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>City<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="present_city" />
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Post Code<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="present_postal" />
                            </div>
                            <div className='col-12 d-flex flex-row-reverse justify-content-end align-items-center'>
                                <label htmlFor="" className='mb-0 ml-2'>Same as present adddress?</label>
                                <input  className={style.inputs} type="checkbox" name="copy" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Address (Permanent)<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="permanent_address" />
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>City<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="permanent_city" />
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Post Code<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="permanent_postal" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Office Address (If any)</label>
                                <input  className={style.inputs} type="" name="office_address" />
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Other Information</h5>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Date of Birth<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="date" name="dob" /> */}
                                <DatePicker
                                            value={dob}
                                            onChange={birth_dateOnChange}
                                            className={style.inputDateP}
                                            placeholder="Select Date of Birth"
                                            name='birth_date'
                                        />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Occupation<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_occupation" />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Nationality<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="" name="nationality" /> */}
                                <select className={`${style.selects} bg-transparent`} name='nationality'>
                                    <option disabled selected></option>
                                    <option >Bangladeshi</option>
                                    <option >Other Country</option>
                                </select>
                            </div>
                      
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Gender<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="" name="nationality" /> */}
                                <select className={`${style.selects} bg-transparent`} name='gender'>
                                    <option disabled selected></option>
                                    <option >Male</option>
                                    <option >Female</option>
                                </select>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Select Course<span className='text-danger'>*</span></label>
                                <select className={`${style.selects} bg-transparent `} name="course_title">
                                    <option disabled selected></option>
                                    <option >Cyber Security and Ethical Hacking</option>
                                    <option >Cyber Security and Advance Python (Duo)</option>
                                    <option >Advanced Python With Freelancing</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Institution Information</h5>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>School/College/University<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="varsity_name" />
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Department<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="varsity_dpt" />
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Id<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="varsity_id" />
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Alternative contact</h5>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Name<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_name" />
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Mobile<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_mobile" />
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Relation<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_relation" />
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                        <h5 className='position-absolute'>Assesment</h5>
                            <div className='col-12 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Interest/Hobbies</label>
                                <input  className={style.inputs} type="" name="hobby" />
                            </div>
                            <div className='col-12 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Why do you want to learn Cyber Security / Python?<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="des_question" />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input  className={style.inputs} type="submit" name="" value="Submit" className={`${style.submit_btn}`}  /> {/* onClick={(e) => e.preventDefault()} */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;


Form .getLayout=(page)=>{
  return <RootLayout>{page}</RootLayout>
}