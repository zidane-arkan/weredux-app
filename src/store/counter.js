import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export default counterSlice;
