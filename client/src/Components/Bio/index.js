import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBIcon} from "mdbreact";
import BioCard from "../BioCard/index.js";


class CollapsePage extends Component {
state = {
  collapseID:  "basicCollapse",
  closeOrOpen: "",

}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {

  if (this.state.collapseID == "basicCollapse"){
    this.state.closeOrOpen = "(Read less)"
  } else {
    this.state.closeOrOpen = "(Open section)"
  }

  return (
      <div style={{ minHeight:"50px" , margin:"40px 40px 10px 40px"}}>
    <MDBBtn
      color="dark"
      onClick={this.toggleCollapse("basicCollapse")}
      style={{ marginBottom: "0", fontWeight: "bold"}}
    >
      About <br></br><small>{this.state.closeOrOpen}</small>
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
            <BioCard/>
        </MDBCollapse>
        </div>
    );
  }
}

export default CollapsePage;