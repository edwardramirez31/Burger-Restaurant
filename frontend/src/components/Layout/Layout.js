import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";
import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

export default class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        <Toolbar toggleHandler={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closeHandler={this.sideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Auxiliary>
    );
  }
}
