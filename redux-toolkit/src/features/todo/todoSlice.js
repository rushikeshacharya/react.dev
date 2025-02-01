import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "To Do 1", completed: false },
    { id: 2, text: "To Do 2", completed: true },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    remove: (state, action) => {
      state.todos.map((todo, index) => {
        if (todo.id === action.payload) {
          return state.todos.splice(index, 1);
        }
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;
export default todoSlice.reducer;
