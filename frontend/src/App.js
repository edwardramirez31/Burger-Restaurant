import Checkout from "containers/Checkout/Checkout";
import Orders from "containers/Orders/Orders";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
