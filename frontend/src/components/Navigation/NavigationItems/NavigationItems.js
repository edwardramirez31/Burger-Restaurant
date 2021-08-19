import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css'

const NavigationItems = () => {
  return (
    <ul class="NavigationItems">
      <NavigationItem active location="/">Burger Builder</NavigationItem>
      <NavigationItem location="/">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;