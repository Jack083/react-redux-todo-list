import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = dispatch => ({
    handleAddTodo: name => dispatch(addTodo(name)),
})

export default connect(null, mapDispatchToProps)(AddTodo)