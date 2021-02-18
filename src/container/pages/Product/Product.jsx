import { React, Component, Fragment } from "react";
import "./Product.css";
import cart from "./img/icon/shopping-cart.svg";
import Card from "./CardProduct/CardProduct";
// import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";

class Product extends Component {
  // state = {
  //   cart: 4,
  // };

  // onCounterChange(newValue) {
  //   this.setState({ cart: newValue });
  // }

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <div className="container-product">
                <div className="header">
                  <div className="logo">
                    <h2>Lonte mart</h2>
                  </div>
                  <div className="troley">
                    <img src={cart} alt="cart" />
                    <div className="count">{value.state.totalOrder}</div>
                  </div>
                </div>
                <Card />
              </div>
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.totalOrder,
  };
};

// export default connect(mapStateToProps)(Product);
export default Product;
