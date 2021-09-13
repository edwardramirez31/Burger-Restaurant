import Burger from "components/Burger/Burger";
import Button from "components/UI/Button/Button";
import React from "react";
import "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>Have fun</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button variant="Danger" clicked={props.onCancelHandler}>
        CANCEL
      </Button>
      <Button variant="Success" clicked={props.onContinueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
