import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Axios from "axios";

class CheckoutForm extends Component {

  async submit(ev) {
    const {
      data: { clientSecret, intentId }
    } = await Axios.post("http://localhost:3000/your-endpoint/",
      { amount: 1500, cardType: "card" }); // We pay 15€ with a credit card

    const { paymentIntent, error } = await this.props.stripe.handleCardPayment(
      clientSecret,
      this.state.cardElement,
    );

    if (error) {
      // Handle payment error
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Handle payment success
    }
  }

  handleReady = element => {
    this.setState({ cardElement: element });
  };

  render() {
    return (
      <div>
        <CardElement onReady={this.handleReady} />
        <button onClick={this.submit}> Pay </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);