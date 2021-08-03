import { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Auxiliary from "../../hoc/Auxiliary"

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
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
        meat: 0
      },
      totalPrice: 0
    };

  };

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
  };

  
  render() {
    console.log(this.state);
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls moreHandler={this.addIngredientHandler} />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder