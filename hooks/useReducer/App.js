import React, { act, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

/**
 * useReducer(reducerFn, initialValue, initializerFn?)
 * 1. create Reducer Function(state, action)
 * 2. create initial state
 * 3. init reducer variable
 */

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "completed": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    case "delete": {
      return state.filter((todo) => todo.id !== action.id);
    }
    case "add": {
      return [...state, { id: 4, title: "Todo 4", completed: false }];
    }
    default: {
      return state;
    }
  }
};

const App = () => {
  //   const [todos, setTodos] = useState(initialTodos);

  const [todos, dispatch] = useReducer(reducer, initialTodos);
  //   const handleComplete = (todo) => {
  //     const result = todos.map((td) => {
  //       if (td.id === todo.id) {
  //         return { ...td, completed: !td.completed };
  //       } else {
  //         return td;
  //       }
  //     });
  //     setTodos(result);
  //   };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              //   onChange={() => handleComplete(todo)}
              onChange={() => dispatch({ type: "completed", id: todo.id })}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
