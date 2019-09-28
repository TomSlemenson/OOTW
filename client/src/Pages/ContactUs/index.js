import React, { Component } from "react";
import ContactForm from "../../Components/ContactForm/index.js"
import "./index.css";

class ContactUs extends Component {

    render() {
        return (<div className="text-center pt-5" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", height: "900px" }}>
           <ContactForm/>
           </div>
        );
    }
}

export default ContactUs;
