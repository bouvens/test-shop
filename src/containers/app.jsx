import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import SimpleShop from './simple-shop'
import DetailedInformation from './detailed-information'
import * as reducers from '../reducers'
import { withError } from '../hoc'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
  ...reducers,
  form: formReducer
}), composeEnhancers(applyMiddleware(thunk)))

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={withError(SimpleShop)} />
        <Route path='/:id' component={withError(DetailedInformation)} />
      </Fragment>
    </BrowserRouter>
  </Provider>
)
