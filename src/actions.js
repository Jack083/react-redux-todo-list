import { CONSTANTS } from './constants'

export const fecthTodo = () => ({
    type: CONSTANTS.FETCH_TODOLIST.REQUEST
})


export const addTodo = name => ({
    type: CONSTANTS.ADD_TODO.REQUEST,
    name,
})

export const deleteTodo = id => ({
    type: CONSTANTS.DELETE_TODO.REQUEST,
    id
})

export const toggleTodo = (id, completed) => ({
    type: CONSTANTS.TOGGLE_TODO.REQUEST,
    id,
    completed
})

export const fectchTodoSucceed = (todoList) => ({
    type: CONSTANTS.FETCH_TODOLIST.SUCCEED,
    todoList
})

export const addTodoSucceed = ({ _id, name, completed }) => ({
    type: CONSTANTS.ADD_TODO.SUCCEED,
    _id,
    name,
    completed
})

export const deleteTodoSucceed = id => ({
    type: CONSTANTS.DELETE_TODO.SUCCEED,
    id
})

export const toggleTodoSucceed = ({ _id, completed }) => ({
    type: CONSTANTS.TOGGLE_TODO.SUCCEED,
    _id,
    completed
})

export const fectchTodoFailed = error => ({
    type: CONSTANTS.FETCH_TODOLIST.FAILED,
    error
})

export const addTodoFailed = error => ({
    type: CONSTANTS.ADD_TODO.FAILED,
    error
})

export const deleteTodoFailed = error => ({
    type: CONSTANTS.DELETE_TODO.FAILED,
    error
})

export const toggleTodoFailed = error => ({
    type: CONSTANTS.TOGGLE_TODO.FAILED,
    error
})

export const changeFilter = filter => ({
    type: 'CHANGE_FILTER',
    filter
})

export const Filters = {
    ALL: "All",
    COMPLETED: "Completed",
    INCOMPLETE: "Incomplete"
};

