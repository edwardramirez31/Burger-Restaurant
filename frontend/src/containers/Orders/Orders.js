import axiosOrders from "axios-orders";
import Order from "components/Order/Order/Order";
import Spinner from "components/UI/Spinner/Spinner";
import React, { Component } from "react";

export class Orders extends Component {
  state = {
    orders: null,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axiosOrders
      .get("/order.json")
      .then((response) => {
        console.log(response.data);
        this.setState({ orders: response.data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <div>
        <h2>Your Orders</h2>
        <div>
          {this.state.orders &&
            Object.keys(this.state.orders).map((key, index) => {
              return <Order key={key} order={this.state.orders[key]} />;
            })}
        </div>
      </div>
    );
  }
}

export default Orders;
