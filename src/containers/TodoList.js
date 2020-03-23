import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, fecthTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selector'

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    dispatchToggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
    dispatchDeleteTodo: id => dispatch(deleteTodo(id)),
    dispatchFetchTodo: () => dispatch(fecthTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)