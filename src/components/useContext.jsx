import React, { useState } from "react";
import { FunctionContextComponent } from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

export function UseContext() {
  return (
    <section>
      <h1>useContext</h1>
      <p>
        The useContext hook in React is like a secret message carrier that
        allows different parts of your app to easily share and access important
        information, like passing a note between friends without anyone else
        knowing.
      </p>
      <p>
        It is used for passing down props all the way down into any children.
      </p>
      <div>
        <h2>Example</h2>
        <ThemeProvider>
          <FunctionContextComponent />
        </ThemeProvider>
      </div>
      <p>
        More details here:
        https://blog.webdevsimplified.com/2020-06/use-context/
      </p>
    </section>
  );
}
