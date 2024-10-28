// import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const show = useSelector((state) => state.showCounter);
  console.log(show);
  // const toggleCounterHandler = () => {
  //   setToogleCounter((state) => !state);
  // };

  const incrementHandler = () => dispatch({ type: "increment" });
  const increaseByTen = () => dispatch({ type: "increase", value: 10 });
  const decrementHandler = () => dispatch({ type: "decrement" });

  const toggleCounterHandler = () => dispatch({ type: "toogle" });

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
