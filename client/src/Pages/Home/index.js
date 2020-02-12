import React, { Component } from "react";
import Carousel from "../../Components/Carousel/index.js"
import Discography from "../../Components/Discography/index.js"
import VideoPlayer from "../../Components/VideoPlayer/index.js"
import Bio from "../../Components/Bio/index.js"
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
           
            <Carousel/>
            <div className="text-center" style={{ backgroundImage: "linear-gradient(to right, #343a40, black)", minHeight:"550px"}}>
                <Bio/>
                <VideoPlayer />
                {/* <div style={{ margin:"40px"}}> */}
              
               {/* </div> */}
                <Discography />
                {/* <div><h1 className="font font2">EXPERIMENT ON ME <br></br><span className="font1">HALSEY</span></h1></div> */}
            </div>
       
        </div>
        );
    }
}

export default Home;
