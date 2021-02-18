import React from "react";

const RootContext = React.createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
  return class ParentComp extends React.Component {
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
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// Consumer
