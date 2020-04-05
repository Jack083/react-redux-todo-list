import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.filter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
    [getTodos, getVisibilityFilter],
    (todos, filter) => {
        switch (filter) {
            case 'All':
                return todos
            case 'Completed':
                return todos.filter(t => t.completed)
            case 'Incomplete':
                return todos.filter(t => !t.completed)
            default:
                return todos
        }
    })
