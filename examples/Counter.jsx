import React from "react";

export default function Counter({ name }) {
  const [counter, setCounter] = React.useState(0);

  function handleClick(event) {
    setCounter(counter + 1);
  }

  return (
    <div>
      Hello {name}, you clicked {counter} times{" "}
      <button onClick={handleClick}>click</button>{" "}
      {counter > 5 ? <b>Calmdown !</b> : null}
    </div>
  );
}
