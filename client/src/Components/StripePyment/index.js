import React, { Component } from "react";
import { Elements, StripeProvider, CardElement } from "react-stripe-elements";

class App extends Component {
    render() {
        return (
            <div>
                <StripeProvider
                    stripe={window.Stripe("your-api-key", {
                        betas: ["payment_intent_beta_3"]
                    })}
                >
                    <Elements>
                        <CardElement />
                    </Elements>
                </StripeProvider>
            </div>
        );
    }
}

export default App;