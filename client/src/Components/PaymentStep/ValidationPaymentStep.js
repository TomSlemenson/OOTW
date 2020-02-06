export function validatePaymentStep(FormPayment) {

    if (FormPayment.cardNameVal.length < 6) {
        FormPayment.cardNameFeedback.current.classList.remove("text-success");
        FormPayment.cardNameFeedback.current.classList.add("text-danger");
        FormPayment.cardNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormPayment.cardNameFeedback.current.childNodes[1].classList = "";
        FormPayment.cardNameFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormPayment.cardNumberVal.length < 6) {
        FormPayment.cardNumberFeedback.current.classList.remove("text-success");
        FormPayment.cardNumberFeedback.current.classList.add("text-danger");
        FormPayment.cardNumberFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormPayment.cardNumberFeedback.current.childNodes[1].classList = "";
        FormPayment.cardNumberFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormPayment.cardExpirationVal.length < 6) {
        FormPayment.cardExpirationFeedback.current.classList.remove("text-success");
        FormPayment.cardExpirationFeedback.current.classList.add("text-danger");
        FormPayment.cardExpirationFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormPayment.cardExpirationFeedback.current.childNodes[1].classList = "";
        FormPayment.cardExpirationFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormPayment.cardCVVVal.length < 6) {
        FormPayment.cardCVVFeedback.current.classList.remove("text-success");
        FormPayment.cardCVVFeedback.current.classList.add("text-danger");
        FormPayment.cardCVVFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormPayment.cardCVVFeedback.current.childNodes[1].classList = "";
        FormPayment.cardCVVFeedback.current.childNodes[2].classList = "d-none";
    }
}

export function validateCardName(cardNameData) {
    if (cardNameData.cardNameFeedback.current.childNodes[0].textContent !== "") {
        if (cardNameData.cardNameVal.length < 6) {
            cardNameData.cardNameFeedback.current.classList.remove("text-success");
            cardNameData.cardNameFeedback.current.classList.add("text-danger");
            cardNameData.cardNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            cardNameData.cardNameFeedback.current.childNodes[1].classList = "";
            cardNameData.cardNameFeedback.current.childNodes[2].classList = "d-none";

        } else {
            cardNameData.cardNameFeedback.current.classList.remove("text-danger");
            cardNameData.cardNameFeedback.current.classList.add("text-success");
            cardNameData.cardNameFeedback.current.childNodes[0].textContent = "Zip valid!";
            cardNameData.cardNameFeedback.current.childNodes[1].classList = "d-none";
            cardNameData.cardNameFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateCardNumber(cardNumberData) {
    if (cardNumberData.cardNumberFeedback.current.childNodes[0].textContent !== "") {
        if (cardNumberData.cardNumberVal.length < 6) {
            cardNumberData.cardNumberFeedback.current.classList.remove("text-success");
            cardNumberData.cardNumberFeedback.current.classList.add("text-danger");
            cardNumberData.cardNumberFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            cardNumberData.cardNumberFeedback.current.childNodes[1].classList = "";
            cardNumberData.cardNumberFeedback.current.childNodes[2].classList = "d-none";

        } else {
            cardNumberData.cardNumberFeedback.current.classList.remove("text-danger");
            cardNumberData.cardNumberFeedback.current.classList.add("text-success");
            cardNumberData.cardNumberFeedback.current.childNodes[0].textContent = "Zip valid!";
            cardNumberData.cardNumberFeedback.current.childNodes[1].classList = "d-none";
            cardNumberData.cardNumberFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateCardExpiration(cardExpirationData) {
    if (cardExpirationData.cardExpirationFeedback.current.childNodes[0].textContent !== "") {
        if (cardExpirationData.cardExpirationVal.length < 6) {
            cardExpirationData.cardExpirationFeedback.current.classList.remove("text-success");
            cardExpirationData.cardExpirationFeedback.current.classList.add("text-danger");
            cardExpirationData.cardExpirationFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            cardExpirationData.cardExpirationFeedback.current.childNodes[1].classList = "";
            cardExpirationData.cardExpirationFeedback.current.childNodes[2].classList = "d-none";

        } else {
            cardExpirationData.cardExpirationFeedback.current.classList.remove("text-danger");
            cardExpirationData.cardExpirationFeedback.current.classList.add("text-success");
            cardExpirationData.cardExpirationFeedback.current.childNodes[0].textContent = "Zip valid!";
            cardExpirationData.cardExpirationFeedback.current.childNodes[1].classList = "d-none";
            cardExpirationData.cardExpirationFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function  validateCardCVV(cardCVVData) {
    if (cardCVVData.cardCVVFeedback.current.childNodes[0].textContent !== "") {
        if (cardCVVData.cardCVVVal.length < 6) {
            cardCVVData.cardCVVFeedback.current.classList.remove("text-success");
            cardCVVData.cardCVVFeedback.current.classList.add("text-danger");
            cardCVVData.cardCVVFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            cardCVVData.cardCVVFeedback.current.childNodes[1].classList = "";
            cardCVVData.cardCVVFeedback.current.childNodes[2].classList = "d-none";

        } else {
            cardCVVData.cardCVVFeedback.current.classList.remove("text-danger");
            cardCVVData.cardCVVFeedback.current.classList.add("text-success");
            cardCVVData.cardCVVFeedback.current.childNodes[0].textContent = "Zip valid!";
            cardCVVData.cardCVVFeedback.current.childNodes[1].classList = "d-none";
            cardCVVData.cardCVVFeedback.current.childNodes[2].classList = "";
        }
    }
}