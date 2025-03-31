import React from 'react'

// 7️⃣ useReducer – Managing Complex State

export default function UseReducerExample() {
  
    const reducerFunction = (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };

    const initialStateValue = { count: 0 };
    const [state, dispatch] = React.useReducer(reducerFunction, initialStateValue);

    return (
      <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    );
}

/*
    Note:
        const [state, dispatch] = useReducer(reducer, initialState)
        - state: The current state.
        - dispatch: A function that dispatches an action.
        - reducer: A function that returns the new state based on the previous state and an action.
        - initialState: The initial state or value.

    📌 What does it do?
        A better alternative to useState for managing complex state logic.

        Example: A counter with multiple actions.

    ✅ Where to use it?
        When managing complex logic, like shopping cart
        items or form validations.
*/