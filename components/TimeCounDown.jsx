

import ApiUrl from '@/pages/api/api';
import axios from 'axios';
import React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import style from './timneCountDown.module.css'

const TimeCounDown = () => {
    var [days,setDay]=useState('')
    var [hours,setHouer]=useState('');
    var [munites,setMinutes]=useState('')
    var [seconds,setSeconds]=useState('')
    var [createDate,setCreateDate]=useState({})
    var [dayActive,setDayactive]=useState(0)
    var [admission,setAdmission]=useState('')
    
    useEffect(() => {
        setCreateDate(sessionStorage.getItem('create_at'));;
        setDayactive(sessionStorage.getItem('day_active'));;
        setAdmission(sessionStorage.getItem('admission'));;
        var UserUUID = sessionStorage.getItem('reg_uuid');
                axios.get(ApiUrl.ProfileApi + "?reg_uuid=" + UserUUID).then((response)=>{
                    if (response.status === 200){
                        this.setState({ProfileData: response.data});
                        this.setState({cstmTime:response.data?.bd_time_index})
                    }
               }).catch(()=>{
        
               })
      }, []);
  
     
      var newcreate= new Date(createDate).getTime();
      var activeDay= Number(dayActive);


     if (admission === 'false' && newcreate && activeDay) {
                    var myInterval = setInterval(() => {
                        var active =activeDay;
                        var CreateDate = newcreate + 86400000 * active ;
                        
                        // var TotalDay = RegDate + (DayActive);
                        var today = new Date().getTime();
                        var distance= CreateDate - today ;
                        var timeDiff = distance;
                        // console.log(timeDiff);
                            var seconds = Math.floor( (timeDiff % (1000*60))/(1000));
                            var minutes = Math.floor((timeDiff % (1000*60*60))/(1000*60)) ;
                            // console.log(minutes)
                            var hours = Math.floor((timeDiff % (1000*60*60*24))/(1000*60*60)) ;
                            var days = Math.floor((timeDiff / (1000*60*60*24)));
        
                            if (timeDiff > 0) {
                                                setDay( days);
                                                setHouer(hours );
                                                setMinutes( minutes );
                                                setSeconds( seconds);
                                           
                               }
                             else {
                                clearInterval(myInterval);
                                localStorage.removeItem('img');
                                localStorage.removeItem('u_id');
                                localStorage.removeItem('phn');
                                localStorage.removeItem('gender');
                                localStorage.removeItem('hobby');
                                localStorage.removeItem('dob');
                                localStorage.removeItem('city');
                                localStorage.removeItem('institute');
                                localStorage.removeItem('Fullname');
                                localStorage.removeItem('p_address');
                                localStorage.removeItem('nid');
                                localStorage.removeItem('create_at');
                                localStorage.removeItem('UserEmail');
                                localStorage.removeItem('day_active');
                                sessionStorage.removeItem("create_at");
                                sessionStorage.removeItem('day_active');
                                sessionStorage.removeItem('admission');
                                sessionStorage.removeItem("time");
                              
                                Swal.fire({
                                    title: 'Session Expire ! Please Call The Help Number +88 01324176407',
                                    timer: 10000,
                                    button: false,
                                    timerProgressBar: true,
                                    customClass: 'swal-Title',
                                }).then((result) => {
                                    window.location.href = "/login";
                                })
                            }
                       
                    }, 1000);
                } else {
        
                }
        
        
    return (
        <Fragment>
                 {(() => {
                            if (admission === "false") {
                                return (
                                    <div className={style.timer}>
                                        <span id="countdown" className="timer"> </span>
                                        <div className="container CountContainer mt-5">
                                            <h6 className={`${style.CountTitle} text-center mt-5`}>Admission Time Remaining</h6>
                                            <div className={style.countdown}>
                                                <div>
                                                    <p className="TimeFont TimeDays">{days}</p>
                                                    <h3>Days</h3>
                                                </div>
                                                <div>
                                                    <p className="TimeFont TimeHours">{hours}</p>
                                                    <h3>Hours</h3>
                                                </div>
                                                <div>
                                                    <p className="TimeFont TimeMinutes">{munites}</p>
                                                    <h3>Minutes</h3>
                                                </div>
                                                <div>
                                                    <p className="TimeFont TimeSeconds">{seconds}</p>
                                                    <h3>Seconds</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (admission === "true") {
                                return (
                                    <div>
        
                                    </div>
                                )
                            }
                        })()}
                    </Fragment> 
    );
};

export default TimeCounDown;