import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodoName: ''
        }
    }
    handleChange = (event) => {
        const newTodoName = event.target.value
        this.setState({ newTodoName })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { newTodoName } = this.state
        if (newTodoName === '') {
            return
        }
        this.setState({
            newTodoName: '',
        })
        this.props.addTodo(newTodoName);

    }
    render() {
        return (
            <form className="submit-form" onSubmit={this.handleSubmit}>
                <input autoFocus type="text" placeholder="E.g. Get beat by Jack in Foosball" className="todo-input"
                    value={this.state.newTodoName} onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default AddTodo