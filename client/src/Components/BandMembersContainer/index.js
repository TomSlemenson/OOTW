import React, { Component } from "react";
import { MDBCol, MDBRow } from "mdbreact";
import BandMembers from "../../Components/BandMembers/index.js"
import "./index.css";

class BandMembersContainer extends Component {

    state = {
        flipped1: false,
        flipped2: false,
        flipped3: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (<div className="css_BandMemberContainer">
                    <MDBRow className="css_CardRow">
                        <MDBCol md="4" lg="4" className="mt-4">
                            <BandMembers id={1} image={"https://i.imgsafe.org/05/056c85f12b.jpeg"} handleFlipping={this.handleFlipping} flipped1={this.state.flipped1} name={"Zach Jones"} instrument={"Vocals"} about={'iis rem amet repell Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime quae, dolores dicta. Blanditiis rem amet repellat, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat,'} />
                        </MDBCol>
                        <MDBCol md="4" lg="4" className="mt-4">
                            <BandMembers id={2} image={"https://i.imgsafe.org/06/0684ab3414.jpeg"} handleFlipping={this.handleFlipping} flipped1={this.state.flipped2} name={"Tomas Slemenson"} instrument={"Drums"} about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime quae, doloe quae, dolores dicta. Blanditiis rem amet repellat, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, '} />
                        </MDBCol>
                        <MDBCol md="4" lg="4"  className="mt-4">
                            <BandMembers id={3} image={"https://i.postimg.cc/65Bq4YsB/IMG-5255.jpg"} handleFlipping={this.handleFlipping} flipped1={this.state.flipped3} name={"Conrado Pessinato"} instrument={"Guitar"} about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Maxime quae, dolores dicta. Blanditdicta. Blanditiis rem amet repellat,'} />
                        </MDBCol>
                    </MDBRow>
                </div>
         

        );
    }
}

export default BandMembersContainer;