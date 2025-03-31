import React from 'react'

// 9️⃣ useId – Generating Unique IDs

export default function UseIdExample() {
    const id = React.useId();
    return (
      <div>
        <label htmlFor={id}>Name</label>
        <input id={id} type="text" />
      </div>
    );
}

/*
    📌 What does it do?
        Creates unique IDs for elements like form fields.

    ✅ Where to use it?
        When you need unique IDs for elements.
*/