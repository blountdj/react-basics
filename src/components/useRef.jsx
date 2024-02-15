import { useState, useRef, useEffect } from "react";
import useRefImg from "../images/useRef.png";
import useRefImg2 from "../images/useRef2.png";
import useRefImg3 from "../images/useRef3.png";

export function UseRef() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <section>
      <h1>useMemo</h1>
      <p>
        The useRef hook in React is like a sticky note that helps you remember
        and access values across renders, like keeping track of a score in a
        game.
      </p>
      <p>
        A ref is similar to state, it persists between renders of your
        component. However, a ref does not cause your component to re-render
        when it gets changed.
      </p>
      <h2>Example</h2>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
      </div>
      <div>
        <p>Code:</p>
        <img src={useRefImg} />
      </div>
      <div>
        <p>
          One of the biggest use cases is to reference elements inside your
          html. So each element can have a ref.
        </p>
        <h2>Example2</h2>
        <div>
          <p>
            Here the input field has a ref, and this ref is used to perform an
            action on the field (focus on it)
          </p>
          <input
            ref={inputRef}
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          <div>My name is {name2}</div>
          <button onClick={focus}>Focus</button>
        </div>
        <div>
          <p>Code:</p>
          <img src={useRefImg2} />
        </div>
        <div>
          Another use-case case for useRef is storing the previous value of a
          state, because these don't get used elsewhere. For example:
          <img src={useRefImg3} />
        </div>
      </div>
    </section>
  );
}
