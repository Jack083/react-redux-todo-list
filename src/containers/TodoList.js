import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, fecthTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selector'

const mapStateToProps = state => ({
    todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
    handleToggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
    handleDeleteTodo: id => dispatch(deleteTodo(id)),
    handleFetchTodo: () => dispatch(fecthTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)