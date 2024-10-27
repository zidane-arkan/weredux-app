import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    setToogleCounter((state) => !state);
  };

  const incrementHandler = () => dispatch({ type: "increment" });
  const decrementHandler = () => dispatch({ type: "decrement" });

  const count = useSelector((state) => state.count);
  const [tooggleCounter, setToogleCounter] = useState(false);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      {tooggleCounter && (
        <div className={classes.counterBox}>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
