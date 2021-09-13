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

  cancelClickHandler = () => {
    this.props.history.goBack();
  };

  continueClickHandler = () => {
    this.props.history.replace("/checkout/continue");
  };

  componentDidMount() {
    this.setState({
      ingredients: this.props.location.state,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCancelHandler={this.cancelClickHandler}
          onContinueHandler={this.continueClickHandler}
        />
      </div>
    );
  }
}
