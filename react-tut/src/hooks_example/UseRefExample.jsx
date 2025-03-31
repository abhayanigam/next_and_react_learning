import React from 'react'

// 4️⃣ useRef – Keeping Values Without Rerendering

export default function UseRefExample() {
    const inputRef = React.useRef('Abhaya');

    React.useEffect(() => {
      inputRef.current.focus(); // Focus the input field when the page loads
    }, []);
  
    return <input ref={inputRef} placeholder="Type here..." />;
}

/*
    📌 What does it do?
        Stores a value that doesn’t trigger re-rendering.

        Example: Keeping track of an input field for focus.

    ✅ Where to use it?
        Focusing an input field, storing a previous value, 
        or accessing a DOM element.

    Note:   
        DOM elements or to store any mutable 
        value that doesn't trigger a re-render when it changes.
*/