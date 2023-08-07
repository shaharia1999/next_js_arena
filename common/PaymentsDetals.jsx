import React, {Component, Fragment} from 'react';
const Bkash = "/image/bkash.png";
const Nagad = "/image/nagad.png";
const DBBL = "/image/dbbl.jpg";
const western = "/image/wester-union-logo.png";
const EBL = "/image/ebl.png";
import {Button, Container, Modal} from "react-bootstrap";
const BkashPayment = '/image/payment/BkashPayment.jpg'
const NagadPayment = '/image/payment/NagadPayment.jpg'
const RoketPayment = '/image/payment/RocketPayment.jpg'
const WesternPayment = '/image/payment/western_union.svg'
const EBLPayment = '/image/payment/ebl_bank.svg'

class PaymentDetails extends Component {
    constructor() {
        super();
        this.state = {
            Payment1: false,
            Payment2: false,
            Payment3: false,
            Payment4: false,
            Payment5: false,
        }
    }

    handleClose1 = () => {
        this.setState({Payment1: false})
    }
    handleOpen1 = () => {
        this.setState({Payment1: true})
    }

    handleClose2 = () => {
        this.setState({Payment2: false})
    }
    handleOpen2 = () => {
        this.setState({Payment2: true})
    }

    handleClose3 = () => {
        this.setState({Payment3: false})
    }
    handleOpen3 = () => {
        this.setState({Payment3: true})
    }

    handleClose4 = () => {
        this.setState({Payment4: false})
    }
    handleOpen4 = () => {
        this.setState({Payment4: true})
    }

    handleClose5 = () => {
        this.setState({Payment5: false})
    }
    handleOpen5 = () => {
        this.setState({Payment5: true})
    }

    render() {
        return (
            <Fragment>
                <div className="pt-3">
                    <Container className="">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="row justify-content-center p-3">
                                    <div className="col-md-12 p-3">
                                        <h6 className="ProfileDes1 text-center">You can pay via online and offline both.
                                            Online process via # Bkash #Nagad #Rocket # Western Union # EBL. Click the
                                            Payment icon & see the payment Process.</h6>
                                    </div>

                                    <div onClick={this.handleOpen1}
                                         className="col-lg-3 col-md-3 col-sm-6 col-6 PaymentCardColor card shadow-sm m-2 border-0">
                                        <img className="paymentImg" src={Bkash} alt=""/>
                                    </div>

                                    <div onClick={this.handleOpen2}
                                         className="col-lg-3 col-md-3 col-sm-5 col-5 PaymentCardColor card shadow-sm m-2 border-0">
                                        <img className="paymentImg" src={Nagad} alt=""/>
                                    </div>

                                    <div onClick={this.handleOpen3}
                                         className="col-lg-3 col-md-3 col-sm-5 col-5 PaymentCardColor card shadow-sm p-2 border-0">
                                        <img className="paymentImg pt-3 pb-3" src={DBBL} alt=""/>
                                    </div>

                                    <div onClick={this.handleOpen4}
                                         className="col-lg-3 col-md-3 col-sm-5 col-5 PaymentCardColor card shadow-sm m-2 border-0">
                                        <img className="paymentImg" src={western} alt=""/>
                                    </div>

                                    <div onClick={this.handleOpen5}
                                         className="col-lg-3 col-md-3 col-sm-5 col-5 PaymentCardColor card shadow-sm m-2 border-0">
                                        <img className="paymentImg" src={EBL} alt=""/>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Container>

                    <Modal size="xl" show={this.state.Payment1} aria-labelledby="contained-modal-title-vcenter"
                           onHide={this.handleClose1}>
                        <Modal.Header className="ModalBorder" closeButton>
                            <h6></h6>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <img className="paymentImg" src={BkashPayment} alt=""/>
                        </Modal.Body>
                        <Modal.Footer className="ModalBorder">
                            <Button className="faqModalBtn btn-sm" variant="danger" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="xl" show={this.state.Payment2} aria-labelledby="contained-modal-title-vcenter"
                           onHide={this.handleClose2}>
                        <Modal.Header className="ModalBorder" closeButton>
                            <h6></h6>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <img className="paymentImg" src={NagadPayment} alt=""/>
                        </Modal.Body>
                        <Modal.Footer className="ModalBorder">
                            <Button className="faqModalBtn btn-sm" variant="danger" onClick={this.handleClose2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal size="xl" show={this.state.Payment3} aria-labelledby="contained-modal-title-vcenter"
                           onHide={this.handleClose3}>
                        <Modal.Header className="ModalBorder" closeButton>
                            <h6></h6>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <img className="paymentImg" src={RoketPayment} alt=""/>
                        </Modal.Body>
                        <Modal.Footer className="ModalBorder">
                            <Button className="faqModalBtn btn-sm" variant="danger" onClick={this.handleClose3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <Modal size="xl" show={this.state.Payment4} aria-labelledby="contained-modal-title-vcenter"
                           onHide={this.handleClose4}>
                        <Modal.Header className="ModalBorder" closeButton>
                            <h6></h6>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <img className="paymentImg" src={WesternPayment} alt=""/>
                        </Modal.Body>
                        <Modal.Footer className="ModalBorder">
                            <Button className="faqModalBtn btn-sm" variant="danger" onClick={this.handleClose4}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <Modal size="xl" show={this.state.Payment5} aria-labelledby="contained-modal-title-vcenter"
                           onHide={this.handleClose5}>
                        <Modal.Header className="ModalBorder" closeButton>
                            <h6></h6>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <img className="paymentImg" src={EBLPayment} alt=""/>
                        </Modal.Body>
                        <Modal.Footer className="ModalBorder">
                            <Button className="faqModalBtn btn-sm" variant="danger" onClick={this.handleClose5}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Fragment>
        );
    }
}

export default PaymentDetails;