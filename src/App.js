
// import './App.css';

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div className="">
          <Router>
            <div>
            <Header></Header>
              <Switch>
              <Route exact path="/">
                  <Shop/>
                </Route>
                <Route path="/shop">
                  <Shop/>
                </Route>
                <Route path="/review">
                  <Review/>
                </Route>
                <Route path="/inventory">
                  <Inventory/>
                </Route>
                <Route path="*">
                   <NoMatch/>
                </Route>
              </Switch>
            </div>
          </Router>
    </div>
  );
}

export default App;
