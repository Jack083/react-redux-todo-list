import React from "react"
import PropTypes from 'prop-types'
import { Filters } from '../actions'

function Filter({ handleChangeFilter }) {
    return (
        <li className="todo-filter">
            {Object.values(Filters).map(filter => <input type="button" className="filter" key={filter} value={filter} onClick={() => handleChangeFilter(filter)} />)}
        </li>
    )
}

Filter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    handleChangeFilter: PropTypes.func.isRequired,
}

export default Filter