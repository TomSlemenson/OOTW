import React from "react";
import { MDBCol, MDBRow, MDBBtn, MDBInput, MDBIcon } from "mdbreact";
import './index.css'

const StepOneOrTwo = React.forwardRef((props, ref) => {

    const { firstNameRef, lastNameRef, emailRef, streetAddressRef, stateRef, zipRef, firstNameFeedbackRef,
        lastNameFeedbackRef, emailFeedbackRef, streetAddressFeedbackRef,
        stateFeedbackRef, zipFeedbackRef } = ref;

    let emailInput
    let checkboxInput

    if (props.activePill === "1") {
        emailInput = <MDBCol md="12" className="mb-4 mt-4">
            <label onClick={props.lableOnClick}
                className={(props.email === "" ? "css_label" : "css_labelInFocus")}
                htmlFor="email">Email</label>
            <input type="text" id="email"
                className="form-control"
                value={props.email}
                onChange={props.handleEmailValidation}
                onFocus={props.styleLabelInFocus}
                onBlur={props.styleLabelOutOfFocus}
                ref={emailRef}
                required />
            <div ref={emailFeedbackRef}>
                <small></small>
                <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
            </div>
        </MDBCol>;

        checkboxInput = <MDBRow className="css_checkboxRow"><MDBInput label="Same shipping and billing information"
            type="checkbox"
            id="checkbox-input"
            checked={props.checkboxChecked}
            onChange={props.checkboxHandler}>
        </MDBInput></MDBRow>

    } else {
        emailInput = "";
        checkboxInput = ""
    }



    return (
        <div>
            <MDBRow>
                <MDBCol md="6" className="mb-4 mt-4">
                    <label onClick={props.lableOnClick}
                        className={(props.firstName === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="firstName">First name</label>
                    <input type="text" id="firstName"
                        className="form-control"
                        value={props.firstName}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        onChange={props.handleFirstNameValidation}
                        ref={firstNameRef}
                        required />
                    <div ref={firstNameFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>

                <MDBCol md="6" className="mb-4 mt-4">
                    <label onClick={props.lableOnClick}
                        className={(props.lastName === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName"
                        className="form-control"
                        value={props.lastName}
                        onChange={props.handleLastNameValidation}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        ref={lastNameRef}
                        required />
                    <div ref={lastNameFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>

                {emailInput}

                <MDBCol md="12" className="mb-4 mt-4">
                    <label onClick={props.lableOnClick}
                        className={(props.streetAddress === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="streetAddress">Street Address</label>
                    <input type="text" id="streetAddress"
                        className="form-control"
                        value={props.streetAddress}
                        onChange={props.handleStreetAddressValidation}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        ref={streetAddressRef}
                        required />
                    <div ref={streetAddressFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="6" md="6" className="mb-4 mt-4">
                    <label onClick={props.lableOnClick}
                        className={(props.state === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="state">State</label>
                    <select className="custom-select d-block w-100"
                        id="state"
                        value={props.state}
                        onChange={props.handleStateValidation}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        ref={stateRef}
                        required>
                        <option></option>
                        <option>California</option>
                    </select>
                    <div ref={stateFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIconSelectInput" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIconSelectInput" icon="check" /></div>
                    </div>
                </MDBCol>

                <MDBCol lg="6" md="6" className="mb-4 mt-4">
                    <label onClick={props.lableOnClick}
                        className={(props.zip === "" ? "css_label" : "css_labelInFocus")}
                        htmlFor="zip">Zip</label>
                    <input type="text"
                        className="form-control"
                        id="zip"
                        value={props.zip}
                        onChange={props.handleZipValidation}
                        onFocus={props.styleLabelInFocus}
                        onBlur={props.styleLabelOutOfFocus}
                        ref={zipRef}
                        required />
                    <div ref={zipFeedbackRef}>
                        <small></small>
                        <div className="d-none"><MDBIcon className="css_errorIcon" icon="times" /></div>
                        <div className="d-none"><MDBIcon className="css_successIcon" icon="check" /></div>
                    </div>

                </MDBCol>
            </MDBRow>

            {checkboxInput}

            <MDBBtn
                style={{
                    backgroundImage: "url('/assets/images/bg.jpg')",
                    border: '0.5px solid grey', borderRadius: '5px',
                    fontWeight: '600'
                }} className="float-left mt-2"
                size="lg"
                onClick={props.backButtomOnClick}
            >Back</MDBBtn>

            <MDBBtn style={{
                backgroundImage: "url('/assets/images/bg.jpg')",
                border: '0.5px solid grey', borderRadius: '5px',
                fontWeight: '600'
            }} className="float-right mt-2"
                size="lg"
                onClick={props.selectNextTab}
            >Next</MDBBtn>
        </div>

    )
}
)

export default StepOneOrTwo;