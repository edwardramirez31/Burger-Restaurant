import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
  {ingredient: 'Salad', type: 'salad'},
  {ingredient: 'Bacon', type: 'bacon'},
  {ingredient: 'Cheese', type: 'cheese'},
  {ingredient: 'Meat', type: 'meat'},
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      {controls.map(({ingredient, type}) => {
        return (
        <BuildControl
          ingredient={ingredient}
          type={type}
          key={ingredient}
        />)
      })}
    </div>
  );
};

export default BuildControls;