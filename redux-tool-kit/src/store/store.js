import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todo/todoSlice";

export default store = configureStore({
  reducer: todoReducer,
});
