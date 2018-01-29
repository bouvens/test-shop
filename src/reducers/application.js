import { Map } from 'immutable'
import { TYPES } from '../constants'

export default function (state = Map({
    isEdit: false
}), action) {
    switch (action.type) {
        case TYPES.EDIT_ARTICLE:
            return state.set('isEdit', true)
        case TYPES.LOAD_ARTICLES:
        case TYPES.LOAD_ARTICLE_DETAILS:
        case TYPES.SAVE_ARTICLE:
            return state.set('isEdit', false)
        default:
            return state
    }
}
