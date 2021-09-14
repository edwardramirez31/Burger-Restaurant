import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const Order = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>Price: $5.00</Typography>
          <Typography>Ingredients: Salad (1)</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Order;
