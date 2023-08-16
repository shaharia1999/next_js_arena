// import axios from 'axios';
// import React, { Component, Fragment } from 'react';
// import Swal from 'sweetalert2';
// import ApiUrl from '../../api/ApiURL';

// class MyTimeCount extends Component {
//     constructor() 
   
//     {
//         super();
//         this.state = {
//             days: "...",
//             hours: "...",
//             minutes: "...",
//             seconds: "...",
//             CreateDate: new Date(sessionStorage.getItem('create_at')).getTime() ,
//             // CreateDate: sessionStorage.getItem('create_at'),
//             time:new Date( sessionStorage.getItem('time')).getTime(),
//             dayActive: Number(sessionStorage.getItem('day_active')),
//             Admission: sessionStorage.getItem('admission'),
//             today: "",
//             cstmTime:"",
//         }
//     }
   
    

//     componentDidMount() {
       
//         var UserUUID = localStorage.getItem('reg_uuid');
//         axios.get(ApiUrl.ProfileApi + "?reg_uuid=" + UserUUID).then((response)=>{
//             if (response.status === 200){
//                 this.setState({ProfileData: response.data});
//                 this.setState({cstmTime:response.data?.bd_time_index})
//             }
//        }).catch(()=>{

//        })


//       

//     render() {
//         return (
//             <Fragment>

//                 {(() => {
//                     if (this.state.Admission === "false") {
//                         return (
//                             <div>
//                                 <span id="countdown" className="timer"> </span>
//                                 <div className="container CountContainer mt-5">
//                                     <h6 className="CountTitle">Admission Time Remaining</h6>
//                                     <div className="countdown">
//                                         <div>
//                                             <p className="TimeFont TimeDays">{this.state.days}</p>
//                                             <h3>Days</h3>
//                                         </div>
//                                         <div>
//                                             <p className="TimeFont TimeHours">{this.state.hours}</p>
//                                             <h3>Hours</h3>
//                                         </div>
//                                         <div>
//                                             <p className="TimeFont TimeMinutes">{this.state.minutes}</p>
//                                             <h3>Minutes</h3>
//                                         </div>
//                                         <div>
//                                             <p className="TimeFont TimeSeconds">{this.state.seconds}</p>
//                                             <h3>Seconds</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     } else if (this.state.Admission === "true") {
//                         return (
//                             <div>

//                             </div>
//                         )
//                     }
//                 })()}
//             </Fragment>
//         );
//     }
// }

// export default MyTimeCount;

import ApiUrl from '@/pages/api/api';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TimeCounDown = () => {

    // days: "...",
    //             hours: "...",
    //             minutes: "...",
    //             seconds: "...",
    //             CreateDate: new Date(sessionStorage.getItem('create_at')).getTime() ,
    //             // CreateDate: sessionStorage.getItem('create_at'),
    //             time:new Date( sessionStorage.getItem('time')).getTime(),
    //             dayActive: Number(sessionStorage.getItem('day_active')),
    //             Admission: sessionStorage.getItem('admission'),
    //             today: "",
    //             cstmTime:"",

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
    console.log(createDate,dayActive);
     
      var newcreate= new Date(createDate).getTime();
      var activeDay= Number(dayActive);
      console.log(newcreate,activeDay);

    //  if (admission === 'false' && newcreate && activeDay) {
                    
    //                 var myInterval = setInterval(() => {
    //                     var active =activeDay;
    //                     var CreateDate = newcreate + 86400000 * active ;
    //                     console.log(CreateDate);
                        
    //                     // var TotalDay = RegDate + (DayActive);
    //                     var today = new Date().getTime();
    //                     var distance= CreateDate - today ;
    //                     var timeDiff = distance;
    //                     // console.log(timeDiff);
    //                         var seconds = Math.floor( (timeDiff % (1000*60))/(1000));
    //                         var minutes = Math.floor((timeDiff % (1000*60*60))/(1000*60)) ;
    //                         // console.log(minutes)
    //                         var hours = Math.floor((timeDiff % (1000*60*60*24))/(1000*60*60)) ;
    //                         var days = Math.floor((timeDiff / (1000*60*60*24)));
        
    //                         if (timeDiff > 0) {
    //                                             this.setState({ days});
    //                                             this.setState({ hours });
    //                                             this.setState({ minutes });
    //                                             this.setState({ seconds});
    //                            }
    //                          else {
    //                             clearInterval(myInterval);
    //                             localStorage.removeItem('img');
    //                             localStorage.removeItem('u_id');
    //                             localStorage.removeItem('phn');
    //                             localStorage.removeItem('gender');
    //                             localStorage.removeItem('hobby');
    //                             localStorage.removeItem('dob');
    //                             localStorage.removeItem('city');
    //                             localStorage.removeItem('institute');
    //                             localStorage.removeItem('Fullname');
    //                             localStorage.removeItem('p_address');
    //                             localStorage.removeItem('nid');
    //                             localStorage.removeItem('create_at');
    //                             localStorage.removeItem('UserEmail');
    //                             localStorage.removeItem('day_active');
    //                             sessionStorage.removeItem("create_at");
    //                             sessionStorage.removeItem('day_active');
    //                             sessionStorage.removeItem('admission');
    //                             sessionStorage.removeItem("time");
                              
    //                             Swal.fire({
    //                                 title: 'Session Expire ! Please Call The Help Number +88 01324176407',
    //                                 timer: 10000,
    //                                 button: false,
    //                                 timerProgressBar: true,
    //                                 customClass: 'swal-Title',
    //                             }).then((result) => {
    //                                 window.location.href = "/login";
    //                             })
    //                         }
                       
    //                 }, 1000);
    //             } else {
        
    //             }
        
        
    return (
        <div>
            
        </div>
    );
};

export default TimeCounDown;