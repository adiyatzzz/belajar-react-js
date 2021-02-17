import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
  state = {
    cart: 4,
  };

  handleCounterChange(value) {
    this.props.onCounterChange(value);
  }

  handlePlus() {
    this.setState({ cart: this.state.cart + 1 }, () =>
      this.handleCounterChange(this.state.cart)
    );
  }

  handleMinus = () => {
    if (this.state.cart == 0) {
      return;
    }
    this.setState({ cart: this.state.cart - 1 }, () =>
      this.handleCounterChange(this.state.cart)
    );
  };
  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <button className="minus" onClick={() => this.handleMinus()}>
          -
        </button>
        <input type="text" value={this.props.cart} />
        <button className="plus" onClick={() => this.handlePlus()}>
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

export default connect(mapStateToProps)(Counter);
