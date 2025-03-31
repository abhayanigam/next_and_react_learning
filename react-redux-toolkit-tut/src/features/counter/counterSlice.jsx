import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

// Simulating an API call with a delay
export const fetchCount = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(10), 2000)
    );
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Action 1
    increment: (state) => {
      state.value += 1
    },
    
    // Action 2
    decrement: (state) => {
      state.value -= 1
    },
    
    // Action 3
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },

    // Action 4
    reset: (state) => {
        state.value = 0
      },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.value += action.payload;
        state.loading = false;
      })
      .addCase(fetchCount.rejected, (state) => {
        state.loading = false;
      });
  },
})

export const { increment, decrement, incrementByAmount , reset} = counterSlice.actions

export default counterSlice.reducer