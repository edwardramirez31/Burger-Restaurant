import axiosOrders from "axios-orders";
import Spinner from "components/UI/Spinner/Spinner";
import withErrorHandling from "hoc/withErrorHandling/withErrorHandling";
import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSumary/OrderSumary";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 0,
      userCanPurchase: false,
      purchasing: false,
      isLoading: false,
    };
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  handleModalClicked = () => {
    this.setState({ purchasing: false });
  };

  handleContinueCheckout = () => {
    this.setState({ isLoading: true });
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Edward",
        lastName: "Ramirez",
        address: {
          country: "Colombia",
          zipCode: 533165,
          location: "Cra 45#28-30",
        },
      },
    };
    axiosOrders
      .post("/order.json", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({
          isLoading: false,
          purchasing: false,
        });
      });
  };

  updateUserCanPurchase(ingredients) {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, igCount) => {
        return sum + igCount;
      }, 0);
    this.setState({ userCanPurchase: sum > 0 });
  }

  addIngredientHandler = (type) => {
    // update ingredients count
    const prevCount = this.state.ingredients[type];
    const newCount = prevCount + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;
    // update price
    const oldPrice = this.state.totalPrice;
    const newPrice = INGREDIENT_PRICES[type] + oldPrice;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });
    this.updateUserCanPurchase(newIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;
    // getting the price
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: Math.round(newPrice * 100) / 100,
    });
    this.updateUserCanPurchase(newIngredients);
  };

  render() {
    const ingredientKeys = Object.keys(this.state.ingredients);
    const disabledIngredients = { ...this.state.ingredients };
    // for of loop through the array of keys
    for (let key of ingredientKeys) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <Auxiliary>
        <Modal
          isActive={this.state.purchasing}
          handleModalClicked={this.handleModalClicked}
        >
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              handleModalClicked={this.handleModalClicked}
              handleContinueCheckout={this.handleContinueCheckout}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          moreHandler={this.addIngredientHandler}
          lessHandler={this.removeIngredientHandler}
          disabled={disabledIngredients}
          price={this.state.totalPrice}
          userCanPurchase={this.state.userCanPurchase}
          handleOrderClick={this.purchaseHandler}
        />
      </Auxiliary>
    );
  }
}

export default withErrorHandling(BurgerBuilder, axiosOrders);
