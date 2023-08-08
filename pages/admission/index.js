import React, { useState } from 'react';
import style from './Apply.module.css'
const test = '/image/mainLogo.png'
import { DatePicker } from 'react-rainbow-components';
import RootLayout from '@/components/Layout';
import ApiUrl from '../api/api';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useMutation, useQuery } from 'react-query';
import { useForm } from "react-hook-form";




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
    
      

 const [perA,setPerA]=useState('')
 const [perC,setPerC]=useState('')
 const [perP,setPerP]=useState('')
 const [cheked,setCheked]=useState(true)
    const copyAddress = (e) => {
        
        setCheked(prev=>!prev)
          if(cheked){
            let presentAddress = document.getElementById('present').value
            let presentCity = document.getElementById('present_city').value
            let presentCode = document.getElementById('present_code').value;
            setPerA(presentAddress);
            setPerC(presentCity);
            setPerP(presentCode);
          }
          else{
            setPerA('');
            setPerC('');
            setPerP('');
          }
      
        
    }
    const change = (e) => {
          if(!cheked){
            let presentAddress = document.getElementById('present').value
            let presentCity = document.getElementById('present_city').value
            let presentCode = document.getElementById('present_code').value;
            setPerA(presentAddress);
            setPerC(presentCity);
            setPerP(presentCode);
          }
          else{
            setPerA('');
            setPerC('');
            setPerP('');
          }
      
        
    }

    let config = {
        headers: {'content-type': 'multipart/form-data'}
    }
    // it will be used after connect wifi
    const {
        register,
        formState: { errors },
      } = useForm({ mode: "all" });
      
      
      const PostData=()=>{
        axios.post("http://192.168.0.116:8000/v1/login/",data)
        .then(function (response) {
            console.log(response.status
                )
            
          return (response);
          
        })
        .catch(function (error) {
          console.log(error);
        });
       } 
       const {data, isError, isLoading,isSuccess } = useQuery('posts', PostData) 
       
       // first argument is a string to cache and track the query result
     
    const handleSubmit = (e)=>{
       
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("batch_schedule_time", "0");
        if(isSuccess){
            window.location = "/success";
        }
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
        
 
      

    

    
        
    
    }

 
    const cookies = new Cookies();
    // var date = new Date();
    // date.setTime(date.getDate());
    // console.log(date);

const current = new Date();
const currentValue = new Date();


// it adds 7 days to the current date
current.setDate(current.getDate() + 7);
const ndate=(current);

    var d = new Date()
    // console.log(d)
   
    
    cookies.set('myCat', 'Pacman', { path: '/',expires:ndate });
    // console.log(cookies.get('myCat'));

   
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
                                <input  className={style.inputs} type="" name="student_name" required/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Mobile Number<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_mobile" required/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Email<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_email" required />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Facebook Name<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="fb_id" required/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>NID/Birth Certificate/Passport<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="nid" required/>
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Address</h5>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Address (Present)<span className='text-danger'>*</span></label>
                                <input id='present' onChange={change} className={style.inputs} type="" name="present_address" required/>
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>City<span className='text-danger'>*</span></label>
                                <input id='present_city' onChange={change}  className={style.inputs} type="" name="present_city" required/>
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Post Code<span className='text-danger'>*</span></label>
                                <input id='present_code' onChange={change} className={style.inputs} type="" name="present_postal" required />
                            </div>
                            <div className='col-12 d-flex flex-row-reverse justify-content-end align-items-center'>
                                <label htmlFor="" className='mb-0 ml-2 ps-2'> Same as present adddress?</label>
                                <input  className={`${style.inputs} mr-5`} type="checkbox" name="copy" required onClick={copyAddress}/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Address (Permanent)<span className='text-danger'>*</span></label>
                                <input id='perA' className={style.inputs} type="" name="permanent_address" value={perA} required/>
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>City<span className='text-danger'>*</span></label>
                                <input id='perA'   className={style.inputs} type="" name="permanent_city" value={perC} required/>
                            </div>
                            <div className='col-3 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Post Code<span className='text-danger'>*</span></label>
                                <input id='perC'   className={style.inputs} type="" name="permanent_postal" value={perP} required />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Office Address (If any)</label>
                                <input  className={style.inputs} type="" name="office_address" required />
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Other Information</h5>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Date of Birth<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="date" name="dob" required /> */}
                             
                                    <DatePicker
                                            value={dob?dob:currentValue}
                                            // value={dob}
                                            onChange={birth_dateOnChange}
                                            className={style.inputDateP}
                                            placeholder="Select Date of Birth"
                                            name='birth_date'
                                            required={true}
                                            

                                            
                                           
                                            
                                        />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Occupation<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="student_occupation" required/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Nationality<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="" name="nationality" /> */}
                                <select className={`${style.selects} bg-transparent`} name='nationality'required>
                                    <option disabled selected></option>
                                    <option >Bangladeshi</option>
                                    <option >Other Country</option>
                                </select>
                            </div>
                      
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Gender<span className='text-danger' >*</span></label>
                                {/* <input  className={style.inputs} type="" name="nationality" /> */}
                                <select className={`${style.selects} bg-transparent`} name='gender' required>
                                    <option disabled selected></option>
                                    <option >Male</option>
                                    <option >Female</option>
                                </select>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Select Course<span className='text-danger'>*</span></label>
                                <select className={`${style.selects} bg-transparent `} name="course_title" required>
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
                                <input  className={style.inputs} type="" name="varsity_name" required/>
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Department<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="varsity_dpt" required/>
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Id<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="varsity_id" required/>
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                            <h5 className='position-absolute'>Alternative contact</h5>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Name<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_name" required/>
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Mobile<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_mobile" required/>
                            </div>
                            <div className='col-4 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Relation<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="alt_relation" required/>
                            </div>
                        </div>
                        <div className={`${style.box} row border position-relative`}>
                        <h5 className='position-absolute'>Assesment</h5>
                            <div className='col-12 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Interest/Hobbies</label>
                                <input  className={style.inputs} type="" name="hobby" required/>
                            </div>
                            <div className='col-12 d-flex flex-column'>
                                <label htmlFor="" className={style.fontWeight}>Why do you want to learn Cyber Security / Python?<span className='text-danger'>*</span></label>
                                <input  className={style.inputs} type="" name="des_question" required/>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input  className={style.inputs} type="submit" name="" value="Submit" className={`${style.submit_btn}`}  required/> {/* onClick={(e) => e.preventDefault()} */}
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