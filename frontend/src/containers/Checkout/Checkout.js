import CheckoutSummary from "components/Order/CheckoutSummary/CheckoutSummary";
import React, { Component } from "react";

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary />
      </div>
    );
  }
}
