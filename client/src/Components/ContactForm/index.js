import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import './index.css'


class ContactForm extends Component {
  state = {
    value: '',
    fullName: '',
    email: '',
    subject: '',
    message: '',
    checkboxChecked: true,
  };


  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  checkboxHandler = () => {
    if (this.state.checkboxChecked === false) {
      this.setState({ checkboxChecked: true })
    }
    else if (this.state.checkboxChecked === true) {
      this.setState({ checkboxChecked: false })
    }
  };


  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";

    let userData = {
      fullName: this.state.fullName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    if (!userData.fullName || !userData.email || !userData.subject || !userData.message) {
      return toast.error("Please don't leave fields blank!", {
        hideProgressBar: true,
        className: 'p-5',
        closeButton: false,
        autoClose: 6500
      });
    } else {

      this.sendEmailToBand(userData)

      if (this.state.checkboxChecked === true) {
        this.signUpUser(userData);
      }

      event.target.classList.remove("was-validated");
      this.setState({
        value: '',
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });

    }
  }

  sendEmailToBand(userData) {
    axios.post("/send-email/send-to-band", {
      fullName: userData.fullName,
      email: userData.email,
      subject: userData.subject,
      message: userData.message,
    }).then(function (res) {
      console.log(res);
      if (res.status === 200) {
        toast.success("Your message was sent to the band!", {
          hideProgressBar: true,
          className: 'p-5',
          closeButton: false,
          autoClose: 6500,
        });
      } else if (res.status === 422) {
        toast.error("Oh... Something is not right.. Try sending your message later!", {
          hideProgressBar: true,
          className: 'p-5',
          closeButton: false,
          autoClose: 6500
        });
      }
    })
  }

  signUpUser(userData) {
    axios.post("/api/mailing-list", {
      fullName: userData.fullName,
      email: userData.email,
    }).then(function (res) {
      console.log(res.data);
      if (res.data.code === 11000) {
        toast.error("You're alredy registerd! Welcome back!", {
          className: 'bg-dark text-light p-5',
          hideProgressBar: true,
          closeButton: false,
          autoClose: 6500
        });
      } else if (res.data.fullName && res.data.email) {
        toast.success("Congrats! You just subscribed to our mailing lists!", {
          hideProgressBar: true,
          className: 'p-5',
          closeButton: false,
          autoClose: 6500
        });
      }
    })
  }

  render() {
    return (<div className="mt-5 mr-2 ml-2">
      <MDBCol className="m-auto" xs={9} md={8} lg={6} >
        <MDBCard>
          <MDBCardBody className="css_FullForm">
            <div className="form-header css_ContactHeader">
              <h3 className="mt-2"> Write to us:</h3>
            </div>
            <div>
              <form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate>
                <ToastContainer />
                <MDBInput
                  tag="p"
                  label="Your name"
                  name="fullName"
                  type="text"
                  id="fullName-input"
                  value={this.state.fullName}
                  onChange={this.changeHandler}
                  required>
                  <div className="invalid-feedback">Please enter your full name</div>
                  <div className="valid-feedback">Valid!</div>
                </MDBInput>
                <MDBInput
                  tag="p"
                  label="Your email"
                  name="email"
                  type="email"
                  id="email-input"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required >
                  <div className="invalid-feedback">Please enter a valid email.</div>
                  <div className="valid-feedback">Valid!</div>
                </MDBInput>
                <MDBInput
                  tag="p"
                  label="Subject"
                  name="subject"
                  type="text"
                  id="subject-input"
                  value={this.state.subject}
                  onChange={this.changeHandler}
                  required>
                  <div className="invalid-feedback">Please let us  now the subject</div>
                  <div className="valid-feedback">Valid!</div>
                </MDBInput>
                <MDBInput
                  tag="p"
                  label="Message"
                  name="message"
                  type="textarea"
                  id="message-input"
                  value={this.state.message}
                  onChange={this.changeHandler}
                  required>
                  <div className="invalid-feedback">Don't forget to write your message!</div>
                  <div className="valid-feedback">Valid!</div>
                </MDBInput>
                <MDBInput label="Check to subscribe to our mailing lists."
                  tag="p"
                  type="checkbox"
                  id="checkbox-input"
                  className={this.state.resetValidateClass}
                  checked={this.state.checkboxChecked}
                  onChange={this.checkboxHandler}>
                </MDBInput>
                <div className="text-center">
                  <MDBBtn
                    type="submit"
                    color="dark"
                    className="css_FormSubmitButton">Submit</MDBBtn>
                </div>
              </form>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
    );
  }
}

export default ContactForm;






