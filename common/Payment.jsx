
'use client'
import React, {Component} from 'react';
// import PaymentPage from '../public/Bkash';
import BKash from 'bkash';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
import BkashPayment from '@/components/Bkash';
// import Bkash from './Bkash/Bkash';
const BkashLogo = '/image/bkash.png'
const bkash = '/image/Bkash.jsx'
// import image from '../../../bKash_FEndScript/bkash'

class Payment extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        // script.src = "https://arenawebsecurity.net/static/cdn/bkash.js";
        // script.src = "http://192.168.1.5:8000/static/admin/js/bkash.js";
        // script.src = "https://arenawebsecurity.net/bkash/bkash.js";
        script.src ='/Bkash.js'
        this.div.appendChild(script);
        if(this.div.appendChild(script)){
            console.log("return")
        }

       
        
    }

    render() {
        return (
            <div className="container mt-5" ref={el => (this.div = el)}>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-3"></div>
                    <div
                        className="col-md-6 justify-content-center bKashBackCard card shadow-sm border-0 p-lg-5 pt-3 pb-3">
                        <h6 className="mb-3 text-center white-text">Student pay through bKash</h6>
                        <input className="form-control placeholderAmount amountField py-4" type="number" id="tk"
                               placeholder=" Enter Your Amount" name="tk"/>
                        <button className="bKashBtn justify-content-center mt-2" id="bKash_button">
                            <img className="bKashImg float-center justify-content-center" src={BkashLogo} alt=""/>
                        </button>
                        {}
                    </div>
                    <div className="col-md-3"></div>
                </div>
             {/* <BkashPayment></BkashPayment> */}
            </div>
            
          
        );
    }
}

export default Payment;