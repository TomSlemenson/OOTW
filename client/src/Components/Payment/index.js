import React, { Component } from "react";
import {
    MDBModal, MDBCol, MDBRow, MDBCardBody, MDBBtn, MDBNav,
    MDBNavItem, MDBTabPane, MDBTabContent, MDBModalBody
} from "mdbreact";
import {
    validateStepOneOrTwo, validateFirstName, validateLastName, validateStreetAddress,
    validateEmail, validateZip, validateState
} from '../ShippingBillingStep/validateStepOneOrTwo'
import {
    validatePaymentStep, validateCardNumber, validateCardExpiration, validateCardCVV,
    validateCardName
} from '../PaymentStep/ValidationPaymentStep.js'
import { ToastContainer, toast } from 'react-toastify';
import ShippingAndBillingStep from '../ShippingBillingStep/index.js'
import ComfirmOrderStep from '../ComfirmOrderStep/index.js'
import PaymentStep from '../PaymentStep/index.js'
import './index.css'


class PaymentFlow extends Component {
    constructor(props) {
        super(props)
        this.firstNameRef = React.createRef()
        this.lastNameRef = React.createRef()
        this.streetAddressRef = React.createRef()
        this.emailRef = React.createRef()
        this.stateRef = React.createRef()
        this.zipRef = React.createRef()
        this.firstNameFeedbackRef = React.createRef()
        this.lastNameFeedbackRef = React.createRef()
        this.streetAddressFeedbackRef = React.createRef()
        this.emailFeedbackRef = React.createRef()
        this.stateFeedbackRef = React.createRef()
        this.zipFeedbackRef = React.createRef()

        this.firstNameBillingRef = React.createRef()
        this.lastNameBillingRef = React.createRef()
        this.streetAddressBillingRef = React.createRef()
        this.emailBillingRef = React.createRef()
        this.stateBillingRef = React.createRef()
        this.zipBillingRef = React.createRef()
        this.firstNameFeedbackBillingRef = React.createRef()
        this.lastNameFeedbackBillingRef = React.createRef()
        this.streetAddressFeedbackBillingRef = React.createRef()
        this.emailFeedbackBillingRef = React.createRef()
        this.stateFeedbackBillingRef = React.createRef()
        this.zipFeedbackBillingRef = React.createRef()

        this.cardNumberRef = React.createRef()
        this.cardExpirationRef = React.createRef()
        this.cardCVVRef = React.createRef()
        this.cardNameRef = React.createRef()
        this.cardNumberFeedbackRef = React.createRef()
        this.cardExpirationFeedbackRef = React.createRef()
        this.cardCVVFeedbackRef = React.createRef()
        this.cardNameFeedbackRef = React.createRef()

        this.state = {
            activePill: "1",
            checkboxChecked: false,
            paymentSuccessfull: false,
            value: "",
            firstName: "",
            lastName: "",
            streetAddress: "",
            email: "",
            state: "",
            zip: "",

            firstNameBilling: "",
            lastNameBilling: "",
            streetAddressBilling: "",
            emailBilling: "",
            stateBilling: "",
            zipBilling: "",

            cardName: "",
            cardCVV: "",
            cardExpiration: "",
            cardNumber: "",

            stepsArrey: ["1"],
            // reEditedForm: false,

        }
        this.handleFirstNameValidation = this.handleFirstNameValidation.bind(this);
        this.handleLastNameValidation = this.handleLastNameValidation.bind(this);
        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.handleStreetAddressValidation = this.handleStreetAddressValidation.bind(this);
        this.handleStateValidation = this.handleStateValidation.bind(this);
        this.handleZipValidation = this.handleZipValidation.bind(this);

        this.handleCardNumberValidation = this.handleCardNumberValidation.bind(this);
        this.handleCardExpirationValidation = this.handleCardExpirationValidation.bind(this);
        this.handleCardCVVValidation = this.handleCardCVVValidation.bind(this);
        this.handleCardNameValidation = this.handleCardNameValidation.bind(this);

        this.selectNextTab = this.selectNextTab.bind(this);
    }


    // VALIDATION PAYMENT
    handleCardNumberValidation() {
        let cardNumberData = {
            cardNumberVal: this.cardNumberRef.current.value,
            cardNumberFeedback: this.cardNumberFeedbackRef,
            cardNumber: this.cardNumberRef
        }
        this.setState({ 'cardNumber': cardNumberData.cardNumberVal })
        validateCardNumber(cardNumberData)
    }

    handleCardExpirationValidation() {

        let cardExpirationData = {
            cardExpirationVal: this.cardExpirationRef.current.value,
            cardExpirationFeedback: this.cardExpirationFeedbackRef,
            cardExpiration: this.cardExpirationRef
        }
        this.setState({ 'cardExpiration': cardExpirationData.cardExpirationVal })
        validateCardExpiration(cardExpirationData)
    }

