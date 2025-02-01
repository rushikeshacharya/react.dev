import { useState } from "react";

const Input = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue(""); // Clear input after adding
    }
  };

  return (
    <div className="flex items-center space-x-3 p-4 rounded-lg shadow-md w-96 bg-gray-200 mt-6">
      <input
        className="flex-grow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="w-24 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 active:bg-blue-700 transition"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
