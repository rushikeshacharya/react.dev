const ToDoItem = ({ todo, onToggle, onDelete }) => (
  <li className="flex justify-between items-center gap-3 p-3 border-b last:border-none hover:bg-blue-50 transition rounded-md">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="h-5 w-5 accent-blue-500"
    />
    <span className={`text-gray-700 ${todo.completed ? "line-through" : ""}`}>
      {todo.text}
    </span>
    <button
      className="px-3 py-1 text-sm bg-red-200 rounded-md shadow-md hover:bg-red-600 active:bg-red-700 transition"
      onClick={() => onDelete(todo.id)}
    >
      🗑️
    </button>
  </li>
);

export default ToDoItem;
