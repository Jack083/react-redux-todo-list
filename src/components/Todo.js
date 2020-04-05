import React from "react";
import PropTypes from 'prop-types'

function Todo({ todo, onClickComplete, onClickDelete }) {

    return (
        <li className="todo-item" >
            <input className="complete-todo" type="checkbox" checked={todo.completed ? "checked" : ''} onChange={onClickComplete} />
            <span>{todo.name}</span>
            <input className="delete-todo" type="button" value="Delete" onClick={onClickDelete} />
        </li>
    )
}

Todo.propTypes = {
    onClickComplete: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default Todo