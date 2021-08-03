import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from "../../hoc/Auxiliary"

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);
    // state
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
      }
    };

  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>BuildControls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder