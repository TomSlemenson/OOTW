import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import SocialLinks from "../SocialLinks/index.js"
import "./index.css";

class Footer extends Component {

    render() {
        return (<MDBFooter style={{ backgroundImage: "url('http://drive.google.com/uc?export=view&id=14QRicxmgHk7TCIkVV_a4dO6AatwTq2M2')" }}
            color="elegant-color-dark border-top border-primary"
            className="font-small">
            <div className="footer-copyright text-center">
                <MDBContainer fluid>
                    <img alt="band_logo" className="css_FooterLogo" src="http://drive.google.com/uc?export=view&id=1cPUV8PYn18WFANtUZ1amCqjPu2uNYVtz"></img><br></br>
                    <SocialLinks />
                </MDBContainer>
                <p className="pt-2 pb-1"> &copy; 2009 Copyright: OOTW</p>
            </div>
        </MDBFooter>
        );
    }
}

export default Footer;

