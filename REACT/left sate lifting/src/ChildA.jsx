import { useState } from "react";

export default function ChildA({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Add
    </button>
  );
}

 export  function ChildB({ count }) {
  return <h2>Count: {count}</h2>;
}
