import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset, fetchCount } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  // const count = useSelector((state) => state.counter.value);
  const { value, loading } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function handleIncrementClcik(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncrementByAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  function handleFetchCountClick() {
    dispatch(fetchCount());
  }

  return (
    <div>
      <button onClick={handleIncrementClcik}>+</button>
      <h1>Counter: {loading ? "Loading..." : value}</h1>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/>
      <br/>
      <input 
        type = 'Number'
        value = {amount}
        placeholder="Enter Amount"
        onChange= {(e) => setAmount(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleIncrementByAmountClick}>IncrementByAmount</button>
      <br />
      <br />
      <button onClick={handleFetchCountClick}>Fetch Count</button>
    </div>
  )
}

export default App


/*
  Steps:
    1. Create store
    2. wrap app component under Provider
    3. create slice
    4. register reducer in store
*/