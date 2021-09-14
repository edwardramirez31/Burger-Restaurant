import CheckoutSummary from "components/Order/CheckoutSummary/CheckoutSummary";
import ContactOrder from "containers/ContactOrder/ContactOrder";
import React, { Component } from "react";
import { Route } from "react-router";

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    price: 0,
  };

  cancelClickHandler = () => {
    this.props.history.goBack();
  };

  continueClickHandler = () => {
    this.props.history.replace("/checkout/continue");
  };

  componentDidMount() {
    const { ingredients, price } = this.props.location.state;
    this.setState({
      ingredients,
      price,
    });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCancelHandler={this.cancelClickHandler}
          onContinueHandler={this.continueClickHandler}
        />
        <Route
          path={this.props.match.url + "/continue"}
          render={(props) => (
            <ContactOrder
              {...props}
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        />
      </div>
    );
  }
}
