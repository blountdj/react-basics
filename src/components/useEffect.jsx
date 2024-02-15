import { useEffect, useState } from "react";
import useEffectImage from "../images/useEffect.png";
import useEffectOnMount from "../images/useEffectOnMount.png";
import useEffectOnMount2 from "../images/useEffectOnMount2.png";

export function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("render"), [resourceType];
  });

  return (
    <section>
      <h1>useEffect</h1>
      <p>
        The useEffect hook in React is like a special helper that lets you
        perform certain actions or updates whenever something changes in your
        website, making it more responsive and flexible.
      </p>
      <h2>Example</h2>
      <p>Whenever a button below is clicked the text is updated.</p>
      <p>
        This is managed through useState. If we want to do something for example
        whenever the state changes, we can use useEffect: useEffect(() =>{" "}
        {(console.log("render"), [resourceType])}); So whenever resourceType
        (which is a state) changes, the console.log will run.
      </p>
      <img src={useEffectImage} />
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h3>{`Button selected: ${resourceType}`}</h3>
      <p>
        To get the useEffect to run just once, when the page loads, you can
        leave the away empty, and it'll just run once. Like this:
      </p>
      <img src={useEffectOnMount} />
      <p>
        It is often used to call an API (using Axios when something changes){" "}
      </p>
      <p>
        Here is another example which adds an event listener when the page
        loads:
      </p>
      <img src={useEffectOnMount2} />
    </section>
  );
}
