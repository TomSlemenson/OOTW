import React, { Component } from "react";
import Header from "../../Components/Header/index.js"
import Discography from "../../Components/Discography/index.js"
import VideoPlayer from "../../Components/VideoPlayer/index.js"
import "./index.css";

class Home extends Component {

    state = {
        flipped1: false,
        flipped2: false,
        flipped3: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (<div>
           
            <Header/>
            <div className="text-center" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", minHeight:"600px"}}>
                <VideoPlayer />
                <Discography />
            </div>
       
        </div>
        );
    }
}

export default Home;
