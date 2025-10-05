import { createSlice } from "@reduxjs/toolkit";

/*
  createSlice auto-generates action creators and action types.
  It uses Immer under the hood so you can "mutate" state safely.
*/

const counterSlice = createSlice({
  name: "rtkCounter",
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
