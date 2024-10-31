// import redux from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: false };
createSlice({
  name: "counter",
  initialState,
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      count: state.count + action.value,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "toogle") {
    return {
      ...state,
      showCounter: !state.showCounter,
      // count: state.count,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
