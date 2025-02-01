import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onToggle, onDelete }) => (
  <ul className="mt-6 w-96 bg-white p-4 rounded-lg shadow-md">
    {todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ToDoList;
