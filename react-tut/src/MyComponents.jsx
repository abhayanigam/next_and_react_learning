import React, {useState} from 'react'

export default function MyComponents() {

    const [name, setName] = useState("Bruce");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(true);

    const updateName = () => {
        setName("Clark Kent");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateEmployee = () => {
        setIsEmployee(!isEmployee);
    }

  return (
    <>
        <p>Name : {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age : {age}</p>
        <button onClick={updateAge}>Increament Age</button>

        <p>Employee : {isEmployee ? "Yes" : "No"}</p>
        <button onClick={updateEmployee}>Toggle Employee</button>
    </>
  );
}
