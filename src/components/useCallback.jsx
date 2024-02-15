import React, { useState, useCallback } from "react";
import { List } from "./List";

export function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <section>
      <h1>useCallback</h1>
      <h2>Overview</h2>
      <p>
        `useCallback` is a useful tool in React that helps you remember and
        reuse functions, like having a handy cheat sheet of your favorite
        recipes, and it's commonly used for optimizing performance and
        preventing unnecessary re-renders in components that depend on
        functions.
      </p>
      <p>
        It's similar to useMemo, except it returns a function, so we can pass
        parameters to it.
      </p>
      <p>Important for delaing with referential equality</p>
      <h2>Examples</h2>
      <p></p>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </section>
  );
}
