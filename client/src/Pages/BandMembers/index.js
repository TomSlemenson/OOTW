import React, { Component } from "react";
import BandMembersContainer from "../../Components/BandMembersContainer/index.js"
import "./index.css";

class ContactUs extends Component {

    render() {
        return (<div className="text-center pt-5" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", height: "1000px" }}>
           <BandMembersContainer/>
           </div>
        );
    }
}

export default ContactUs;

