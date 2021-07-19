import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // Your code below

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect fired on mount");
    // On first render the `count` state is set to the item under the key `counter` of the LocalStorage
    setCount(Number(localStorage.getItem("counter")));
  }, []);
  useEffect(() => {
    console.log("useEffect fired on state change");
    //Everytime the `count` state is changed its value should be store in the LocalStorage, also under the key `counter`
    // setCount(localStorage.setItem("counter", count));
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
