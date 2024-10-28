// import redux from "react-redux";
import { legacy_createStore as createStore } from "redux";

const initialState = { count: 0, showCounter: false };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      count: state.count + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      count: state.count - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toogle") {
    return {
      showCounter: !state.showCounter,
      count: state.count,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
