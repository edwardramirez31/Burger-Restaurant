import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSumary = ({
  ingredients, handleModalClicked, handleContinueCheckout, price
}) => {
  const summary = Object.keys(ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:
        {' '}
        {ingredients[key]}
      </li>
    )
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>
        {summary}
      </ul>
      <p>
        <strong>
          Total Price:
          {price.toFixed(2)}
        </strong>
      </p>
      <p>Cotinue to checkout?</p>
      <Button variant="Danger" clicked={handleModalClicked}>
        CANCEL
      </Button>
      <Button variant="Success" clicked={handleContinueCheckout}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSumary;