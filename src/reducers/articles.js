import { OrderedMap, Map } from 'immutable'
import { TYPES } from '../constants'

export default function (state = OrderedMap(), action) {
  switch (action.type) {
    case TYPES.LOAD_ARTICLES:
      return action.data.reduce(
        (articles, article) => articles.set(
          article.id,
          Map({
            title: article.title,
            cost: article.cost,
            ...state.get(article.id)
          })
        ),
        OrderedMap()
      )
    case TYPES.LOAD_ARTICLE_DETAILS:
    case TYPES.SAVE_ARTICLE:
      return state.set(action.id, Map({
        title: action.title,
        cost: action.cost,
        description: action.description,
        image: action.image
      }))
    default:
      return state
  }
}
