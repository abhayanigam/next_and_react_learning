import Button from "./Button/Button"
import Card from "./Card"
import List from "./List"
import NewButton from "./NewButton"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import MyComponents from "./MyComponents"
import Counter from "./Counter"
import OnChangeExample from "./OnChangeExample"
import UseStateExample from "./hooks_example/UseStateExample"
import UseEffectExample from "./hooks_example/UseEffectExample"
import { ThemeProvider, ThemeToggleButton } from "./hooks_example/UseContext.jsx";
import UseRefExample from "./hooks_example/UseRefExample";
import UseMemo from "./hooks_example/UseMemo";
import UseCallbackExample from "./hooks_example/UseCallbackExample";
import UseReducerExample from "./hooks_example/UseReducerExample";
import UseLayoutEffectExample from "./hooks_example/UseLayoutEffectExample";
import UseIdExample from "./hooks_example/UseIdExample";

function App() {

  const names = ["Bruce", "Clark", "Diana"];

  const fruits = [
    { name: "Apple", colories: 100 },
    { name: "Banana", colories: 200 },
    { name: "Cherry", colories: 300 },
  ];

  return (
    <>
      {/* <Card />
      <Card />
      <Card /> */}

      {/* .Css Methods: 1: In-line, 2: Module, 3: index.css  */}
      {/* <Button /> */}

      {/* Props Example */}
      <Student name='Spongebob' age={30} isStudent = {true}/>

      {/* Conditional rendering : allows you to control what gets rendered in your
                                  application based on certain conditions(show, hide, or change components)
      */}
      <UserGreeting isLoggedIn={true} username={1} />
    
      {/*Rendering List: */}
      <List fruits={fruits} names = {names}/>
    
      {/*
        Click Event: An interaction when a user clicks on a specific element.
                    We can responde to click by passing a callback to the onclick event handler.
       */}
      <NewButton />

      {/* 
        React Hook: A Special Function  that allows functional components to use react features
                    without writing class components .
                    (useState, useEffect, useContext, useReducer, useCallback etc).

        useState: A React hook that allows the creation of a stateful variable AND a setter function 
                to update its value in the Virtual DOM. [name, setterFunction]
      */} 
      <MyComponents />
      <Counter />

      {/* 
        onChange: event handler used primarily with form elements ex. <input>, <textarea>, <select>
                  <radio>, <checkbox> etc.
                  Triggers a function every time the value of the input changes.
      */}
      <OnChangeExample />

      {/* ---------------Hooks Example--------------- */}
      {/* For More : https://medium.com/@xspaces2011/react-hooks-in-detail-8a72f3cff1e2 */}

      {/* 1. UseState : */}
      <UseStateExample />

      {/* 2. UseEffect: */}
      <UseEffectExample />    

      {/*❌ 3. UseContext: */}
      <ThemeProvider>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>UseContext Example</h1>
          <ThemeToggleButton />
        </div>
      </ThemeProvider>

      {/*❌ 4. UseRef: */}
      <UseRefExample />

      {/* 5. UseMemo: */}
      <UseMemo />

      {/*❌ 6. UseCallback: */}
      <UseCallbackExample />

      {/* 7. UseReducer: */}
      <UseReducerExample />

      {/*❌ 8. UseLayoutEffect: */}
      <UseLayoutEffectExample />

      {/* 9. UseId: */}
      <UseIdExample />
    </>
  )
}

export default App
