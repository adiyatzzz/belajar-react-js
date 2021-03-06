import React from "react";
import "./LifeCycleComp.css";
// import { connect } from "react-redux";
import { GlobalConsumer } from "../../../context/context";

class LifeCycleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <h2>Life Cycle</h2>
        <hr />
        <button className="btn" onClick={() => this.changeCount()}>
          Component Btn {this.state.count}
        </button>
        <hr />
        <p>Total Order : {this.props.state.totalOrder}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
