import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBIcon } from "mdbreact";
import './index.css'

function ComfirmOrderStep(props) {


    return (
        <div className="d-block my-3">
            <MDBRow>
                <MDBCol lg="12" className="mt-2 mb-3">
                    <MDBCard className="css_summaryCol">
                        <MDBCardBody>
                            <h6 className="mb-4 mt-1 text-center font-weight-bold">YOUR ORDER</h6>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="8">
                                    MDBootstrap UI KIT (jQuery version) - License 6-10 poeple + unlimited projects</MDBCol>
                                <MDBCol sm="4">
                                    $ 2000</MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="8">
                                    Premium support - 2 years</MDBCol>
                                <MDBCol sm="4">
                                    $ 200</MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="8">
                                    MDB Membership - 2 years</MDBCol>
                                <MDBCol sm="4">
                                    $ 100</MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="8">
                                    <strong>Total</strong>
                                </MDBCol>
                                <MDBCol sm="4">
                                    <strong>$ 2300</strong>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol lg="12" className="mt-2 mb-3">
                    <MDBCard className="css_summaryCol">
                        <MDBCardBody>
                            <h6 className="font-weight-bold mt-1">Shipping Address</h6>
                            <p>1755 E Windsor Rd, #298<br></br>Los Angeles, CA 91205</p>
                            <h6 className="font-weight-bold mt-1">Billing Address</h6>
                            <p>1755 E Windsor Rd, #298<br></br>Los Angeles, CA 91205</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBBtn style={{ backgroundImage: "url('/assets/images/bg.jpg')", border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} className="float-left" size="lg" onClick={props.selectPreviousTab}>Back</MDBBtn>
            <MDBBtn style={{ backgroundImage: "url('/assets/images/bg.jpg')", border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} className="float-right" size="lg" onClick={props.selectNextTab}>Confirm</MDBBtn>

        </div>

    )
}

export default ComfirmOrderStep;