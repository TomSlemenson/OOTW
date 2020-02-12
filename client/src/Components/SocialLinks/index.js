import React, { Component } from "react";
import { MDBBtn, MDBIcon, MDBContainer } from "mdbreact";
import "./index.css";

class SocialLinks extends Component {

    render() {
        return <MDBContainer className="p-0">
            <MDBBtn href="https://www.instagram.com/ootwla/" target="blank" size="sm" tag="a" floating social="ins" >
              <MDBIcon className="m-0 p-0" fab icon="instagram" />
            </MDBBtn>
            <MDBBtn href="https://www.facebook.com/ootwla/" target="blank"  size="sm" tag="a" floating social="fb">
              <MDBIcon className="m-0 p-0" fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn href="https://www.youtube.com/watch?v=O2LkciiENX0" target="blank" size="sm" tag="a" floating social="yt">
              <MDBIcon className="m-0 p-0" fab icon="youtube" />
            </MDBBtn>
            <MDBBtn href="https://open.spotify.com/artist/6b9dZOVjCyd3EsTToR9MeE?si=7GGArZgPTauEk7ouVeIT6g" target="blank" size="sm" tag="a" floating social="spo">
              <MDBIcon className="m-0 p-0" fab icon="spotify" />
            </MDBBtn>
            </MDBContainer>
            
    }
}

export default SocialLinks;
