import React, { useState, useReducer } from "react";
import useReducerImg from "../images/useReducer.png";
import useReducerImg2 from "../images/useReducer2.png";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <section>
      <h1>useReduce</h1>
      <h2>Overview</h2>
      <p>
        `useReducer` is a special tool in React that helps you manage data and
        state changes in a simple way, like using a remote control to change TV
        channels, and it's commonly used for tasks like managing forms, handling
        complex state, or creating interactive components.
      </p>
      <p>
        It is like useState, but it gives you a more concrete way to handle
        complex state. So it gives you set actions that you can perform on your
        state and it's going to convert your current state to a new state based
        on the action that you send it.
      </p>
      <h2>Example</h2>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={decrement}>+</button>
      <p>Code using useState:</p>
      <img src={useReducerImg} />
      <p>Code using useReducer:</p>
      <img src={useReducerImg2} />
      <p>
        It is not that useful in this example where the use case is simple. But
        when handling complex state it is a lot more useful.
      </p>
    </section>
  );
}
