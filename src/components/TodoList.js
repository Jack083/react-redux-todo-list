import React, { useEffect } from "react";
import Todo from './Todo'

function TodoList({ todos, handleFetchTodo, handleToggleTodo, handleDeleteTodo }) {
    useEffect(() => {
        handleFetchTodo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ul className="todo-list" >
            {todos.map(todo =>
                <Todo key={todo._id}
                    todo={todo}
                    onClickComplete={() => handleToggleTodo(todo._id, todo.completed)}
                    onClickDelete={() => handleDeleteTodo(todo._id)}
                />
            )}
        </ul>
    )
}

export default TodoList