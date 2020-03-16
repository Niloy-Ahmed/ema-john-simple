import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NoFound from './component/NoFound/NoFound';
import ProductDetail from './component/ProductDatail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Shop">
          <Shop></Shop>
          </Route>
          <Route path ="/Review">
            <Review></Review>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path ="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route path ="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
