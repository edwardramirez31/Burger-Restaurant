import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

const Order = ({ order }) => {
  const { customer, ingredients, price } = order;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>
            Price: <strong>${price}</strong>
          </Typography>
          <Typography>Ingredients: </Typography>
          <List>
            {Object.keys(ingredients).map((key, index) => {
              return (
                <ListItem key={key}>
                  <ListItemText primary={`${key}: ${ingredients[key]}`} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Order;
