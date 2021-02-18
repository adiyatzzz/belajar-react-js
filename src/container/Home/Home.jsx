// libraries
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// pages
import Product from "../pages/Product/Product";
import LifeCycle from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import Youtube from "../pages/Youtube/Youtube";
import Post from "../pages/BlogPost/Post/Post";

// css
import "./Home.css";

export const RootContext = React.createContext();
const Provider = RootContext.Provider;
class Home extends React.Component {
  state = {
    totalOrder: 0,
  };

  dispatch = (action) => {
    switch (action.type) {
      case "PLUS_ORDER":
        return this.setState({ totalOrder: this.state.totalOrder + 1 });
        break;

      case "MIN_ORDER":
        if (this.state.totalOrder == 0) break;
        return this.setState({ totalOrder: this.state.totalOrder - 1 });
        break;

      default:
        return null;
        break;
    }
  };

  render() {
    return (
      <Router>
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <div className="flex-col">
            <nav>
              <div className="container">
                <NavLink to="/" activeClassName="active" exact>
                  Blog Post
                </NavLink>
                <NavLink to="/youtube" activeClassName="active">
                  Youtube
                </NavLink>
                <NavLink to="/product" activeClassName="active">
                  Product
                </NavLink>
                <NavLink to="/lifecycle" activeClassName="active">
                  Life Cycle
                </NavLink>
              </div>
            </nav>
            <Switch>
              <Route path="/" exact>
                <BlogPost />
              </Route>
              <Route path="/post/:postID">
                <Post />
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
        </Provider>
      </Router>
    );
  }
}

export default Home;
