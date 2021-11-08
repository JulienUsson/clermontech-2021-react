import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
    opacity: 100%;
  }
  to {
    transform: translate3d(0,-16px,0);
    opacity: 0%;
  }
`;

const Rerender = styled.span({
  position: "absolute",
  animation: `${bounce} 500ms linear`,
  color: "red",
  opacity: 0,
  pointerEvents: "none",
  marginLeft: 16,
});

export function ComponentA() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((old) => old + 1);
  }

  return (
    <div
      style={{ border: "1px solid rgb(64, 71, 86)", padding: 16, width: "80%" }}
    >
      <p style={{ margin: 0 }}>
        Component A <Rerender key={Math.random()}>RERENDER</Rerender>
      </p>
      <button style={{ marginBottom: 16 }} onClick={handleClick}>
        Update state
      </button>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((old) => old + 1);
  }

  return (
    <div
      style={{ border: "1px solid rgb(64, 71, 86)", padding: 16, width: "80%" }}
    >
      <p style={{ margin: 0 }}>
        Component B <Rerender key={Math.random()}>RERENDER</Rerender>
      </p>
      <button style={{ marginBottom: 16 }} onClick={handleClick}>
        Update state
      </button>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((old) => old + 1);
  }

  return (
    <div
      style={{ border: "1px solid rgb(64, 71, 86)", padding: 16, width: "80%" }}
    >
      <p style={{ margin: 0 }}>
        Component C <Rerender key={Math.random()}>RERENDER</Rerender>
      </p>
      <button style={{ marginBottom: 16 }} onClick={handleClick}>
        Update state
      </button>
    </div>
  );
}
