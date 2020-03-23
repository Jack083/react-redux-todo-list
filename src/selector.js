
export const getVisibleTodos = (todos, filter) => {
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
}
