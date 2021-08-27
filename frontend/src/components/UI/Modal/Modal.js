import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const activeProps = nextProps.isActive !== this.props.isActive;
    const childrenProps = nextProps.children !== this.props.children;
    return activeProps || childrenProps;
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop
          show={this.props.isActive}
          clicked={this.props.handleModalClicked}
        />
        <div
          className="Modal"
          style={{
            transform: this.props.isActive
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.isActive ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
