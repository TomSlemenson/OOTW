import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import SocialLinks from "../SocialLinks/index.js"
import "./index.css";


const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol >
        <MDBCard reverse >
          {/* <MDBCardImage cascade style={{ width:"80%" }} src="/assets/images/theband.jpg"  /> */}
          <MDBCardBody cascade className="text-center  font-weight-bold bg-dark">
            {/* <MDBCardTitle>About Out Of The Woods</MDBCardTitle> */}
           
            <MDBCardText className="text-white text-left css_mxheight" style={{fontFamily:"monaco", fontWeight: "bold"}}>
                <p>Out of the Woods is a modern, aggressive rock band based out of Los Angeles. They’re new to the scene, but they bring a calm confidence to the business of writing huge songs and shaking the foundations of Hollywood’s most storied music venues. Tomas Slemenson plays drums and is a former Virgin Records recording artist who has shared the stage with the likes of 21 Pilots and Drake. Conrado Pesinado plays guitar. He’s already a young veteran of the stage and studio and has worked with a diverse list of renowned artists such as Zayn Malik and Graham Bonnet. When they discovered vocalist Zach Jones, they knew the lineup was complete. As a frontman, Jones brings a truly signature vocal style and piercing lyricism which is sure to help the band forge their own path in the music industry.</p>
                <p>OOTW, as the group is often known, bring a larger and more dynamic presence to stage than their compact lineup would suggest. Zach Jones cuts an enigmatic figure offstage quiet and covered in tattoos only to step onstage and engage the audience in an electric tour de force. Tomas exudes showmanship and precision while playing gigantic beats and seamlessly incorporating drum machines and sequencers to fill out the band’s modern sound. Conrado is a force of nature on guitar, equally comfortable playing deep, anthemic riffs or teasing out haunting, highly-technical leads.</p>
                <p className="mb-4">Their first two singles, Frailty and Control are available on all platforms, and an EP is on the way soon.</p>

</MDBCardText>
<SocialLinks/>            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;