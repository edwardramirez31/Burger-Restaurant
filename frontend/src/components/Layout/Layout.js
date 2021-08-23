import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";
import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Auxiliary>
);

export default layout;
