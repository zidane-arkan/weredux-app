// import redux from "react-redux";
// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count += action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;
