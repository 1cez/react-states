import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const azalt = () => {
    setCounter(counter - 1);
  };
  const arttir = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={azalt}>Azalt</button>
      <button onClick={arttir}>Arttır</button>
    </div>
  );
}
