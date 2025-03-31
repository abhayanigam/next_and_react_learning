import React from 'react'

// 6️⃣ useCallback – Avoiding Unnecessary Function Creations

export default function Parent() {
    const [count, setCount] = React.useState(0);
  
    const handleClick = React.useCallback(() => {
      console.log("Button Clicked!");
    }, []);
  
    return (
      <div>
        <p>Count: {count}</p>
        <UseCallbackExample onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
}

function UseCallbackExample({onClick}) {
    return <button onClick={onClick}>Click Me</button>;
}

/*
    📌 What does it do?
        Prevents a function from being recreated unnecessarily.
        
        Example: Stopping unnecessary updates of child components.

    ✅ Where to use it?
        When passing functions to child components that shouldn’t be recreated.
*/