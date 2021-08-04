import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const Burger = ({ ingredients }) => {
  // get an array of keys 
  const ingredientsKeys = Object.keys(ingredients);
  let burgerMapping = ingredientsKeys.map(igKey => {
    return [...Array(ingredients[igKey])].map((_, id) => {
      return <BurgerIngredient key={igKey + id} type={igKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (burgerMapping.length === 0) {
    burgerMapping = <p>Please start adding ingredients</p>;
  }
  console.log(burgerMapping);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {burgerMapping}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;