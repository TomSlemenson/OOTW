import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import AudioPlayer from "react-h5-audio-player";
import "./index.css";

class Intro extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (<MDBContainer>
      <div className="css_DiscographySection">
        <MDBRow>
          <MDBCol className="text-center css_Discography">
            <img alt="AlbumArtwork" className="css_imageDiscography" src="/assets/images/Frailty.jpg"/>
            <AudioPlayer
              src="/assets/audio/Frailty.mp3"
              autoPlay={false}
            />
          </MDBCol>
          <MDBCol size={1} className="css_CalInBetweenCards"></MDBCol>
          <MDBCol className="text-center css_Discography">
            <img alt="AlbumArtwork" className="css_imageDiscography" src="/assets/images/Control.jpg"/>
            <AudioPlayer
              src="/assets/audio/Control.mp3"
              title="Control"
              autoPlay={false} />
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
    );
  }
}

export default Intro;