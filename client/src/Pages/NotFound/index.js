import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBIcon } from "mdbreact";
import "./index.css";

class NotFound extends Component {

    render() {
        return (<div className="text-center pt-5" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", height: "900px" }}>
            <MDBContainer>
                <MDBCol className="m-auto pt-4" lg={8}>
                <div className="css_NotFound">
                    <h3 className="pb-2">Sorry.... Page in construction!</h3>
                    <small>OOTW store coming really soon!!!</small><br></br>
                    <MDBIcon className="pt-4" size="2x" icon="skull" ></MDBIcon>
                </div>
                </MDBCol>
            </MDBContainer>
        </div >
        );
    }
}

export default NotFound;