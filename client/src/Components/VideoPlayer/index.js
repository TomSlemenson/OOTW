import React, { Component } from 'react'
import { MDBCol, MDBRow } from "mdbreact";
import "./index.css"



class VideoPlayer extends Component {

  render() {
    return <div className="css_VideoContainer">
      <MDBRow className="css_VideoRow">
        <MDBCol>
            <div className="embed-responsive embed-responsive-16by9 css_VideoBorder">
              <iframe title="MusicVideo" className="embed-responsive-item" src="./assets/video/frailty_video.mp4" allowFullScreen={true}></iframe>
            </div>
           

        </MDBCol>
      </MDBRow>
    </div>
  }
}


export default VideoPlayer;
