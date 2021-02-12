import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "../Product/Product";
import LifeCycle from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import Youtube from "../Youtube/Youtube";
import "./Home.css";

class Home extends React.Component {
  // state = {
  //   showComponent: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     });
  //   }, 5000);
  // }

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
