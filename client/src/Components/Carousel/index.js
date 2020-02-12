import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBCarouselCaption } from
  "mdbreact";

const CarouselPage = () => {
  return (<MDBCarousel
    style={{
      Height: '400px',
      fontSize: '30px',
      marginRight: "-0.5px"
    }}
    activeItem={1}
    length={3}
    showControls={false}
    showIndicators={false}
    interval={4500}
    className="z-depth-1">
    <MDBCarouselInner style={{ background: 'white', textAlign: "center" }}>
      <MDBCarouselItem itemId="1">
        <MDBView>
          <img
            className="d-block w-100"
            src="/assets/images/control_1.JPG"
            alt="First slide"
          />
          <MDBMask overlay="" />
          <MDBCarouselCaption>
            {/* <h3 className="h3-responsive">STORE</h3> */}
          </MDBCarouselCaption>
        </MDBView>
      </MDBCarouselItem>
      {/* <MDBCarouselItem itemId="2">
          <MDBView  className="text-center">
            <img
              className="m-auto"
              src="/assets/images/Frailty.jpg"
              height="500px"
              alt="Third slide"
            />
          <MDBMask/>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
          </MDBCarouselCaption>
          </MDBView>
        </MDBCarouselItem> */}
      <MDBCarouselItem itemId="2">
        <MDBView className="text-center">
          <img
            className="m-auto"
            src="/assets/images/OOTW.png"
            width="52%"
            alt="Third slide"
          />
          <MDBMask />
          <MDBCarouselCaption>
            {/* <h3 className="h3-responsive">STORE</h3> */}
          </MDBCarouselCaption>
        </MDBView>
      </MDBCarouselItem>

      <MDBCarouselItem itemId="3">
        <MDBView className="text-center">
          <img
            
            src="/assets/images/web2.png"
            width="125%"
            
            alt="Third slide"
          />
          <MDBMask />
        </MDBView>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  );
}

export default CarouselPage;