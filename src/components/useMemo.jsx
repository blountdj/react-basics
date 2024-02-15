import { useState } from "react";
import useMemoImg from "../images/useMemo.png";
import referentialEqualityImg from "../images/referentialEquality.png";

export function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  return (
    <section>
      <h1>useMemo</h1>
      <p>
        The useMemo hook in React is like a smart calculator that remembers the
        result of a calculation, so you don't have to recalculate it every time,
        making your app faster and more efficient. It's like caching a value so
        you don't have to compute it everytime.
      </p>
      <h2>Info</h2>
      <p>
        You can use it to cache values that don't change when the component
        reloads, so they don't need to be re-computed everytime the component
        re-loads, saving time.
      </p>
      <h2>Example</h2>
      <img src={useMemoImg} />
      <p>
        In this example, without the useMemo caching the value, then
        slowFunction will return everytime the component is reloaded.
      </p>
      <p>
        You don't want to use it everywhere though because it creates some
        performance and memory overheads. Best used when it is worth it, like
        caching values that otherwise take a long time to compute.
      </p>
      <p>
        The second use case, is regarding referential equality. It is explained
        below:
      </p>
      <img src={referentialEqualityImg} />
    </section>
  );
}
