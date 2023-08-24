import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button, Collapse, Modal, Table, Accordion} from "react-bootstrap";
import {Animated} from "react-animated-css";
import {ImLocation} from 'react-icons/im';

import style from './carrer.module.css'
import Link from 'next/link';
import RootLayout from '@/components/Layout';
import axios from 'axios';
import ApiUrl from '../api/api';

class Career extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            open1: false,
            open2: false,
            FaqModal1: false,
            data :[]
        };
    }

    handleClose1 = () => {
        this.setState({FaqModal1: false})
    }
    handleOpen1 = () => {
        this.setState({FaqModal1: true})
    }
   
    componentDidMount() {
            axios.get(ApiUrl.Job).then((response)=>{
             this.setState({ data: response.data })
             console.log(response.data);
    
           }).catch(()=>{
             console.log('data missing');
           })    
    }
    render() {
        const open = this.state.open;
        const open1 = this.state.open1;
        const open2 = this.state.open2;

        console.log(open);
        return (
            <Fragment>
                <Animated animationIn="zoomInUp" animationInDelay="50" isVisible={true}>
                    <Container className={style.carrer}>
                        <div className={`${style.applyMainCardPadding} shadow-sm  mb-2`}>
                            <h4 className={`${style.ApplyMainHeadlineText} text-center`}>Career</h4>
                        </div>
                        <div className="des-card shadow-sm">
                            <Row className="row">
                            {
                                this.state.data.map(newData=>
                                <div key={newData.id} >
                                          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="lg-p-5">
                                   
                                    <div className={`${style.CareerCard} p-3 mt-4 `} style={{width: 'auto'}}>
                                   
                               
                                      
                                    </div>
                                    <Accordion defaultActiveKey="0">
  
                                    <Accordion.Item eventKey="1">
                                    <Button
                                            className={`${style.careerJobMainTitle} ${style.careerBtn} btn-block careerJobMainTitle`}
                                            // onClick={() => this.setState({open: !open})}
                                            aria-controls="example0"
                                            aria-expanded={open}>
                                            <h6 className="float-left">Assistant Marketing Manager</h6>
                                        </Button>
                                        <Accordion.Header>
                                        
                                        <div className={`${style.job_div} row pt-3 `}>
                           
                                            <div className='col d-flex '>
                                            <div><ImLocation className={style.location}></ImLocation></div>
                                            <span className='ms-2 font-bold'>Dhaka</span>
                                      
                                            </div>
                                            <div className='col' dangerouslySetInnerHTML={{ __html:newData.nature
                                              }}>
                                              
                                            </div>
                                            <div className='col text-end '><p className="FooterInfoLinkText" ><button className={`${style.button} 'float-right button-cerriar'`} onClick={()=>{this.setState({ open: !open })}}  >Vew details</button></p>
                                            
                                            </div>
                                        </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        < >
                                            <div className={style.jobdetails}>
                                                <h1 className={style.careerBodyTitle}>Job Context</h1>
                                                <h6 className={style.careerBodySubTitle} dangerouslySetInnerHTML={{ __html:newData.context}}>
                                                                                </h6>
                                                <h1 className={style.careerBodyTitle} >Vacancy</h1>
                                                <h6 className={style.careerBodySubTitle} dangerouslySetInnerHTML={{ __html:newData.vacancy}}></h6>

                                                <h1 className={style.careerBodyTitle}>Job Responsibility</h1>
                                             
                                                <div dangerouslySetInnerHTML={{ __html:newData.responsibility}} className={style.res}>

                                                </div>
                                                <h1 className={style.careerBodyTitle}>Job Nature</h1>
                                                <h6 className={style.careerBodySubTitle} dangerouslySetInnerHTML={{ __html:newData.nature
                                                    }}></h6>

                                                <h1 className={style.careerBodyTitle}>Educational Requirements</h1>
                                                <h6 className={style.careerBodySubTitle} >
                                                    <div className={style.res} dangerouslySetInnerHTML={{ __html:newData.educational_requirements

                                            }}></div>
                                                </h6>

                                                <h1 className={style.careerBodyTitle}>Experience Requirements</h1>
                                                <div className={style.res} dangerouslySetInnerHTML={{ __html:newData.experience_requirements

                                            }}>
                                                </div>

                                                <h1 className={style.careerBodyTitle}>Additional Requirements</h1>
                                               <div className={style.res} dangerouslySetInnerHTML={{ __html:newData.additional_requirements

                                            }}></div>

                                                <h1 className={style.careerBodyTitle}> Job Location</h1>
                                                <div className={style.careerBodySubTitle}  dangerouslySetInnerHTML={{ __html:newData.location

                                                   }}></div>

                                                <h1 className={style.careerBodyTitle}> Salary Range</h1>
                                                <div className={style.careerBodySubTitle}  dangerouslySetInnerHTML={{ __html:newData.salary_range
                                                            }}></div>

                                                <h1 className={style.careerBodyTitle} > Other Benefits</h1> 
                                            <div className={style.res} dangerouslySetInnerHTML={{ __html:newData.other_benefits
                                            }}></div>

                                                <Modal size="md" show={this.state.FaqModal1}
                                                       aria-labelledby="contained-modal-title-vcenter" centered
                                                       onHide={this.handleClose}>
                                                    <Modal.Body className="p-5">
                                                        <p className="CarrerModalTitle"> Deadline is Over</p>
                                                        <Button className="faqModalBtn btn-sm float-right"
                                                                variant="danger" onClick={this.handleClose1}>
                                                            Close
                                                        </Button>
                                                    </Modal.Body>
                                                </Modal>

                                            </div>
                                        </>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>


                                    


                                   
                                          </Col>
                                            
                                    </div>
                                     )
                                 }
                              
                            </Row>
                        </div>
                    </Container>
                </Animated>
            </Fragment>
        );
    }
}

export default Career;
Career.getLayout=(page)=>{
    return  (<RootLayout>{page}</RootLayout>)
}
