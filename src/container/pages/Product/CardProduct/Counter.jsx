import React from "react";
// import { connect } from "react-redux";
import { RootContext } from "../../../Home/Home";
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
      <RootContext.Consumer>
        {(value) => {
          return (
            <div className="counter">
              <button
                className="minus"
                onClick={() => value.dispatch({ type: "MIN_ORDER" })}
              >
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button
                className="plus"
                onClick={() => value.dispatch({ type: "PLUS_ORDER" })}
              >
                +
              </button>
            </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMinus: () => dispatch({ type: "MIN_ORDER" }),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
