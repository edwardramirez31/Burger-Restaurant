import Logo from "components/Logo/Logo";
import Backdrop from "components/UI/Backdrop/Backdrop";
import Auxiliary from "hoc/Auxiliary/Auxiliary";
import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let classes = "SideDrawer Close";
  if (props.show) {
    classes = "SideDrawer Open";
  }
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.closeHandler} />
      <div className={classes}>
        <Logo height="11%" margin="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDrawer;
