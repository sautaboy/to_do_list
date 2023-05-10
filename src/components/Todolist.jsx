import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputList] = useState('');

    const inputList = (event) => {
        setInputList(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue !== '') {
            setTodos([...todos, inputValue]);
            setInputList('');
        }
    };

    const addTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className='toDoList '>
            <h1>Todo List</h1>
            <div className='inputAndButton'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={inputList}
                    placeholder="Enter a new todo..."
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>



            <ul>
                {todos.map((todo, index) => (
                    <li className='addedItem' key={index}>
                        <h2> {todo}</h2>
                        <button onClick={() => addTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
