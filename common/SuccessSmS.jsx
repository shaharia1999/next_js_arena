// import React, {Component, Fragment} from 'react';
// import {Col, Container, Row} from "react-bootstrap";
// import Confetti from 'react-confetti';
// import {Link} from "react-router-dom";

// class SuccessSms extends Component {
//     constructor() {
//         super();
//         this.state = {
//             form_id: localStorage.getItem('form_id'),
//         }
//     }
   

//     render()
    
    
//     {
        
//         return (
//             <Fragment>
//                 <Container className="smsPageTop p-2 container">
//                     <Confetti />
//                     <Row className="card SuccessCard shadow-sm border-0 align-content-center">
//                         <Col xl={6} lg={6} sm={12} md={12} className="p-5">
//                             <h6 className="CongratulationText text-center mb-3">Congratulations!</h6>
//                             <div className="SmsBox">
//                                 <h6 className="FormIdText mb-3 text-center">Your Registration ID</h6>
//                                 <h6 className="FormIdText mb-3 text-center">#{this.state.form_id}</h6>
//                                 <h6 className="SuccessMsgText">Your form has been submitted successfully.</h6>
//                                 <h6 className="SuccessMsgText">To complete registration <Link to="/login"> <span className="btn pt-1 pb-1 pay-now-btn">pay now</span> </Link> </h6>
//                                 <h6 className="SuccessMsgText">Your <b className="SuccessMsgBoldText">User ID,
//                                     Password</b> has been send to your email. Please check your <b
//                                     className="SuccessMsgBoldText">mail inbox or spam box</b> for further instruction.</h6>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Fragment>
//         );
//     }
// }

// export default SuccessSms;

import React, { Component } from 'react';
import Confetti from 'react-confetti';

class ResponsiveConfetti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  render() {
    const { windowWidth, windowHeight } = this.state;
    const numberOfPieces = Math.floor(windowWidth / 20); // Adjust as needed

    return (
      <div>
        <h1>Responsive Confetti</h1>
        <Confetti width={windowWidth} height={windowHeight} numberOfPieces={numberOfPieces} />
      </div>
    );
  }
}

export default ResponsiveConfetti;