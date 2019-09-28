import React, { Component } from "react";
import Calendar from "../../Components/Calendar/index.js"
import "./index.css";

class Tour extends Component {

    render() {
        return (<div className="text-center pt-5 css_TourPageHight" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)" }}>
            <Calendar />
        </div>
        );
    }
}

export default Tour;