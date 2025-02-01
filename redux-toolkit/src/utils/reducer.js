import { nanoid } from "nanoid";
export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: nanoid(), text: action.text, completed: false }];
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};
