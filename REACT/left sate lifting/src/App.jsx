import { useState } from "react";
import ChildA from "./ChildA";
ChildA;
import {ChildB} from "./ChildA";



export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA setCount={setCount} />
      <ChildB count={count} />
    </>
  );
}
