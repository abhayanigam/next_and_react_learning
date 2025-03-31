import React from 'react'

// 2️⃣ useEffect – Running Code After Rendering

export default function UseEffectExample() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => setData(data));
    }
        , []);

    // Dependencies array is empty ([]), 
    // the useEffect function will run only once, 
    // after the initial render. This is useful for running 
    // one-time setup tasks.

    const [numbers, setNumbers] = React.useState([1, 2, 3, 4]);

    React.useEffect(() => {
        console.log("Effect ran!");
    }, [numbers]); // Runs when `numbers` changes


    const updateNumbers = () => {
        setNumbers(prevNumbers => [...prevNumbers, prevNumbers.length + 1]); // Adds the next number
    };



    return (
        <div>
            {data ? data.title : "Loading..."}
            <p>Numbers: {numbers.join(", ")}</p>
            <button onClick={updateNumbers}>Add Number</button>
        </div>
    );
}

/*
    What does it do?
        Runs code after the component is displayed on the screen.

        Example: Fetching data when a page loads.

    Where to use it?
        Fetching API data, setting up event listeners, 
        or updating the title of the page.

    Note :  
        If you pass one or more variables in the dependencies array, 
        the useEffect function will run whenever any of those variables 
        change. This allows you to perform the side effect whenever 
        certain props or state values change.
        
        Code Example : 

        function MyComponent({ userId }) {
        useEffect(() => {
            // Fetch data from an API based on the userId
            fetch(`https://api.example.com/users/${userId}`)
            .then((response) => response.json())
            .then((user) => {
                // Do something with the user data
            });
        }, [userId]); // Run this effect whenever the 'userId' prop changes
}

-----Example Code For Custome Hook:-----

----> [UseFetch.jsx]

        import { useState, useEffect } from "react";

        const useFetch = (url) => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
        }, [url]);

            return [data];
        };

        export default useFetch;

----> [index.jsx]

        import ReactDOM from "react-dom/client";
        import useFetch from "./useFetch";

        const Home = () => {
        const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

        return (
            <>
            {data &&
                data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
                })}
            </>
        );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Home />);
*/