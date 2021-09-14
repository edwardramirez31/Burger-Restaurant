import { Box, Button, Container, TextField } from "@material-ui/core";
import axiosOrders from "axios-orders";
import Spinner from "components/UI/Spinner/Spinner";
import React, { Component } from "react";

export class ContactOrder extends Component {
  state = {
    isLoading: false,
    customer: {
      name: null,
      lastName: null,
      location: null,
      postalCode: null,
    },
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const data = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: this.state.customer,
    };
    axiosOrders
      .post("/order.json", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  onChangeHandler = (event) => {
    this.setState((prevState) => {
      return {
        customer: {
          ...prevState.customer,
          [event.target.name]: event.target.value,
        },
      };
    });
  };
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <Container maxWidth="sm">
        <h4>Contact Info</h4>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: " center",
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={this.state.customer.name}
              onChange={this.onChangeHandler}
            />
            <br />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              name="lastName"
              value={this.state.customer.lastName}
              onChange={this.onChangeHandler}
            />
            <br />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              name="location"
              value={this.state.customer.location}
              onChange={this.onChangeHandler}
            />
            <br />
            <TextField
              label="Postal Code"
              variant="outlined"
              fullWidth
              name="postalCode"
              value={this.state.customer.postalCode}
              onChange={this.onChangeHandler}
            />
            <br />
            <Button
              onClick={this.orderHandler}
              variant="contained"
              color="primary"
              fullWidth
            >
              ORDER NOW
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

export default ContactOrder;
