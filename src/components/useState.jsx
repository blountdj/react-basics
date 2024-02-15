import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <section>
      <h1>useState</h1>
      <p>
        The useState hook in React is like a powerful tool that allows you to
        store and update information in your website, making it dynamic and
        interactive.
      </p>
      <h2>Info</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h2>Example</h2>
      <p>const [count, setCount] = useState(4)</p>
      <ul>
        <li>Here 4 is the initial state</li>
        <li>count is the current state</li>
        <li>
          setCount is the function that allows you to use the current state
        </li>
        <li></li>
      </ul>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </section>
  );
}
