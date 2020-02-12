import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";
import BioCard from "../BioCard/index.js";


class CollapsePage extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <div style={{ minHeight:"50px" , margin:"40px"}}>
    <MDBBtn
      color="dark"
      onClick={this.toggleCollapse("basicCollapse")}
      style={{ marginBottom: "1rem", fontWeight: "bold" }}
    >
      Bio
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={true}>
            <BioCard/>

        </MDBCollapse>
        </div>
    );
  }
}

export default CollapsePage;