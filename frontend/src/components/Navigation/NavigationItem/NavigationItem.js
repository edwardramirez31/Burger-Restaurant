import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = ({ location, children }) => {
  return (
    <li className="NavigationItem">
      <NavLink exact to={location}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
