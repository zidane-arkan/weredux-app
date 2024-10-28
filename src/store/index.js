// import redux from "react-redux";
import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "increase") {
    return {
      count: state.count + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
