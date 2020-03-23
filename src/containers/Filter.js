import { connect } from 'react-redux'
import { changeFilter } from '../actions'
import Filter from '../components/Filter'

const mapDispatchToProps = dispatch => ({
    onClick: filter => dispatch(changeFilter(filter)),
})

export default connect(null, mapDispatchToProps)(Filter)