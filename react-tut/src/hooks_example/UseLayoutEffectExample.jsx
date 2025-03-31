import React from 'react'

// 8️⃣ useLayoutEffect – Runs Before Page Updates

export default function UseLayoutEffectExample() {

    const divRef = React.useRef(null);

    React.useLayoutEffect(() => {
        divRef.current.style.color = "red";
    }, []);


  return (
    <div ref={divRef}>This text turns red before paint</div>
  )
}

/*
    📌 What does it do?
        Similar to useEffect, but runs before the browser updates the screen.

        Example: Measuring element sizes before rendering.

    ✅ Where to use it?
        When you need to measure elements before they appear.
*/
