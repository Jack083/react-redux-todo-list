import React, { useState } from "react";

function AddTodo({ handleAddTodo }) {
    const [newTodoName, setNewTodoName] = useState('');
    const handleChange = (event) => {
        const newTodoName = event.target.value
        setNewTodoName(newTodoName)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodoName === '') {
            return
        }
        setNewTodoName('')
        handleAddTodo(newTodoName);
    }
    return (
        <form className="submit-form" onSubmit={handleSubmit}>
            <input autoFocus type="text" placeholder="E.g. Get beat by Jack in Foosball" className="todo-input"
                value={newTodoName} onChange={handleChange}
            />
        </form>
    )
}

export default AddTodo