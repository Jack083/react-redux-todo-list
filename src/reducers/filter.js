import { Filters } from '../actions'

const filter = (state = Filters.ALL, action) => {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filter