import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
  // state = {
  //   cart: 4,
  // };

  // handleCounterChange(value) {
  //   this.props.onCounterChange(value);
  // }

  // handlePlus() {
  //   this.setState({ cart: this.state.cart + 1 }, () =>
  //     this.handleCounterChange(this.state.cart)
  //   );
  // }

  // handleMinus = () => {
  //   if (this.state.cart == 0) {
  //     return;
  //   }
  //   this.setState({ cart: this.state.cart - 1 }, () =>
  //     this.handleCounterChange(this.state.cart)
  //   );
  // };
  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={() => this.props.handleMinus()}>
          -
        </button>
        <input type="text" value={this.props.cart} />
        <button className="plus" onClick={() => this.props.handlePlus()}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMinus: () => dispatch({ type: "MIN_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
