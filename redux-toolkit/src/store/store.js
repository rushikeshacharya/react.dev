import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: ToDoSlice,
  },
});
