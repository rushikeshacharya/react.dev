import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
  },
});

console.log(todoSlice);

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

/** todoSlice object
 * {
  name: 'todo',
  reducer: [Function: reducer],
  actions: {
    addTodo: [Function: actionCreator] {
      toString: [Function (anonymous)],
      type: 'todo/addTodo',
      match: [Function (anonymous)]
    }
  },
  caseReducers: { addTodo: [Function: addTodo] },
  getInitialState: [Function: getInitialState],
  reducerPath: 'todo',
  getSelectors: [Function: getSelectors],
  selectors: {},
  selectSlice: [Function: selectSlice],
  injectInto: [Function: injectInto]
}
 */
