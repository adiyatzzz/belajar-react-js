import actionType from "./globalActionType";

const globalState = {
  totalOrder: 0,
};

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case actionType.PLUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
      break;

    case actionType.MINUS_ORDER:
      // minimum totalOrder value
      let totalOrder = 0;
      if (state.totalOrder > 0) {
        totalOrder = state.totalOrder - 1;
      }
      return {
        ...state,
        totalOrder: totalOrder,
      };
      break;
    default:
      return state;
      break;
  }
};

export default rootReducer;
