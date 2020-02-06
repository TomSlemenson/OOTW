import React from "react";
import { MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdbreact";
import './index.css'


const PaymentStep = React.forwardRef((props, ref) => {

    const { cardNumberFeedbackRef, cardNumberRef, cardCVVFeedbackRef, cardCVVRef, cardExpirationFeedbackRef,
        cardExpirationRef, cardNameFeedbackRef, cardNameRef } = ref;

    return (
        <div className="d-block my-3">
            <MDBRow>
                <MDBCol md="12" className="mb-3">
                    <label onClick={props.lableOnClick}
                        className={(props.cardName === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="cardName">Name on card</label>
                    <input type="text"
                        className="form-control"
                        id="cardName"
                        value={props.cardName}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        onChange={props.handleCardNameValidation}
                        ref={cardNameRef}
                        required />
                    <div ref={cardNameFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>
                <MDBCol md="12" className="mb-3">
                    <label onClick={props.lableOnClick}
                        className={(props.cardNumber === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="cardNumber">Credit card number</label>
                    <input type="text"
                        value={props.cardNumber}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        onChange={props.handleCardNumberValidation}
                        ref={cardNumberRef}
                        className="form-control"
                        id="cardNumber"
                        required />
                    <div ref={cardNumberFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6" className="mb-3">
                    <label onClick={props.lableOnClick}
                        className={(props.cardExpiration === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="cardExpiration">Expiration</label>
                    <input type="text"
                        value={props.cardExpiration}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        onChange={props.handleCardExpirationValidation}
                        ref={cardExpirationRef}
                        className="form-control"
                        id="cardExpiration"
                        required />
                    <div ref={cardExpirationFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                    <label onClick={props.lableOnClick}
                        className={(props.cardCVV === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="cardCVV">CVV</label>
                    <input type="text"
                        value={props.cardCVV}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        onChange={props.handleCardCVVValidation}
                        ref={cardCVVRef}
                        className="form-control"
                        id="cardCVV"
                        required />
                    <div ref={cardCVVFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>
            </MDBRow>
            <br className="mb-4"></br>
            <MDBBtn style={{ backgroundImage: "url('/assets/images/bg.jpg')", border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600', marginLeft: "0px", marginRight: "0px" }} className="float-left" size="lg" onClick={props.selectPreviousTab}>Back</MDBBtn>
            <MDBBtn style={{ backgroundImage: "url('/assets/images/bg.jpg')", border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600', marginLeft: "0px", marginRight: "0px", padding: "16px 30px" }} className="float-right" size="lg" onClick={props.selectNextTab}>Place order</MDBBtn>
        </div>

    )
}
)

export default PaymentStep;