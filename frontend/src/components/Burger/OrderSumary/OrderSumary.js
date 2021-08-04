import Auxiliary from "../../../hoc/Auxiliary";

const OrderSumary = ({ ingredients }) => {
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
      <p>Cotinue to checkout?</p>
    </Auxiliary>
  );
};

export default OrderSumary;