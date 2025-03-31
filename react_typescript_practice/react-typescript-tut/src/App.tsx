import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment, decrement, incrementByAmount } from "./features/counterSlice";


function App() {

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App

/*
  Explanation:
      useSelector() → Accesses counter.value from Redux store.
      useDispatch() → Dispatches Redux actions (increment, decrement, etc.).
      Buttons:
      dispatch(increment()) → Increments by 1.
      dispatch(decrement()) → Decrements by 1.
      dispatch(incrementByAmount(5)) → Increments by 5.
*/