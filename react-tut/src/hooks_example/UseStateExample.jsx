import React from 'react'

// 1️⃣ useState – Storing Values (State)

export default function UseStateExample() {

    const [count, setCount] = React.useState(0);

    // const increment = () =>{
    //     setCount(count + 1);
    // };

    function increment (){
        setCount(count + 1);
    };

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => increment()}>Increment</button>
    </div>
  );
}

/*
    What does it do?
      Lets a component store information (state) that can change over time.
      
      Example: A counter that increases when you click a button.

    Note:
        when using normal function call like this onClick={increment}

        when using Arrow function call like this onClick={()=>increment()}
*/