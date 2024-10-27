import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {
    setToogleCounter((state) => !state);
  };
  const count = useSelector((state) => state.count);
  const [tooggleCounter, setToogleCounter] = useState(false);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {tooggleCounter && (
        <div className={classes.counterBox}>
          <button>+</button>
          <button>-</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
