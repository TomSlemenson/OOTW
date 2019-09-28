import React, { Component } from "react";
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "../Sidebar/index.js"
import "./index.css"

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar style={{ backgroundImage: "url('http://drive.google.com/uc?export=view&id=14QRicxmgHk7TCIkVV_a4dO6AatwTq2M2')" }}
          color="elegant-color-dark border-bottom border-primary"
          dark
          expand="xs">
          <MDBNavbarBrand>
            <Sidebar />
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            <img alt="band_logo" className="css_NavbarLogo" src="http://drive.google.com/uc?export=view&id=1cPUV8PYn18WFANtUZ1amCqjPu2uNYVtz"></img>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBBtn href="https://www.instagram.com/ootwla/" target="blank" size="sm" tag="a" floating social="ins" >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn href="https://www.facebook.com/ootwla/" target="blank"  size="sm" tag="a" floating social="fb">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn href="https://www.youtube.com/watch?v=O2LkciiENX0" target="blank" size="sm" tag="a" floating social="yt">
              <MDBIcon fab icon="youtube" />
            </MDBBtn>
            <MDBBtn href="https://open.spotify.com/artist/6b9dZOVjCyd3EsTToR9MeE?si=7GGArZgPTauEk7ouVeIT6g" target="blank" size="sm" tag="a" floating social="spo">
              <MDBIcon fab icon="spotify" />
            </MDBBtn>
          </MDBNavbarNav>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;