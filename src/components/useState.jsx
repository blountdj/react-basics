import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>useState Example</h1>

      <button>-</button>
      <span>0</span>
      <button>+</button>
    </section>
  );
}
