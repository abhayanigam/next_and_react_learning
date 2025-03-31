import React from 'react'

export default function NewButton() {

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} was clicked!`);

    const handleEvent = (event) => event.target.textContent = "OUCH!";

  return (
    <>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick2("Bruce")}>Click Me</button>
        <button onClick={() => handleEvent(event)}>Click Me</button>
    </>
  );
}
