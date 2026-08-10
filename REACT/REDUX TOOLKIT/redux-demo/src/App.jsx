
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Redux Counter</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={() => dispatch(decrement())}>-</button>

          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

