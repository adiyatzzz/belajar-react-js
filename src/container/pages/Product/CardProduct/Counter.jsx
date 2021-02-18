import React from "react";
// import { connect } from "react-redux";
import { GlobalConsumer } from "../../../../context/context";
class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MIN_ORDER" })}
        >
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
//     handleMinus: () => dispatch({ type: "MIN_ORDER" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);
