import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
  {ingredient: 'Salad', type: 'salad'},
  {ingredient: 'Bacon', type: 'bacon'},
  {ingredient: 'Cheese', type: 'cheese'},
  {ingredient: 'Meat', type: 'meat'},
];

const BuildControls = ({ moreHandler, lessHandler, disabled, price }) => {
  return (
    <div className="BuildControls">
      <p>Current price:
        <strong>
          ${price.toFixed(2)}
        </strong>
      </p>
      {controls.map(({ingredient, type}) => {
        return (
        <BuildControl
          ingredient={ingredient}
          key={ingredient}
          moreHandler={() => moreHandler(type)}
          lessHandler={() => lessHandler(type)}
          disabled={disabled[type]}
        />)
      })}
      <button className="OrderButton">ORDER NOW</button>
    </div>
  );
};

export default BuildControls;