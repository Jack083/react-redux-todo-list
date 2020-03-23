import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = dispatch => ({
    addTodo: name => dispatch(addTodo(name)),
})

export default connect(null, mapDispatchToProps)(AddTodo)