import Order from "components/Order/Order/Order";
import React, { Component } from "react";

export class Orders extends Component {
  render() {
    return (
      <div>
        <h2>Your Orders</h2>
        <div>
          <Order />
          <Order />
        </div>
      </div>
    );
  }
}

export default Orders;
