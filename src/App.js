import React, { Component } from "react";
import banner from "./kyrgyzstanbanner.jpg";
import "./App.css";
import FetchAPI from "./components/FetchAPI";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Counter from "./components/Counter";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={banner} className="App-logo" alt="logo" />
          <p>
            <Navigation />
          </p>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutme" exact component={AboutMe} />
            <Route path="/contactme" component={ContactMe} />
            <Route path="/weatherforecast" component={FetchAPI} />
          </Switch>{" "}
          <Counter />
          <p>&nbsp;</p>
        </div>
      </Router>
    );
  }
}

export default App;
