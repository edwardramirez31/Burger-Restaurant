import Logo from "components/Logo/Logo";
import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <Logo height="11%" margin="32px" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
