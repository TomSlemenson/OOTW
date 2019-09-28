import React, { Component } from "react";
import { MDBCol } from "mdbreact";

class Header extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
        <div>
          <MDBCol size={12} className="text-center p-3">
            <img src="http://drive.google.com/uc?export=view&id=14--8l6sHfC1ovqMey6tBjHRyE5ujYZMq" alt="OOTW_Logo" width="60%"></img>
          </MDBCol>
        </div>
    );
  }
}

export default Header;



