// import redux from "react-redux";
// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    authentication: authSliceReducer,
  },
});

export default store;