    handleCardCVVValidation() {

        let cardCVVData = {
            cardCVVVal: this.cardCVVRef.current.value,
            cardCVVFeedback: this.cardCVVFeedbackRef,
            cardCVV: this.cardCVVRef
        }

        this.setState({ 'cardCVV': cardCVVData.cardCVVVal })
        validateCardCVV(cardCVVData)
    }

    handleCardNameValidation() {
        let cardNameData = {
            cardNameVal: this.cardNameRef.current.value,
            cardNameFeedback: this.cardNameFeedbackRef,
            cardName: this.cardNameRef
        }
        this.setState({ 'cardName': cardNameData.cardNameVal })
        validateCardName(cardNameData)
    }

    // VALIDATION SHIPPING AND BILLING
    handleFirstNameValidation() {

        let firstNameData = {}

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }


        if (this.state.activePill === "1") {

            firstNameData = {
                firstNameVal: this.firstNameRef.current.value,
                firstNameFeedback: this.firstNameFeedbackRef,
                firstName: this.firstNameRef
            }
            this.setState({ 'firstName': firstNameData.firstNameVal });

            if (this.firstNameRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
                && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
                && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
                && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5
                && this.lastNameBillingRef.current.value.length >= 5 && this.firstNameBillingRef.current.value.length >= 5
                && this.streetAddressBillingRef.current.value.length >= 5 && this.stateBillingRef.current.value.length >= 5
                && this.zipBillingRef.current.value.length >= 5) {
                this.state.stepsArrey.push("3")
            }

        } else {

            firstNameData = {
                firstNameVal: this.firstNameBillingRef.current.value,
                firstNameFeedback: this.firstNameFeedbackBillingRef,
                firstName: this.firstNameBillingRef
            }
            this.setState({ 'firstNameBilling': firstNameData.firstNameVal });


            if (this.firstNameBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            }

            else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {
                this.state.stepsArrey.push("3")
            }

        }
        console.log(this.state.stepsArrey)

