export function validateStepOneOrTwo(FormStepOneOrTwo) {

    if (FormStepOneOrTwo.firstNameVal.length < 6) {
        FormStepOneOrTwo.firstNameFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.firstNameFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.firstNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.firstNameFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.firstNameFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormStepOneOrTwo.lastNameVal.length < 6) {
        FormStepOneOrTwo.lastNameFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.lastNameFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.lastNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.lastNameFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.lastNameFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormStepOneOrTwo.streetAddressVal.length < 6) {
        FormStepOneOrTwo.streetAddressFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.streetAddressFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.streetAddressFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.streetAddressFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.streetAddressFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormStepOneOrTwo.email !== undefined && FormStepOneOrTwo.emailVal.length < 6) {
        FormStepOneOrTwo.emailFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.emailFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.emailFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.emailFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.emailFeedback.current.childNodes[2].classList = "d-none";
    }


    if (FormStepOneOrTwo.stateVal.length < 6) {
        FormStepOneOrTwo.stateFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.stateFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.stateFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.stateFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.stateFeedback.current.childNodes[2].classList = "d-none";
    }

    if (FormStepOneOrTwo.zipVal.length < 6) {
        // FormStepOneOrTwo.zip.current.classList.remove("border-success");
        // FormStepOneOrTwo.zip.current.classList.add("border-danger");
        FormStepOneOrTwo.zipFeedback.current.classList.remove("text-success");
        FormStepOneOrTwo.zipFeedback.current.classList.add("text-danger");
        FormStepOneOrTwo.zipFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
        FormStepOneOrTwo.zipFeedback.current.childNodes[1].classList = "";
        FormStepOneOrTwo.zipFeedback.current.childNodes[2].classList = "d-none";

    }
}

export function validateFirstName(firstNameData) {
    if (firstNameData.firstNameFeedback.current.childNodes[0].textContent !== "") {
        if (firstNameData.firstNameVal.length < 6) {
            firstNameData.firstNameFeedback.current.classList.remove("text-success");
            firstNameData.firstNameFeedback.current.classList.add("text-danger");
            firstNameData.firstNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            firstNameData.firstNameFeedback.current.childNodes[1].classList = "";
            firstNameData.firstNameFeedback.current.childNodes[2].classList = "d-none";
        } else {
            firstNameData.firstNameFeedback.current.classList.remove("text-danger");
            firstNameData.firstNameFeedback.current.classList.add("text-success");
            firstNameData.firstNameFeedback.current.childNodes[0].textContent = "Zip valid!";
            firstNameData.firstNameFeedback.current.childNodes[1].classList = "d-none";
            firstNameData.firstNameFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateLastName(lastNameData) {
    if (lastNameData.lastNameFeedback.current.childNodes[0].textContent !== "") {
        if (lastNameData.lastNameVal.length < 6) {
            lastNameData.lastNameFeedback.current.classList.remove("text-success");
            lastNameData.lastNameFeedback.current.classList.add("text-danger");
            lastNameData.lastNameFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            lastNameData.lastNameFeedback.current.childNodes[1].classList = "";
            lastNameData.lastNameFeedback.current.childNodes[2].classList = "d-none";

        } else {
            lastNameData.lastNameFeedback.current.classList.remove("text-danger");
            lastNameData.lastNameFeedback.current.classList.add("text-success");
            lastNameData.lastNameFeedback.current.childNodes[0].textContent = "Zip valid!";
            lastNameData.lastNameFeedback.current.childNodes[1].classList = "d-none";
            lastNameData.lastNameFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateStreetAddress(streetAddressData) {
    if (streetAddressData.streetAddressFeedback.current.childNodes[0].textContent !== "") {
        if (streetAddressData.streetAddressVal.length < 6) {
            streetAddressData.streetAddressFeedback.current.classList.remove("text-success");
            streetAddressData.streetAddressFeedback.current.classList.add("text-danger");
            streetAddressData.streetAddressFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            streetAddressData.streetAddressFeedback.current.childNodes[1].classList = "";
            streetAddressData.streetAddressFeedback.current.childNodes[2].classList = "d-none";

        } else {
            streetAddressData.streetAddressFeedback.current.classList.remove("text-danger");
            streetAddressData.streetAddressFeedback.current.classList.add("text-success");
            streetAddressData.streetAddressFeedback.current.childNodes[0].textContent = "Zip valid!";
            streetAddressData.streetAddressFeedback.current.childNodes[1].classList = "d-none";
            streetAddressData.streetAddressFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateEmail(emailData) {
    if (emailData.emailFeedback.current.childNodes[0].textContent !== "") {
        if (emailData.emailVal.length < 6) {
            emailData.emailFeedback.current.classList.remove("text-success");
            emailData.emailFeedback.current.classList.add("text-danger");
            emailData.emailFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            emailData.emailFeedback.current.childNodes[1].classList = "";
            emailData.emailFeedback.current.childNodes[2].classList = "d-none";

        } else {
            emailData.emailFeedback.current.classList.remove("text-danger");
            emailData.emailFeedback.current.classList.add("text-success");
            emailData.emailFeedback.current.childNodes[0].textContent = "Zip valid!";
            emailData.emailFeedback.current.childNodes[1].classList = "d-none";
            emailData.emailFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateState(stateData) {
    if (stateData.stateFeedback.current.childNodes[0].textContent !== "") {
        if (stateData.stateVal.length < 6) {
            stateData.stateFeedback.current.classList.remove("text-success");
            stateData.stateFeedback.current.classList.add("text-danger");
            stateData.stateFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            stateData.stateFeedback.current.childNodes[1].classList = "";
            stateData.stateFeedback.current.childNodes[2].classList = "d-none";

        } else {
            stateData.stateFeedback.current.classList.remove("text-danger");
            stateData.stateFeedback.current.classList.add("text-success");
            stateData.stateFeedback.current.childNodes[0].textContent = "Zip valid!";
            stateData.stateFeedback.current.childNodes[1].classList = "d-none";
            stateData.stateFeedback.current.childNodes[2].classList = "";
        }
    }
}

export function validateZip(zipData) {
    if (zipData.zipFeedback.current.childNodes[0].textContent !== "") {
        if (zipData.zipVal.length < 6) {
            zipData.zipFeedback.current.classList.remove("text-success");
            zipData.zipFeedback.current.classList.add("text-danger");
            zipData.zipFeedback.current.childNodes[0].textContent = "Zip must be at least 6 characters long";
            zipData.zipFeedback.current.childNodes[1].classList = "";
            zipData.zipFeedback.current.childNodes[2].classList = "d-none";

        } else {
            zipData.zipFeedback.current.classList.remove("text-danger");
            zipData.zipFeedback.current.classList.add("text-success");
            zipData.zipFeedback.current.childNodes[0].textContent = "Zip valid!";
            zipData.zipFeedback.current.childNodes[1].classList = "d-none";
            zipData.zipFeedback.current.childNodes[2].classList = "";
        }
    }
}



