import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <label>{count}</label>
      <button onClick={Increment}>+</button>
      <br /><br />
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
