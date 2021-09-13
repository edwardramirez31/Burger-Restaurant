import Burger from "components/Burger/Burger";
import React from "react";
import "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>Have fun</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default CheckoutSummary;
