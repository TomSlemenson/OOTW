import React from "react";
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBRotatingCard, MDBIcon } from "mdbreact";
import "./index.css";

const FlippingCardPage= (props) => {

  
        return (
            <MDBContainer>
                <MDBRow between>
                    <MDBCol className="css_BandMamberCard_Container">
                        <MDBRotatingCard flipped={props.flipped1} className="text-center p-4">
                            <MDBCard className="face front pb-3 css_BandMamberCard" style={{backgroundImage: "url('http://drive.google.com/uc?export=view&id=14QRicxmgHk7TCIkVV_a4dO6AatwTq2M2')"}}>
                                <img className="card-img-top css_image" src={props.image} alt="Band-Mamber" />
                                <h4 className="font-weight-bold mb-3 mt-3 text-light">{props.name}<br></br><span>{props.instrument}</span></h4>
                                <a href="#!" className="rotate-btn text-light" data-card={props.card} onClick={props.handleFlipping(props.id)}>
                                    <MDBIcon icon="redo" /> About</a>
                            </MDBCard>
                            <MDBCard className="face back css_BandMamberCard" style={{backgroundImage: "http://drive.google.com/uc?export=view&id=14QRicxmgHk7TCIkVV_a4dO6AatwTq2M2')"}}>
                                <MDBCardBody>

                                    <div className="card-img-top css_AboutText">
                                    <h6 className="text-light">About</h6>
                                    <hr />
                                    <p className="text-light">{props.about}</p>
                                    </div>
                                    <MDBBtn className="mb-4 mt-3" size="sm" tag="a" floating social="ins" >
                                        <MDBIcon fab icon="instagram" />
                                    </MDBBtn><br></br>
                                    <a href="#!" className="rotate-btn text-light mb-4" data-card={props.card} onClick={props.handleFlipping(props.id)}>
                                        <MDBIcon icon="undo" /> Go Back</a><br></br>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBRotatingCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
}

export default FlippingCardPage;