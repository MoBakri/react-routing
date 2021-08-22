import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Posts from "./components/posts";
import Products from "./components/products";
import ProductsDetails from "./components/productsDetails";
import Dashboard from "./components/admin/Dashboard";
const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/Products/:id" component={ProductsDetails} />
          <Route path="/Products" component={Products} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/Posts/:year?/:month?" component={Posts} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
};
export default App;
