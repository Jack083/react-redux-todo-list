import { CONSTANTS } from '../constants'

const todos = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_TODOLIST.SUCCEED:
            return action.todoList
        case CONSTANTS.ADD_TODO.SUCCEED:
            return [
                ...state,
                {
                    _id: action._id,
                    name: action.name,
                    completed: action.completed
                }
            ]
        case CONSTANTS.TOGGLE_TODO.SUCCEED:
            console.log(action)
            return state.map(todo =>
                todo._id === action._id ? { ...todo, completed: action.completed } : todo
            )
        case CONSTANTS.DELETE_TODO.SUCCEED:
            console.log(action)
            return state.filter(todo => todo._id !== action.id)
        default:
            return state
    }
}

export default todos