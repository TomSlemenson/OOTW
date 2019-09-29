import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import SocialLinks from "../SocialLinks/index.js"
import "./index.css";

class Footer extends Component {

    render() {
        return (<MDBFooter style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
            color="elegant-color-dark border-top border-primary"
            className="font-small">
            <div className="footer-copyright text-center">
                <MDBContainer fluid>
                <a href="/home"><img alt="band_logo" className="css_FooterLogo" src="/assets/images/OOTW_LogoTransparent.png"></img></a><br></br>
                    <SocialLinks />
                </MDBContainer>
                <p className="pt-2 pb-1"> &copy; 2009 Copyright: OOTW.band</p>
            </div>
        </MDBFooter>
        );
    }
}

export default Footer;