        validateFirstName(firstNameData)


    }

    handleLastNameValidation() {
        let lastNameData = {}

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }

        if (this.state.activePill === "1") {

            lastNameData = {
                lastNameVal: this.lastNameRef.current.value,
                lastNameFeedback: this.lastNameFeedbackRef,
                lastName: this.lastNameRef
            }
            this.setState({ 'lastName': lastNameData.lastNameVal });

            if (this.lastNameRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
                && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
                && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
                && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5
                && this.lastNameBillingRef.current.value.length >= 5 && this.firstNameBillingRef.current.value.length >= 5
                && this.streetAddressBillingRef.current.value.length >= 5 && this.stateBillingRef.current.value.length >= 5
                && this.zipBillingRef.current.value.length >= 5) {
                this.state.stepsArrey.push("3")
            }

            // if (this.state.stepsArrey.includes("3")
            //     && this.lastNameRef.current.value.length >= 6 && this.firstNameRef.current.value.length >= 6
            //     && this.streetAddressRef.current.value.length >= 6 && this.stateRef.current.value.length >= 6
            //     && this.zipRef.current.value.length >= 6 && this.emailRef.current.value.length >= 6) {
            //     this.setState({ 'reEditedForm': true });
            // } else {
            //     this.setState({ 'reEditedForm': false });
            // }
            // console.log(this.state.reEditedForm)


        } else {

            lastNameData = {
                lastNameVal: this.lastNameBillingRef.current.value,
                lastNameFeedback: this.lastNameFeedbackBillingRef,
                lastName: this.lastNameBillingRef
            }
            this.setState({ 'lastNameBilling': lastNameData.lastNameVal });

            if (this.lastNameBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            }

            else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {
                this.state.stepsArrey.push("3")
            }

            // if (this.state.stepsArrey.includes("3")
            //     && this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
            //     && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
            //     && this.zipBillingRef.current.value.length >= 6) {
            //     this.setState({ 'reEditedForm': true });
            // } else {
            //     this.setState({ 'reEditedForm': false });
            // }
            // console.log(this.state.reEditedForm)

        }

        // console.log(this.state.stepsArrey)
        validateLastName(lastNameData)
    }

    handleEmailValidation() {

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }

        const emailData = {
            emailVal: this.emailRef.current.value,
            emailFeedback: this.emailFeedbackRef,
            email: this.emailRef
        }
        this.setState({ 'email': emailData.emailVal });

        if (this.emailRef.current.value.length < 6) {

            for (var i = 0; i < this.state.stepsArrey.length; i++) {
                if (this.state.stepsArrey[i] === "3") {
                    this.state.stepsArrey.splice(i, 1);
                }
            }
        } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
            && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
            && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
            && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5) {
            this.state.stepsArrey.push("3")
        }


        // if (this.state.stepsArrey.includes("3")
        //     && this.lastNameRef.current.value.length >= 6 && this.firstNameRef.current.value.length >= 6
        //     && this.streetAddressRef.current.value.length >= 6 && this.stateRef.current.value.length >= 6
        //     && this.zipRef.current.value.length >= 6 && this.emailRef.current.value.length >= 6) {
        //     this.setState({ 'reEditedForm': true });
        // } else {
        //     this.setState({ 'reEditedForm': false });
        // }
        // console.log(this.state.reEditedForm)


        validateEmail(emailData)
    }

    handleStreetAddressValidation() {
        let streetAddressData = {}

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }

        if (this.state.activePill === "1") {

            streetAddressData = {
                streetAddressVal: this.streetAddressRef.current.value,
                streetAddressFeedback: this.streetAddressFeedbackRef,
                streetAddress: this.streetAddressRef
            }
            this.setState({ 'streetAddress': streetAddressData.streetAddressVal });

            if (this.streetAddressRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
                && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
                && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
                && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5
                && this.lastNameBillingRef.current.value.length >= 5 && this.firstNameBillingRef.current.value.length >= 5
                && this.streetAddressBillingRef.current.value.length >= 5 && this.stateBillingRef.current.value.length >= 5
                && this.zipBillingRef.current.value.length >= 5) {
                this.state.stepsArrey.push("3")
            }

            // if (this.state.stepsArrey.includes("3")
            //     && this.lastNameRef.current.value.length >= 6 && this.firstNameRef.current.value.length >= 6
            //     && this.streetAddressRef.current.value.length >= 6 && this.stateRef.current.value.length >= 6
            //     && this.zipRef.current.value.length >= 6 && this.emailRef.current.value.length >= 6) {
            //     this.setState({ 'reEditedForm': true });
            // } else {
            //     this.setState({ 'reEditedForm': false });
            // }
            // console.log(this.state.reEditedForm)

        } else {

            streetAddressData = {
                streetAddressVal: this.streetAddressBillingRef.current.value,
                streetAddressFeedback: this.streetAddressFeedbackBillingRef,
                streetAddress: this.streetAddressBillingRef
            }
            this.setState({ 'streetAddressBilling': streetAddressData.streetAddressVal });

            if (this.stateBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            }

            else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {
                this.state.stepsArrey.push("3")
            }

            // if (this.state.stepsArrey.includes("3")
            //     && this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
            //     && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
            //     && this.zipBillingRef.current.value.length >= 6) {
            //     this.setState({ 'reEditedForm': true });
            // } else {
            //     this.setState({ 'reEditedForm': false });
            // }
            // console.log(this.state.reEditedForm)

        }

        // console.log(this.state.stepsArrey)
        validateStreetAddress(streetAddressData)
    }

    handleStateValidation() {
        let stateData = {}

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }

        if (this.state.activePill === "1") {

            stateData = {
                stateVal: this.stateRef.current.value,
                stateFeedback: this.stateFeedbackRef,
                state: this.stateRef
            }
            this.setState({ 'state': stateData.stateVal });

            if (this.stateRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
                && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
                && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
                && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5
                && this.lastNameBillingRef.current.value.length >= 5 && this.firstNameBillingRef.current.value.length >= 5
                && this.streetAddressBillingRef.current.value.length >= 5 && this.stateBillingRef.current.value.length >= 5
                && this.zipBillingRef.current.value.length >= 5) {
                this.state.stepsArrey.push("3")
            }

        } else {

            stateData = {
                stateVal: this.stateBillingRef.current.value,
                stateFeedback: this.stateFeedbackBillingRef,
                state: this.stateBillingRef
            }
            this.setState({ 'stateBilling': stateData.stateVal });

            if (this.zipBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            }

            else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {
                this.state.stepsArrey.push("3")
            }
        }

        console.log(this.state.stepsArrey)
        validateState(stateData)
    }

    handleZipValidation() {
        let zipData = {}

        for (var a = 0; a < this.state.stepsArrey.length; a++) {
            if (this.state.stepsArrey[a] === "4") {
                this.state.stepsArrey.splice(a, 1);
            }
        }

        if (this.state.activePill === "1") {

            zipData = {
                zipVal: this.zipRef.current.value,
                zipFeedback: this.zipFeedbackRef,
                zip: this.zipRef
            }
            this.setState({ 'zip': zipData.zipVal });

            if (this.zipRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            } else if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4")
                && this.lastNameRef.current.value.length >= 5 && this.firstNameRef.current.value.length >= 5
                && this.streetAddressRef.current.value.length >= 5 && this.stateRef.current.value.length >= 5
                && this.zipRef.current.value.length >= 5 && this.emailRef.current.value.length >= 5
                && this.lastNameBillingRef.current.value.length >= 5 && this.firstNameBillingRef.current.value.length >= 5
                && this.streetAddressBillingRef.current.value.length >= 5 && this.stateBillingRef.current.value.length >= 5
                && this.zipBillingRef.current.value.length >= 5) {
                this.state.stepsArrey.push("3")
            }

        } else {

            zipData = {
                zipVal: this.zipBillingRef.current.value,
                zipFeedback: this.zipFeedbackBillingRef,
                zip: this.zipBillingRef
            }
            this.setState({ 'zipBilling': zipData.zipVal });

            if (this.zipBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3" || this.state.stepsArrey[i] === "4") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }
            }

            if (!this.state.stepsArrey.includes("3") && this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {
                this.state.stepsArrey.push("3")
            }
        }

        console.log(this.state.stepsArrey)
        validateZip(zipData)

    }

    // GO BACK BUTTOM
    selectPreviousTab = () => {
        if (this.state.checkboxChecked === true && this.state.activePill === "3") {
            this.setState({ activePill: (+this.state.activePill - 2).toString() })
        }
        else {
            this.setState({ activePill: (+this.state.activePill - 1).toString() })
        }
    };

    payment = () => {
        this.toggle();
        toast.success("Payment succesfull!", {
            hideProgressBar: true,
            className: 'p-5',
            closeButton: false,
            autoClose: 6500
        });
    }

    // GO TO NEXT  TAB AND VALIDATE
    selectNextTab = () => {

        let FormStepOneOrTwo = {}
        let FormPayment = {}

        if (this.state.activePill === "1") {
            FormStepOneOrTwo = {
                firstNameVal: this.firstNameRef.current.value,
                firstNameFeedback: this.firstNameFeedbackRef,
                firstName: this.firstNameRef,
                lastNameVal: this.lastNameRef.current.value,
                lastNameFeedback: this.lastNameFeedbackRef,
                lastName: this.lastNameRef,
                streetAddressVal: this.streetAddressRef.current.value,
                streetAddressFeedback: this.streetAddressFeedbackRef,
                streetAddress: this.streetAddressRef,
                emailVal: this.emailRef.current.value,
                emailFeedback: this.emailFeedbackRef,
                email: this.emailRef,
                stateVal: this.stateRef.current.value,
                stateFeedback: this.stateFeedbackRef,
                state: this.stateRef,
                zipVal: this.zipRef.current.value,
                zipFeedback: this.zipFeedbackRef,
                zip: this.zipRef,

            }

            validateStepOneOrTwo(FormStepOneOrTwo)

            if (FormStepOneOrTwo.lastNameVal.length >= 6 && FormStepOneOrTwo.firstNameVal.length >= 6
                && FormStepOneOrTwo.emailVal.length >= 6 && FormStepOneOrTwo.streetAddressVal.length >= 6
                && FormStepOneOrTwo.stateVal.length >= 6 && FormStepOneOrTwo.zipVal.length >= 6) {

                if (this.state.checkboxChecked === true && this.state.activePill === "1") {

                    this.setState({ activePill: "3" })

                    if (!this.state.stepsArrey.includes("3")) {
                        this.state.stepsArrey.push("3")
                    }
                    console.log(this.state.stepsArrey)
                }
                else {
                    this.setState({ activePill: "2" })

                    if (!this.state.stepsArrey.includes("2")) {
                        this.state.stepsArrey.push(("2"))
                    }
                    console.log(this.state.stepsArrey)
                }
            } else {

                toast.error("Please complite your Shipping form!", {
                    hideProgressBar: true,
                    className: 'p-5',
                    closeButton: false,
                    autoClose: false,
                });

            }

        } else if (this.state.activePill === "2") {
            FormStepOneOrTwo = {
                firstNameVal: this.firstNameBillingRef.current.value,
                firstNameFeedback: this.firstNameFeedbackBillingRef,
                firstName: this.firstNameBillingRef,
                lastNameVal: this.lastNameBillingRef.current.value,
                lastNameFeedback: this.lastNameFeedbackBillingRef,
                lastName: this.lastNameBillingRef,
                streetAddressVal: this.streetAddressBillingRef.current.value,
                streetAddressFeedback: this.streetAddressFeedbackBillingRef,
                streetAddress: this.streetAddressBillingRef,
                stateVal: this.stateBillingRef.current.value,
                stateFeedback: this.stateFeedbackBillingRef,
                state: this.stateBillingRef,
                zipVal: this.zipBillingRef.current.value,
                zipFeedback: this.zipFeedbackBillingRef,
                zip: this.zipBillingRef,
            }

            validateStepOneOrTwo(FormStepOneOrTwo)

            if (this.lastNameRef.current.value.length >= 6 && this.firstNameRef.current.value.length >= 6
                && this.streetAddressRef.current.value.length >= 6 && this.stateRef.current.value.length >= 6
                && this.zipRef.current.value.length >= 6 && this.lastNameBillingRef.current.value.length >= 6 && this.firstNameBillingRef.current.value.length >= 6
                && this.streetAddressBillingRef.current.value.length >= 6 && this.stateBillingRef.current.value.length >= 6
                && this.zipBillingRef.current.value.length >= 6) {

                this.setState({ activePill: "3" })

                if (!this.state.stepsArrey.includes("3")) {
                    this.state.stepsArrey.push(("3"))
                }
                console.log(this.state.stepsArrey)
            } else {

                if (this.state.firstNameBilling.length < 6 || this.state.lastNameBilling.length < 6
                    || this.state.streetAddressBilling.length < 6
                    || this.state.stateBilling.length < 6 || this.state.zipBilling.length) {

                    toast.error("Please complite your Billing form", {
                        hideProgressBar: true,
                        className: 'p-5',
                        closeButton: false,
                        autoClose: 4000
                    });
                }
            }


        } else if (this.state.activePill === "3") {

            this.setState({ activePill: "4" })

            if (!this.state.stepsArrey.includes("4")) {
                this.state.stepsArrey.push("4")

            }
            if (!this.state.stepsArrey.includes("3")) {
                this.state.stepsArrey.push("3")
            }
            console.log(this.state.stepsArrey)

        } else if (this.state.activePill === "4") {
            FormPayment = {
                cardNumberVal: this.cardNumberRef.current.value,
                cardNumberFeedback: this.cardNumberFeedbackRef,
                cardNumber: this.cardNumberRef,
                cardCVVVal: this.cardCVVRef.current.value,
                cardCVVFeedback: this.cardCVVFeedbackRef,
                cardCVV: this.cardCVVRef,
                cardExpirationVal: this.cardExpirationRef.current.value,
                cardExpirationFeedback: this.cardExpirationFeedbackRef,
                cardExpiration: this.cardExpirationRef,
                cardNameVal: this.cardNameRef.current.value,
                cardNameFeedback: this.cardNameFeedbackRef,
                cardName: this.cardNameRef
            }

            validatePaymentStep(FormPayment)

            if (FormPayment.cardNumberVal.length >= 6 && FormPayment.cardCVVVal.length >= 6
                && FormPayment.cardExpirationVal.length >= 6 && FormPayment.cardNameVal.length >= 6) {

                this.payment();
            }
        }
    }

    // CHANGE TAB  AND  VALIDATE
    togglePills = tab => {

        if (tab === "1") {
            this.setState({ activePill: "1" });
            for (var i = 0; i < this.state.stepsArrey.length; i++) {
                if (this.state.stepsArrey[i] === "2") {
                    this.state.stepsArrey.splice(i, 1);
                }
            }
            console.log(this.state.stepsArrey)
        }


        else if (tab === "4" && this.state.activePill === "4") {
            toast.error('To place your order press "Place Order"!', {
                hideProgressBar: true,
                className: 'p-5 bg-dark',
                closeButton: false,
                autoClose: 4000
            });
        }

        // else if (tab === "4" && !this.state.stepsArrey.includes("4") 
        //     && this.state.firstName.length >= 6 && this.state.lastName.length >= 6
        //     && this.state.streetAddress.length >= 6 && this.state.email.length >= 6
        //     && this.state.state.length >= 6 && this.state.zip.length >= 6
        //     && this.state.firstNameBilling.length >= 6 && this.state.lastNameBilling.length >= 6
        //     && this.state.streetAddressBilling.length >= 6
        //     && this.state.stateBilling.length >= 6 && this.state.zipBilling.length >= 6) {


        //     if (this.state.activePill == "1" || this.state.activePill == "2") {
        //         this.setState({ activePill: "3" })

        //         if (!this.state.stepsArrey.includes("1")) {
        //             this.state.stepsArrey.push("1")
        //         }
        //         if (!this.state.stepsArrey.includes("2")) {
        //             this.state.stepsArrey.push("2")
        //         }
        //         if (!this.state.stepsArrey.includes("3")) {
        //             this.state.stepsArrey.push("3")
        //         }
        //     }

        //     toast.error("Before paying you need to submit the Summery Step!!!", {
        //         hideProgressBar: true,
        //         className: 'p-5',
        //         closeButton: false,
        //         autoClose: 4000
        //     });
        //     toast.error("Reason: It looks like you edited your Shipping form, Belling form or you didn't submit the Summery Step.", {
        //         hideProgressBar: true,
        //         className: 'p-5 bg-dark',
        //         closeButton: false,
        //         autoClose: 4000
        //     });
        // }

        else if (this.state.stepsArrey.includes(tab)) {
            if (this.state.activePill !== tab) {
                this.setState({
                    activePill: tab
                });
            }
        }

        else {

            if (tab === "2" && !this.state.stepsArrey.includes("2")) {

                this.selectNextTab()

            } else if (tab === "3" && !this.state.stepsArrey.includes("3")
            || tab === "4" && !this.state.stepsArrey.includes("3")) {

                if (this.state.firstName.length >= 6 && this.state.lastName.length >= 6
                    && this.state.streetAddress.length >= 6 && this.state.email.length >= 6
                    && this.state.state.length >= 6 && this.state.zip.length >= 6
                    && this.state.firstNameBilling.length >= 6 && this.state.lastNameBilling.length >= 6
                    && this.state.streetAddressBilling.length >= 6
                    && this.state.stateBilling.length >= 6 && this.state.zipBilling.length >= 6) {
                    this.state.stepsArrey.push("3");
                    this.setState({ activePill: "3" });

                } else if (this.state.firstName.length < 6 || this.state.lastName.length < 6
                    || this.state.streetAddress.length < 6 || this.state.email.length < 6
                    || this.state.state.length < 6 || this.state.zip.length < 6) {


                    this.selectNextTab()

                }

                else if (this.state.checkboxChecked === false && this.state.firstNameBilling.length < 6 ||
                    this.state.checkboxChecked === false && this.state.lastNameBilling.length < 6 ||
                    this.state.checkboxChecked === false && this.state.streetAddressBilling.length < 6 ||
                    this.state.checkboxChecked === false && this.state.stateBilling.length < 6 ||
                    this.state.checkboxChecked === false && this.state.zipBilling.length < 6) {

                    if (this.state.activePill === "1") {
                        this.selectNextTab()
                    }
                    setTimeout(() => { this.selectNextTab() }, 1);
                }

                else if (this.state.checkboxChecked === true && this.state.firstNameBilling.length < 6 ||
                    this.state.checkboxChecked === true && this.state.lastNameBilling.length < 6 ||
                    this.state.checkboxChecked === true && this.state.streetAddressBilling.length < 6 ||
                    this.state.checkboxChecked === true && this.state.stateBilling.length < 6 ||
                    this.state.checkboxChecked === true && this.state.zipBilling.length < 6) {

                    this.selectNextTab()
                }

            }

            else if (tab === "4" && !this.state.stepsArrey.includes("3") ||
                tab === "4" && !this.state.stepsArrey.includes("4")) {


                toast.error("Before paying you need to submit the Summery Step!!!", {
                    hideProgressBar: true,
                    className: 'p-5',
                    closeButton: false,
                    autoClose: 4000
                });
                toast.error("Reason: It looks like you edited your Shipping form, Belling form or you didn't submit the Summery Step.", {
                    hideProgressBar: true,
                    className: 'p-5 bg-dark',
                    closeButton: false,
                    autoClose: 4000
                });


            }
        }
    }

    // HIDE BILLING TAB
    checkboxHandler = () => {
        if (this.state.checkboxChecked === false) {
            this.setState({ checkboxChecked: true })
            this.refs.billingInfo.classList.add("d-none");

            if (this.state.stepsArrey.includes("2") && this.lastNameBillingRef.current.value.length < 6 ||
                this.state.stepsArrey.includes("2") && this.firstNameBillingRef.current.value.length < 6 ||
                this.state.stepsArrey.includes("2") && this.streetAddressBillingRef.current.value.length < 6 ||
                this.state.stepsArrey.includes("2") && this.stateBillingRef.current.value.length < 6 ||
                this.state.stepsArrey.includes("2") && this.zipBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "2") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }

                if (!this.state.stepsArrey.includes("3")) {
                    this.state.stepsArrey.push("3")
                }

            }
            console.log(this.state.stepsArrey)
        }

        else if (this.state.checkboxChecked === true) {
            this.setState({ checkboxChecked: false })
            this.refs.billingInfo.classList.remove("d-none");

            if (this.state.stepsArrey.includes("3") &&
                this.lastNameBillingRef.current.value.length < 6 || this.firstNameBillingRef.current.value.length < 6
                || this.streetAddressBillingRef.current.value.length < 6 || this.stateBillingRef.current.value.length < 6
                || this.zipBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "3") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }

                if (!this.state.stepsArrey.includes("2")) {
                    this.state.stepsArrey.push("2")
                }
            }

            else if (this.state.stepsArrey.includes("4") &&
                this.lastNameBillingRef.current.value.length < 6 || this.firstNameBillingRef.current.value.length < 6
                || this.streetAddressBillingRef.current.value.length < 6 || this.stateBillingRef.current.value.length < 6
                || this.zipBillingRef.current.value.length < 6) {

                for (var i = 0; i < this.state.stepsArrey.length; i++) {
                    if (this.state.stepsArrey[i] === "4") {
                        this.state.stepsArrey.splice(i, 1);
                    }
                }

                if (!this.state.stepsArrey.includes("2")) {
                    this.state.stepsArrey.push("2")
                }

                if (!this.state.stepsArrey.includes("3")) {
                    this.state.stepsArrey.push("3")
                }
            }
            console.log(this.state.stepsArrey)
        }
    };

    // LABEL STYLE
    styleLabelInFocus(event) {
        event.currentTarget.parentNode.childNodes[0].classList.remove("css_label")
        event.currentTarget.parentNode.childNodes[0].classList.add("css_labelInFocus")
        event.currentTarget.parentNode.childNodes[0].classList.add("css_labelColorInFocus")
    }

    lableOnClick(event) {
        event.currentTarget.classList.add("css_labelColorInFocus")
        event.currentTarget.classList.add("css_labelInFocus")
        event.currentTarget.classList.remove("css_label")
    }

    styleLabelOutOfFocus(event) {
        if (event.currentTarget.value === "") {
            event.currentTarget.parentNode.childNodes[0].classList.remove("css_labelColorInFocus")
            event.currentTarget.parentNode.childNodes[0].classList.remove("css_labelInFocus")
            event.currentTarget.parentNode.childNodes[0].classList.add("css_label")
        } else {
            event.currentTarget.parentNode.childNodes[0].classList.remove("css_labelColorInFocus")
        }
    }

    // TOGGLE MODAL
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { activePill } = this.state;
        const checkboxChecked = this.state.checkboxChecked;
        const paymentSuccessfull = this.state.paymentSuccessfull;
        let shippingBtn;
        let paymentFlowStep;

        if (!checkboxChecked) {
            shippingBtn = <MDBNavItem className={activePill === "2" ? "" : "css_hideButtom"}>
                <MDBBtn to="#" color="" size="lg"
                    style={{ border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }}
                    className={activePill === "2" ? "MDBBtn backgroundImage mt-0" : "MDBBtn mt-0"}
                    onClick={() => this.togglePills("2")}>
                    <strong>Billing</strong>
                </MDBBtn>
            </MDBNavItem>
        } else {
            shippingBtn = ''
        }

        if (paymentSuccessfull) {
            paymentFlowStep = <div className="text-success">Payment Successfull!</div>
        } else {
            paymentFlowStep = <MDBRow className="my-2" center>
                <MDBCardBody style={{ marginTop: '0px', marginBottom: '0px', paddingTop: '0px', paddingBottom: '0px' }} >
                    <MDBRow>
                        <MDBCol style={{ marginTop: '0px', marginBottom: '0px' }}>
                            <MDBNav pills className="nav-justified" style={{ marginLeft: '-13px' }}>

                                <MDBNavItem className={activePill === "1" ? "" : "css_hideButtom"}>
                                    <MDBBtn to="#" color="" size="lg" style={{ border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} className={activePill === "1" ? "MDBBtn backgroundImage mt-0" : "MDBBtn mt-0"} onClick={() => this.togglePills("1")}>
                                        <strong>Shipping</strong>
                                    </MDBBtn>
                                </MDBNavItem>
                                {shippingBtn}
                                <MDBNavItem className={activePill === "3" ? "" : "css_hideButtom"}>
                                    <MDBBtn to="#" color="" size="lg" style={{ border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} className={activePill === "3" ? "MDBBtn backgroundImage mt-0" : "MDBBtn mt-0"} onClick={() => this.togglePills("3")}>
                                        <strong>Summary</strong>
                                    </MDBBtn>
                                </MDBNavItem>
                                <MDBNavItem className={activePill === "4" ? "" : "css_hideButtom"}>
                                    <MDBBtn to="#" color="" size="lg" style={{ border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} className={activePill === "4" ? "MDBBtn backgroundImage mt-0" : "MDBBtn mt-0"} onClick={() => this.togglePills("4")}>
                                        <strong>Payment</strong>
                                    </MDBBtn>
                                </MDBNavItem>
                            </MDBNav>

                            <MDBTabContent className="css_allTabs" activeItem={activePill}>

                                <MDBTabPane tabId="1">
                                    <form className="pt-4">
                                        <ShippingAndBillingStep
                                            ref={{
                                                firstNameRef: this.firstNameRef,
                                                lastNameRef: this.lastNameRef,
                                                emailRef: this.emailRef,
                                                streetAddressRef: this.streetAddressRef,
                                                stateRef: this.stateRef,
                                                zipRef: this.zipRef,
                                                firstNameFeedbackRef: this.firstNameFeedbackRef,
                                                lastNameFeedbackRef: this.lastNameFeedbackRef,
                                                emailFeedbackRef: this.emailFeedbackRef,
                                                streetAddressFeedbackRef: this.streetAddressFeedbackRef,
                                                stateFeedbackRef: this.stateFeedbackRef,
                                                zipFeedbackRef: this.zipFeedbackRef,
                                            }}
                                            styleLabelInFocus={this.styleLabelInFocus}
                                            styleLabelOutOfFocus={this.styleLabelOutOfFocus}
                                            activePill={this.state.activePill}
                                            checkboxChecked={this.state.checkboxChecked}
                                            firstName={this.state.firstName}
                                            lastName={this.state.lastName}
                                            streetAddress={this.state.streetAddress}
                                            email={this.state.email}
                                            state={this.state.state}
                                            zip={this.state.zip}
                                            backButtomOnClick={this.toggle}
                                            checkboxHandler={this.checkboxHandler}
                                            handleFirstNameValidation={this.handleFirstNameValidation}
                                            handleLastNameValidation={this.handleLastNameValidation}
                                            handleEmailValidation={this.handleEmailValidation}
                                            handleStreetAddressValidation={this.handleStreetAddressValidation}
                                            handleStateValidation={this.handleStateValidation}
                                            handleZipValidation={this.handleZipValidation}
                                            selectNextTab={this.selectNextTab}
                                        />
                                    </form>
                                </MDBTabPane>


                                <MDBTabPane tabId="2">
                                    <form ref='billingInfo' id="billingInfo" className="pt-4">
                                        <ShippingAndBillingStep
                                            ref={{
                                                firstNameRef: this.firstNameBillingRef,
                                                lastNameRef: this.lastNameBillingRef,
                                                emailRef: this.emailBillingRef,
                                                streetAddressRef: this.streetAddressBillingRef,
                                                stateRef: this.stateBillingRef,
                                                zipRef: this.zipBillingRef,
                                                firstNameFeedbackRef: this.firstNameFeedbackBillingRef,
                                                lastNameFeedbackRef: this.lastNameFeedbackBillingRef,
                                                streetAddressFeedbackRef: this.streetAddressFeedbackBillingRef,
                                                stateFeedbackRef: this.stateFeedbackBillingRef,
                                                zipFeedbackRef: this.zipFeedbackBillingRef
                                            }}
                                            lableOnClick={this.lableOnClick}
                                            styleLabelInFocus={this.styleLabelInFocus}
                                            styleLabelOutOfFocus={this.styleLabelOutOfFocus}
                                            activePill={this.state.activePill}
                                            firstName={this.state.firstNameBilling}
                                            lastName={this.state.lastNameBilling}
                                            streetAddress={this.state.streetAddressBilling}
                                            state={this.state.stateBilling}
                                            zip={this.state.zipBilling}
                                            backButtomOnClick={this.selectPreviousTab}
                                            handleFirstNameValidation={this.handleFirstNameValidation}
                                            handleLastNameValidation={this.handleLastNameValidation}
                                            handleStreetAddressValidation={this.handleStreetAddressValidation}
                                            handleStateValidation={this.handleStateValidation}
                                            handleZipValidation={this.handleZipValidation}
                                            selectNextTab={this.selectNextTab}
                                        />
                                    </form>
                                </MDBTabPane>

                                <MDBTabPane tabId="3">
                                    <ComfirmOrderStep
                                        selectNextTab={this.selectNextTab}
                                        selectPreviousTab={this.selectPreviousTab}
                                    />
                                </MDBTabPane>

                                <MDBTabPane tabId="4">
                                    <form className="pt-4">
                                        <PaymentStep
                                            ref={{
                                                cardNumberFeedbackRef: this.cardNumberFeedbackRef,
                                                cardNumberRef: this.cardNumberRef,
                                                cardCVVFeedbackRef: this.cardCVVFeedbackRef,
                                                cardCVVRef: this.cardCVVRef,
                                                cardExpirationFeedbackRef: this.cardExpirationFeedbackRef,
                                                cardExpirationRef: this.cardExpirationRef,
                                                cardNameFeedbackRef: this.cardNameFeedbackRef,
                                                cardNameRef: this.cardNameRef
                                            }}
                                            lableOnClick={this.lableOnClick}
                                            styleLabelInFocus={this.styleLabelInFocus}
                                            styleLabelOutOfFocus={this.styleLabelOutOfFocus}

                                            selectPreviousTab={this.selectPreviousTab}
                                            selectNextTab={this.selectNextTab}
                                            cardName={this.state.cardName}
                                            cardCVV={this.state.cardCVV}
                                            cardExpiration={this.state.cardExpiration}
                                            cardNumber={this.state.cardNumber}
                                            handleCardNumberValidation={this.handleCardNumberValidation}
                                            handleCardExpirationValidation={this.handleCardExpirationValidation}
                                            handleCardCVVValidation={this.handleCardCVVValidation}
                                            handleCardNameValidation={this.handleCardNameValidation}
                                        />
                                    </form>
                                </MDBTabPane>
                            </MDBTabContent>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBRow>
        }

        return (<div>
            <ToastContainer />
            {/* BUTTON */}
            <MDBBtn className="text-white" style={{ backgroundImage: "url('/assets/images/bg.jpg')", border: '0.5px solid grey', borderRadius: '5px', fontWeight: '600' }} onClick={this.toggle}>Proceed to checkout</MDBBtn>

            {/* MODAL */}
            <MDBModal backdrop={false} isOpen={this.state.modal} onClick={this.toggle} size="lg" position="bottom">
                <MDBModalBody style={{ padding: "0px 12px" }}>
                    <MDBRow onClick={this.toggle}>
                        <MDBCol style={{ marginTop: "-5px", marginBottom: "15px", textAlign: 'end' }}>
                            <button style={{ backgroundColor: "transparent", marginTop: "-2px", marginRight: '-9px', paddingTop: '0px', paddingRight: '0px', fontSize: "20px", border: '1px solid transparent' }}>x</button>
                        </MDBCol>
                    </MDBRow>
                    {paymentFlowStep}
                </MDBModalBody>
            </MDBModal>
        </div>
        );
    }
}

export default PaymentFlow;
