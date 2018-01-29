import axios from 'axios'
import { API, TYPES } from '../constants'

const myRequest = axios.create({
    baseURL: API.BASE
})

export const loadArticles = () => (dispatch) => myRequest
    .get(API.PRODUCTS)
    .then((response) => {
        dispatch({
            type: TYPES.LOAD_ARTICLES,
            data: response.data
        })
    })

const getProductUrl = (id) => `${API.ONE_PRODUCT_PREFIX}${id}`
const saveResponse = (dispatch) => (response) => {
    dispatch({
        ...response.data,
        type: TYPES.LOAD_ARTICLE_DETAILS
    })
}

export const loadOneArticle = (id) => (dispatch) => myRequest
    .get(getProductUrl(id))
    .then(saveResponse(dispatch))

export const editArticle = () => ({ type: TYPES.EDIT_ARTICLE })

export const saveArticle = (article) => (dispatch) => myRequest
    .post(getProductUrl(article.id), article)
    .then(saveResponse(dispatch))
