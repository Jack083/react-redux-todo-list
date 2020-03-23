import React, { Component } from "react";
import Todo from './Todo'

class TodoList extends Component {
    componentDidMount() {
        this.props.dispatchFetchTodo();
    }

    render() {
        console.log(this.props.todos)
        return (
            <ul className="todo-list" >
                {this.props.todos.map(todo =>
                    <Todo key={todo._id}
                        todo={todo}
                        onClickComplete={() => this.props.dispatchToggleTodo(todo._id, todo.completed)}
                        onClickDelete={() => this.props.dispatchDeleteTodo(todo._id)}
                    />
                )}
            </ul>
        )
    }
}

export default TodoList