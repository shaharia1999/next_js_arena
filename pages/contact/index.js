import RootLayout from '@/components/Layout';
import React from 'react';
import style from './Contact.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data);
        axios.post("http://192.168.0.119:8000/contact/",data)
        .then(function (response) {
            e.target.reset();
        if( response.status === 200){
            Swal.fire({
                title: 'Submit Success',
                timer: 10000,
                button: false,
                timerProgressBar: true,
                customClass: 'swal-Title',
            })
        }

          
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }
    return (
        <div className='container'>
            <div className={style.contact_container}>
                    <div className={`${style.map} lg:w-50`}>
                    <iframe className='border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4921053577773!2d90.42471487599451!3d23.76548448819581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1685432813512!5m2!1sen!2sbd" title='map' height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={`${style.contact_wrapper} lg:w-50`}>
                        <div>
                            <h5 className={`${style.service_title} mb-0 mt-5 md:mt-0`}>Contact Us</h5>
                            <div className={style.service_line}></div>
                            <p className={`${style.contact_slogan} mt-4`}>Please conatct with us for any services.<br /> We would love to hear you out.</p>
                        </div>
                        <form className={style.contact_form} onSubmit={HandleSubmit}>
                        <span>Send Message</span>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">User Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Email</label>
                                <input type="email" name="email" required/>
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Number</label>
                                <input type="number" name="number" required />
                            </div>
                            <div className={`${ style.input_group} d-flex`}>
                                <label for="">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' required ></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type="Submit" name="" value="Send" className={style.submit_btn} />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Contact;


Contact .getLayout=(page)=>{
    return <RootLayout>{page}</RootLayout>
}
