import React, { Component } from "react";
import ContactForm from "../../Components/ContactForm/index.js"
import "./index.css";

class ContactUs extends Component {

    render() {
        return (<div className="text-center pt-5 css_ContactPage">
           <ContactForm/>
           </div>
        );
    }
}

export default ContactUs;
