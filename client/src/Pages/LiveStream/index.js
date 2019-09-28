import React, { Component } from "react";
import "./index.css";

class LiveStream extends Component {

    render() {
        return (<div className="text-center pt-5 pb-5" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", minHeight: "700px" }}>
            <p className="text-light p-2">Follow us on instagram for information about our next live stream.</p>
            <div className="embed-responsive embed-responsive-16by9 css_LiveStream">
                <iframe title="liveStream" className="embed-responsive-item" src="https://iframe.dacast.com/b/139206/c/509112" allowfullscreen={true}></iframe>
            </div>
        </div>
        );
    }
}

export default LiveStream;
