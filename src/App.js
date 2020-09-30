import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
