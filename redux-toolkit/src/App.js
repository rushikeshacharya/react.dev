import { useReducer } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

import "./App.css";
import { reducer } from "./utils/reducer";

const initialToDos = [
  { id: 1, text: "To Do 1", completed: false },
  { id: 2, text: "To Do 2", completed: true },
];

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialToDos);

  const addTodo = (text) => {
    dispatch({ type: "add", text: text });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete", id: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle", id: id });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <Header />
      <Input onAdd={addTodo} />
      <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

/**
 * App with useState
 */
// import { useReducer, useState } from "react";
// import { nanoid } from "nanoid";
// import Header from "./components/Header";
// import Input from "./components/Input";
// import ToDoList from "./components/ToDoList";

// import "./App.css";
// const App = () => {
//   const [todos, setTodos] = useState(initialToDos);
//   const addTodo = (text) => {
//     setTodos([...todos, { id: nanoid(), text, completed: false }]);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
//       <Header />
//       <Input onAdd={addTodo} />
//       <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
//     </div>
//   );
// };

export default App;
