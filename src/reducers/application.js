import { Map } from 'immutable'
import { TYPES } from '../constants'

export default function (state = Map({
    isEdit: false,
    error: null
}), action) {
    switch (action.type) {
        case TYPES.EDIT_ARTICLE:
            return state.set('isEdit', true)
        case TYPES.LOAD_ARTICLES:
        case TYPES.LOAD_ARTICLE_DETAILS:
        case TYPES.SAVE_ARTICLE:
        case TYPES.CANCEL_EDITING:
            return state.set('isEdit', false)
        case TYPES.SET_ERROR:
            return state
                .set('isEdit', false)
                .set('error', Map({
                    description: action.description,
                    object: action.object
                }))
        default:
            return state
    }
}
