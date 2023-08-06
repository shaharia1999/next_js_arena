import React, {Fragment} from 'react';
import {Animated} from "react-animated-css";
import {Button, Container, Form, Row} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../api/hello";
import DjangoCSRFToken from 'django-react-csrftoken';
import {DatePicker} from 'react-rainbow-components';
import style from '/'


class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student_name: "",
            student_mobile: "",
            student_email: "",
            fb_id: "",
            present_address: "",
            present_city: "",
            present_postal: "",
            permanent_address: "",
            permanent_city: "",
            permanent_postal: "",
            office_address: "",
            nid: "",
            student_occupation: "",
            birth_date: "",
            nationality: "",
            course: "",
            course_id:0,
            gender: "",
            varsity_name: "",
            varsity_dpt: "",
            varsity_id: "",
            alt_name: "",
            alt_mobile: "",
            alt_relation: "",
            hobby: "",
            profile_img: null,
            des_question: "",
            isEnable: false,
            form_id: "",
            courses:[]
        };
    }

    componentDidMount (){
        axios.get(ApiUrl.BaseUrl + 'admission-api/api/time-date/').then((response) => {
            this.setState({courses:response.data.data})
        }).catch(() => {

        })
    }

    student_nameOnChange = (event) => {
        let student_name = event.target.value;
        this.setState(({student_name: student_name}))
    }
    student_mobileOnChange = (event) => {
        let student_mobile = event.target.value;
        this.setState(({student_mobile: student_mobile}))
    }
    student_emailOnChange = (event) => {
        let student_email = event.target.value;
        this.setState(({student_email: student_email}))
    }
    fb_idOnChange = (event) => {
        let fb_id = event.target.value;
        this.setState(({fb_id: fb_id}))
    }
    present_addressOnChange = (event) => {
        let present_address = event.target.value;
        this.setState(({present_address: present_address}))
    }
    present_cityOnChange = (event) => {
        let present_city = event.target.value;
        this.setState(({present_city: present_city}))
    }
    present_postalOnChange = (event) => {
        let present_postal = event.target.value;
        this.setState(({present_postal: present_postal}))
    }
    copyAddress = (event) => {
        let val = event.target.checked;
        if (val === true) {
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
        }
    }
    permanent_addressOnChange = (event) => {
        let permanent_address = event.target.value;
        this.setState(({permanent_address: permanent_address}))
    }
    permanent_cityOnChange = (event) => {
        let permanent_city = event.target.value;
        this.setState(({permanent_city: permanent_city}))
    }
    permanent_postalOnChange = (event) => {
        let permanent_postal = event.target.value;
        this.setState(({permanent_postal: permanent_postal}))
    }
    office_addressOnChange = (event) => {
        let office_address = event.target.value;
        this.setState(({office_address: office_address}))
    }
    nidOnChange = (event) => {
        let nid = event.target.value;
        this.setState(({nid: nid}))
    }
    student_occupationOnChange = (event) => {
        let student_occupation = event.target.value;
        this.setState(({student_occupation: student_occupation}))
    }
    birth_dateOnChange = (date) => {
        /* let new_date = date.toLocaleDateString("en-CA");
        this.setState({birth_date: new_date}) */
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let new_date = year+'-'+month+'-'+day
        this.setState({birth_date: new_date})
    }
    nationalityOnChange = (event) => {
        let nationality = event.target.value;
        this.setState(({nationality: nationality}))
    }
    courseOnChange = (event) => {
        let courses = this.state.courses
        let course_id = parseInt(event.target.value);
        this.setState(({course_id: course_id}))
        // let id = this.state.courses.find(course =>)
        // this.setState(({course_id: event.target.selectedIndex}))
        // console.log("mehedi ===",course_x,course_id);
        // console.log("mehedi ===1",event.target.selectedIndex);
        for(var i =0;i<courses.length; i++){
            if(courses[i]?.batch_schedule_time_id === course_id){
                this.setState({course:courses[i]?.batch_schedule_name})
            }
        }
    }
    genderOnChange = (event) => {
        let gender = event.target.value;
        this.setState(({gender: gender}))
    }
    varsity_nameOnChange = (event) => {
        let varsity_name = event.target.value;
        this.setState(({varsity_name: varsity_name}))
    }
    varsity_dptOnChange = (event) => {
        let varsity_dpt = event.target.value;
        this.setState(({varsity_dpt: varsity_dpt}))
    }
    varsity_idOnChange = (event) => {
        let varsity_id = event.target.value;
        this.setState(({varsity_id: varsity_id}))
    }
    alt_nameOnChange = (event) => {
        let alt_name = event.target.value;
        this.setState(({alt_name: alt_name}))
    }
    alt_mobileOnChange = (event) => {
        let alt_mobile = event.target.value;
        this.setState(({alt_mobile: alt_mobile}))
    }
    alt_relationOnChange = (event) => {
        let alt_relation = event.target.value;
        this.setState(({alt_relation: alt_relation}))
    }
    hobbyOnChange = (event) => {
        let hobby = event.target.value;
        this.setState(({hobby: hobby}))
    }

    /* PreviewOnChange = (event) => {
        let profile_img1 = event.target.files[0];
        this.setState(({
            profile_img: profile_img1,
            profile_img_preview: URL.createObjectURL(event.target.files[0])
        }))
    } */
    des_questionOnChange = (event) => {
        let des_question = event.target.value;
        this.setState(({des_question: des_question}))
    }

    onFromSubmit = (event) => {
        var student_name = this.state.student_name;
        let student_mobile = this.state.student_mobile;
        let student_email = this.state.student_email;
        let fb_id = this.state.fb_id;
        let present_address = this.state.present_address;
        let present_city = this.state.present_city;
        let present_postal = this.state.present_postal;
        let permanent_address = this.state.permanent_address;
        let permanent_city = this.state.permanent_city;
        let permanent_postal = this.state.permanent_postal;
        let office_address = this.state.office_address;
        let nid = this.state.nid;
        let student_occupation = this.state.student_occupation;
        let birth_date = this.state.birth_date;
        let nationality = this.state.nationality;
        let course = this.state.course;
        let batch_schedule_time = this.state.course_id;
        let gender = this.state.gender;
        let varsity_name = this.state.varsity_name;
        let varsity_dpt = this.state.varsity_dpt;
        let varsity_id = this.state.varsity_id;
        let alt_name = this.state.alt_name;
        let alt_mobile = this.state.alt_mobile;
        let alt_relation = this.state.alt_relation;
        let hobby = this.state.hobby;
        let profile_img = this.state.profile_img;
        let des_question = this.state.des_question;
        let sendBtn = document.getElementById('sendBtn');
        let applyForm = document.getElementById('applyForm');
        let MobileRegx = /^(?:\+?)?[0-9]*$/;
        let EmailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let NameRegx = /[a-zA-Z]/;

        let StudentNameID=document.getElementById('StudentName');
        let MobileNumberID=document.getElementById('MobileNumber');
        let StudentEmail=document.getElementById('StudentEmail');
        let FB_ID=document.getElementById('FB_ID');
        let PresentAddressID=document.getElementById('PresentAddress');
        let PresentCityID=document.getElementById('PresentCity');
        let PresentPostalID=document.getElementById('PresentPostal');
        let PermanentAddressID=document.getElementById('PermanentAddress');
        let PermanentCityID=document.getElementById('PermanentCity');
        let PermanentPostalID=document.getElementById('PermanentPostal');
        let Nid=document.getElementById('Nid');
        let studentOccupationID=document.getElementById('studentOccupation');
        let VarsityNameID=document.getElementById('VarsityName');
        let VarsityDptID=document.getElementById('VarsityDpt');
        let VarsityIdID=document.getElementById('VarsityId');
        let AltNameID=document.getElementById('AltName');
        let AltMobileID=document.getElementById('AltMobile');
        let AltRelationID=document.getElementById('AltRelation');
        let DesQuestionID=document.getElementById('DesQuestion');

        // Form Validation
        if (gender.length === 0) {
            toast.error('Name prefix is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (student_name.length === 0) {
            toast.error('Full Name is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            StudentNameID.focus();
        } else if (!(NameRegx).test(student_name)) {
            toast.error('Only Letter is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            StudentNameID.focus();
        } else if (student_mobile.length === 0) {
            toast.error('Mobile is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            MobileNumberID.focus();
        } else if (!(MobileRegx).test(student_mobile)) {
            toast.error('Correct Mobile is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            MobileNumberID.focus();
        } else if (student_email.length === 0) {
            toast.error('Email is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            StudentEmail.focus();
        } else if (!(EmailRegx).test(student_email)) {
            toast.error('Correct Email is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            StudentEmail.focus();
        } else if (fb_id.length === 0) {
            toast.error('Facebook ID Name is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            FB_ID.focus();
        } else if (present_address.length === 0) {
            toast.error('Present Address is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PresentAddressID.focus();
        } else if (present_city.length === 0) {
            toast.error('Present City is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PresentCityID.focus();
        } else if (present_postal.length === 0) {
            toast.error('Present Postal Code is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PresentPostalID.focus();
        } else if (permanent_address.length === 0) {
            toast.error('Permanent Address is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PermanentAddressID.focus();
        } else if (permanent_city.length === 0) {
            toast.error('Permanent City is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PermanentCityID.focus();
        } else if (permanent_postal.length === 0) {
            toast.error('Permanent Postal Code is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            PermanentPostalID.focus();
        } else if (nid.length === 0) {
            toast.error('NID/Birth Certificate ID is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            Nid.focus();
        } else if (student_occupation.length === 0) {
            toast.error('Occupation is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            studentOccupationID.focus();
        } else if (birth_date.length === 0) {
            toast.error('Birth Date is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (nationality.length === 0) {
            toast.error('Nationality is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (course.length === 0) {
            toast.error('Select which course you want to enroll!', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if (varsity_name.length === 0) {
            toast.error('College/Varsity Name is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            VarsityNameID.focus();
        } else if (varsity_dpt.length === 0) {
            toast.error('College/Varsity Department is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            VarsityDptID.focus();
        } else if (varsity_id.length === 0) {
            toast.error('College/Varsity ID is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            VarsityIdID.focus();
        } else if (alt_name.length === 0) {
            toast.error('Alternative Name is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            AltNameID.focus();
        } else if (alt_mobile.length === 0) {
            toast.error('Alternative Mobile is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            AltMobileID.focus();
        } else if (alt_relation.length === 0) {
            toast.error('Alternative Relation is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            AltRelationID.focus();
        } else if (des_question.length === 0) {
            toast.error('Description is Required !', {
                position: "bottom-center",
                theme: "colored",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            DesQuestionID.focus();
        } else {
            sendBtn.innerHTML = "Sending...";
            this.setState({isEnable: true});
            let MyFormData = new FormData();
            MyFormData.append("student_name", student_name);
            MyFormData.append("student_mobile", student_mobile);
            MyFormData.append("student_email", student_email);
            MyFormData.append("fb_id", fb_id);
            MyFormData.append("present_address", present_address);
            MyFormData.append("present_city", present_city);
            MyFormData.append("present_postal", present_postal);
            MyFormData.append("permanent_address", permanent_address);
            MyFormData.append("permanent_city", permanent_city);
            MyFormData.append("permanent_postal", permanent_postal);
            MyFormData.append("office_address", office_address);
            MyFormData.append("nid", nid);
            MyFormData.append("student_occupation", student_occupation);
            MyFormData.append("birth_date", birth_date);
            MyFormData.append("nationality", nationality);
            MyFormData.append("course_title", course);
            MyFormData.append("batch_schedule_time", batch_schedule_time);
            MyFormData.append("gender", gender);
            MyFormData.append("varsity_name", varsity_name);
            MyFormData.append("varsity_dpt", varsity_dpt);
            MyFormData.append("varsity_id", varsity_id);
            MyFormData.append("alt_name", alt_name);
            MyFormData.append("alt_mobile", alt_mobile);
            MyFormData.append("alt_relation", alt_relation);
            MyFormData.append("hobby", hobby);
            // MyFormData.append("profile_img", profile_img);
            MyFormData.append("des_question", des_question);
            /* for (const value of MyFormData.values()) {
                console.log(value);
              } */

            let config = {
                headers: {'content-type': 'multipart/form-data'}
            }

             axios.post(ApiUrl.SendApply, MyFormData, config).then((response) => {
               localStorage.setItem("applyData", JSON.stringify(response.data));
                console.log(response);
               // let ApplyResponse=JSON.parse(response.data);

                if (response.data[0].error === false && response.data[0].success === true) {
                    sendBtn.innerHTML = "Apply";
                    this.setState({isEnable: false});

                    let JSONData = response.data[0].form_id;
                    localStorage.setItem("form_id", JSONData);
                    // window.location = "/";
                    console.log(MyFormData);
                } else if(response.data[0].error === true || response.data[0].success === false){
                    let massage = response.data[0].msg;
                    toast.error(massage, {
                        position: "bottom-center",
                        theme: "colored",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        autoClose: 3000,
                    });
                    sendBtn.innerHTML = "Apply";
                    this.setState({isEnable: false});
                }
            }).catch(() => {
                toast.error('Request Fail ! Contact with email abdullah@arenawebsecurity.net', {
                    position: "bottom-center",
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    autoClose: 3000,
                });
                sendBtn.innerHTML = "Apply";
              
                this.setState({isEnable: true});
            })
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Animated animationIn="zoomInUp" animationInDelay={50} isVisible={true}>
                    <Container className="container mt-2 bg-primary">
                        <div className={`${style.applyMainCardPadding} shadow-sm  mb-2`}>
                            <h4 className={`${style.ApplyMainHeadlineText} text-center`}>Student Information Form</h4>
                        </div>
                        <Row className={`${style.applyCardPadding} shadow-sm `}>
                            <Form id="applyForm" onSubmit={this.onFromSubmit}>
                                <ToastContainer className="toastMargin justify-content-center"/>
                                <h4 className={`${style.ApplyHeadlineText}  text-center`}>Personal & Contact Information <sup
                                    className="ApplySup">*</sup></h4>
                                <DjangoCSRFToken/>

                                <div className="form-row">

                                       <div className='bg-danger'>
                                        
                                <div className="form-check form-check-inline col-md-12 mb-3">
                                        <label className="form-check-label placeholderApplyText ml-2 mr-3"
                                               htmlFor="inlineRadio1">Prefix*: </label>
                                        <input onChange={this.genderOnChange} className="form-check-input" type="radio"
                                               name="inlineRadioOptions" id="inlineRadio1" value="male"/>
                                        <label className="form-check-label placeholderApplyText mr-3"
                                               htmlFor="inlineRadio1">Mr.</label>
                                        <input onChange={this.genderOnChange} className="form-check-input ml-3"
                                               type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female"/>
                                        <label className="form-check-label placeholderApplyText mr-3"
                                               htmlFor="inlineRadio2">Miss/Mrs.</label>
                                    </div>

                                     <div className='bg-black'>
                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.student_nameOnChange}
                                               className="form-control placeholderApplyText py-4" id="StudentName"
                                               placeholder="Student Name*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="number" min="0" onChange={this.student_mobileOnChange}
                                               className="form-control placeholderApplyText py-4" id="MobileNumber"
                                               placeholder="Mobile Number*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="email" onChange={this.student_emailOnChange}
                                               className="form-control placeholderApplyText py-4" id="StudentEmail"
                                               placeholder="Valid Email Address*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.fb_idOnChange}
                                               className="form-control placeholderApplyText py-4" id="FB_ID"
                                               placeholder="Facebook Name*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.present_addressOnChange}
                                               className="form-control placeholderApplyText py-4" id="PresentAddress"
                                               placeholder="Present Address*"/>
                                    </div>
                                    </div>
                                       </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" onChange={this.present_cityOnChange}
                                               className="form-control placeholderApplyText py-4" id="PresentCity"
                                               placeholder="City Name*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="number" min="0" onChange={this.present_postalOnChange}
                                               className="form-control placeholderApplyText py-4" id="PresentPostal"
                                               placeholder="Postal Code*"/>
                                    </div>

                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input name="copyAddress" ref="copyAddress" onClick={this.copyAddress}
                                                   className="form-check-input" type="checkbox" value=""
                                                   id="defaultCheck1"/>
                                            <label className="form-check-label placeholderApplyText"
                                                   htmlFor="defaultCheck1">
                                                Same as Present Address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" value={this.state.permanent_address}
                                               onChange={this.permanent_addressOnChange}
                                               className="form-control placeholderApplyText py-4" id="PermanentAddress"
                                               placeholder="Permanent Address*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" value={this.state.permanent_city}
                                               onChange={this.permanent_cityOnChange}
                                               className="form-control placeholderApplyText py-4" id="PermanentCity"
                                               placeholder="City Name*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="number" min="0" value={this.state.permanent_postal}
                                               onChange={this.permanent_postalOnChange}
                                               className="form-control placeholderApplyText py-4" id="PermanentPostal"
                                               placeholder="Postal Code*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.office_addressOnChange}
                                               className="form-control placeholderApplyText py-4" id="OfficeAddress"
                                               placeholder="Office Address (If Applicable)"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="number" min="0" onChange={this.nidOnChange}
                                               className="form-control placeholderApplyText py-4" id="Nid"
                                               placeholder="NID/Birth Certificate No/Passport No*"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.student_occupationOnChange}
                                               className="form-control placeholderApplyText py-4" id="studentOccupation"
                                               placeholder="Occupation*"/>
                                    </div>


                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 p-0 m-0">
                                        <DatePicker
                                            value={this.state.birth_date}
                                            onChange={this.birth_dateOnChange}
                                            className="inputDateP placeholderApplyText RainbowBorder mt-0"
                                            placeholder="Select Date of Birth"
                                        />
                                    </div>


                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 marginNationality">
                                        <select onChange={this.nationalityOnChange}
                                                className="form-select placeholderApplyText py-3 col-md-12"
                                                aria-label="Default select example">
                                            <option className="placeholderApplyText" selected>Nationality*</option>
                                            <option className="placeholderApplyText" value="Bangladeshi">Bangladeshi
                                            </option>
                                            <option className="placeholderApplyText" value="Other">Other Country
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 marginNationality">
                                        <select onChange={this.courseOnChange}
                                                className="form-select placeholderApplyText py-3 col-md-12"
                                                aria-label="Default select example">
                                            <option className="placeholderApplyText" selected>Select Course*</option>
                                            {/* <option className="placeholderApplyText" value="Cyber Security and Ethical Hacking">Cyber Security and Ethical Hacking
                                            </option>
                                            <option className="placeholderApplyText" value="Advanced Python With Django and Freelancing">Advanced Python With Django and Freelancing
                                            </option>
                                            <option className="placeholderApplyText" value="Cyber Security and Advance Python (Duo)">Cyber Security and Advance Python (Duo)
                                            </option> */}
                                            {this.state.courses?.map(course=>
                                                <option key={course?.batch_schedule_time_id} className="placeholderApplyText" value={course?.batch_schedule_time_id} >{course?.batch_schedule_name}
                                                </option>
                                                
                                                )}
                                        </select>
                                    </div>   

                                    {/* <div className="form-check form-check-inline col-md-4">
                                        <label className="form-check-label placeholderApplyText ml-2 mr-3"
                                               htmlFor="inlineRadio1">Gender*: </label>
                                        <input onChange={this.genderOnChange} className="form-check-input" type="radio"
                                               name="inlineRadioOptions" id="inlineRadio1" value="male"/>
                                        <label className="form-check-label placeholderApplyText mr-3"
                                               htmlFor="inlineRadio1">Male</label>
                                        <input onChange={this.genderOnChange} className="form-check-input ml-3"
                                               type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female"/>
                                        <label className="form-check-label placeholderApplyText mr-3"
                                               htmlFor="inlineRadio2">Female</label>
                                    </div>   */}                               
                                </div>

                                <h4 className="ApplyHeadlineText text-center">Educational Background <sup
                                    className="ApplySup">*</sup></h4>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.varsity_nameOnChange}
                                               className="form-control placeholderApplyText py-4" id="VarsityName"
                                               placeholder="School/College/University*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" onChange={this.varsity_dptOnChange}
                                               className="form-control placeholderApplyText py-4" id="VarsityDpt"
                                               placeholder="Department*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" onChange={this.varsity_idOnChange}
                                               className="form-control placeholderApplyText py-4" id="VarsityId"
                                               placeholder="Student ID/Roll*"/>
                                    </div>
                                </div>

                                <h4 className="ApplyHeadlineText text-center">Alternative Contact <sup
                                    className="ApplySup">*</sup></h4>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={this.alt_nameOnChange}
                                               className="form-control placeholderApplyText py-4" id="AltName"
                                               placeholder="Name*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="number" min="0" onChange={this.alt_mobileOnChange}
                                               className="form-control placeholderApplyText py-4" id="AltMobile"
                                               placeholder="Mobile no*"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" onChange={this.alt_relationOnChange}
                                               className="form-control placeholderApplyText py-4" id="AltRelation"
                                               placeholder="Relation with student*"/>
                                    </div>
                                </div>

                                <h4 className="ApplyHeadlineText text-center">Interest/Hobbies</h4>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="text" onChange={this.hobbyOnChange}
                                               className="form-control placeholderApplyText py-4" id=""
                                               placeholder="What are you doing leisure time?"/>
                                    </div>
                                </div>
                                {/* <h4 className="ApplyHeadlineText text-center">Profile Image</h4>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="file" onChange={this.PreviewOnChange}
                                               className="placeholderApplyText ImageFileBG pl-4 py-3" id="DesQuestion"
                                               placeholder="Upload Image*"/>
                                        <img className="mt-3 ml-3" style={{height: "120px", width: "auto"}}
                                             src={this.state.profile_img_preview} alt=""/>
                                    </div>
                                </div> */}
                                <h4 className="ApplyHeadlineText text-center">Why do you learn Cyber Security / Python? <sup
                                    className="ApplySup">*</sup></h4>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <textarea onChange={this.des_questionOnChange}
                                                  className="form-control placeholderApplyText" id=""
                                                  placeholder="Type Your Answer Here...*"/>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button id="sendBtn" type="submit" disabled={this.state.isEnable}
                                            className="btn btn-md apply-btn mt-5">Submit</Button>
                                </div>
                            </Form>
                        </Row>
                    </Container>
                </Animated>
            </Fragment>
        );
    }
}

export default Apply;