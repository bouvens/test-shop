import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SimpleShop from './simple-shop'
import DetailedInformation from './detailed-information'
import { withError } from '../hoc'

export default () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path="/" component={withError(SimpleShop)} />
            <Route path="/:id" component={withError(DetailedInformation)} />
        </Fragment>
    </BrowserRouter>
)
