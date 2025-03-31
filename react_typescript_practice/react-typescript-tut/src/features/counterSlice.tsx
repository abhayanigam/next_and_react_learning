import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Export actions for components to use
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer for store.tsx
export default counterSlice.reducer;

/*
    Explanation:
        createSlice() → Simplifies Redux reducer creation.
        State (initialState) → Contains a value property.
        Reducers:
            increment() → Increases state value.
            decrement() → Decreases state value.
            incrementByAmount(action.payload) → Increases value by a given amount.
*/