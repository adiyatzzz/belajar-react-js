// libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Product from "../pages/Product/Product";
import LifeCycle from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import Youtube from "../pages/Youtube/Youtube";

// css
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div className="flex-col">
          <nav>
            <div className="container">
              <Link to="/">Blog Post</Link>
              <Link to="/youtube">Youtube</Link>
              <Link to="/product">Product</Link>
              <Link to="/lifecycle">Life Cycle</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact>
              <BlogPost />
            </Route>
            <Route path="/youtube">
              <Youtube />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/lifecycle">
              <LifeCycle />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
