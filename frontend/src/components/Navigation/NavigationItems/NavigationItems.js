import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem location="/">Burger Builder</NavigationItem>
      <NavigationItem location="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
