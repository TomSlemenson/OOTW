import React from 'react';
import { MDBIcon, MDBSideNavNav, MDBSideNav } from 'mdbreact';
import { Nav } from 'react-bootstrap';
import "./index.css"



class SideNavPage extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <span size="md" color="elegant-color-dark" onClick={this.handleToggle}><MDBIcon icon="bars" size="lg" /></span>
        <MDBSideNav
          className="css_Sidenav"
          color="elegant-color-dark"
          bg="http://drive.google.com/uc?export=view&id=14QRicxmgHk7TCIkVV_a4dO6AatwTq2M2"
          triggerOpening={isOpen}
          breakWidth={1300}
        >
          <img alt="OOTW_Logo" src="http://drive.google.com/uc?export=view&id=1p_ecrNSxcwtq0lc6Vj1rJIgiUnFp7sIM" width="99.5%" className="border-bottom border-primary pb-2 pt-3" />
          <MDBSideNavNav className="css_NavLinks">
            <Nav.Link href="/home"><MDBIcon icon="user-alt" className="mr-2" />Home</Nav.Link>
            <Nav.Link href="/store"><MDBIcon icon="tags" className="mr-2" />Store</Nav.Link>
            <Nav.Link href="/tour"><MDBIcon far icon="calendar-alt" className="mr-2" />Tour</Nav.Link>
            <Nav.Link href="/live-stream"><MDBIcon icon="video" className="mr-2" />Live Stream</Nav.Link>
            {/* <Nav.Link href="/band-members"><MDBIcon icon="users" className="mr-2" />Band Members</Nav.Link> */}
            <Nav.Link href="/contact-us"><MDBIcon far icon="envelope-open" className="mr-2" />Contac Us</Nav.Link>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavPage;