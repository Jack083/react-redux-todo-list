import React from "react"
import PropTypes from 'prop-types'
import { Filters } from '../actions'

const Filter = ({ onClick }) => {
    return (
        <li className="todo-filter">
            {Object.values(Filters).map(filter => <input type="button" className="filter" key={filter} value={filter} onClick={() => onClick(filter)} />)}
        </li>
    )
}

Filter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired,
}

export default Filter