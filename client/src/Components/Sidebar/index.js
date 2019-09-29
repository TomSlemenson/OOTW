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
          bg="/assets/images/bg.jpg"
          triggerOpening={isOpen}
          breakWidth={1300}
        >
          <img alt="OOTW_Logo" src="/assets/images/OOTW_Logo.jpg" width="99.5%" className="border-bottom border-primary pb-2 pt-4" />
          <MDBSideNavNav className="css_NavLinks">
            <Nav.Link href="/home"><MDBIcon icon="user-alt" className="mr-2" />Home</Nav.Link>
            <Nav.Link href="/store"><MDBIcon icon="tags" className="mr-2" />Store</Nav.Link>
            <Nav.Link href="/tour"><MDBIcon far icon="calendar-alt" className="mr-2" />Tour</Nav.Link>
            <Nav.Link href="/live-stream"><MDBIcon icon="video" className="mr-2" />Live Stream</Nav.Link>
            <Nav.Link href="/contact-us"><MDBIcon far icon="envelope-open" className="mr-2" />Contac Us</Nav.Link>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavPage;