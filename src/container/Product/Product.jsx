import { React, Component, Fragment } from "react";
import "./Product.css";
import cart from "./img/icon/shopping-cart.svg";
import Card from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    cart: 4,
  };

  onCounterChange(newValue) {
    this.setState({ cart: newValue });
  }

  render() {
    return (
      <Fragment>
        <div className="container-product">
          <div className="header">
            <div className="logo">
              <h2>Lonte mart</h2>
            </div>
            <div className="troley">
              <img src={cart} alt="cart" />
              <div className="count">{this.state.cart}</div>
            </div>
          </div>
          <Card
            onCounterChange={(newValue) => this.onCounterChange(newValue)}
          />
        </div>
      </Fragment>
    );
  }
}

export default Product;
