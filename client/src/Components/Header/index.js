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
            <img src="/assets/images/OOTW.png" alt="OOTW_Logo" width="60%"></img>
          </MDBCol>
        </div>
    );
  }
}

export default Header;



