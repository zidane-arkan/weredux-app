// import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const show = useSelector((state) => state.counter.showCounter);

  // const toggleCounterHandler = () => {
  //   setToogleCounter((state) => !state);
  // };

  const incrementHandler = () => dispatch(counterActions.increment());
  const increaseByTen = () => dispatch(counterActions.increase(10));
  const decrementHandler = () => dispatch(counterActions.decrement());

  const toggleCounterHandler = () => dispatch(counterActions.toogle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      {show && (
        <div className={classes.counterBox}>
          <button onClick={incrementHandler}>+</button>
          <button onClick={increaseByTen}>+ 10</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
