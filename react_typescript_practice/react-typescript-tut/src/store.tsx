import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

// configure and create the redux store
export const store = configureStore({
    reducer: {
        counter: counterReducer, // Register the counter slice
    },
});

// Define types for typescript support 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
    Explanation:
        configureStore() → Creates the Redux store.
        reducer: { counter: counterReducer } → Registers the counterSlice reducer.
        RootState → Extracts the global state type.
        AppDispatch → Type for Redux dispatch function.
*/