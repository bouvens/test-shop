import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import './index.css'
import { App } from './containers'
import * as reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || // eslint-disable-line no-underscore-dangle
    compose
const store = createStore(combineReducers({
    ...reducers,
    form: formReducer
}), composeEnhancers(applyMiddleware(thunk)))

render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.querySelector('#root')
)
