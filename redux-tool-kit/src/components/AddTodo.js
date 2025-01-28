import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todo/todoSlice";


const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
    }
    return <div>AddTodo</div>;
};

export default AddTodo;
