import React from 'react';
import {   BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import ProductItem from "./Components/ProductItem";
// import LinkBar from './Components/LinkBar';
import Navbar from './Components/NavBar';

function RouteConfig() {
  return (
    <div>
        <Router>
          {/* <LinkBar/> */}
          <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/product" component={Products} />
                <Route path="/product/:id" component={ProductItem} />    
                <Route path="*" component={()=><h1>404 Not Found</h1>} />


            </Switch>
        </Router>
    </div>
  );
}

export default RouteConfig;
