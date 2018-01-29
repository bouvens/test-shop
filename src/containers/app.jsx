import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SimpleShop from './simple-shop'
import DetailedInformation from './detailed-information'

export default () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path="/" component={SimpleShop} />
            <Route path="/:id" component={DetailedInformation} />
        </Fragment>
    </BrowserRouter>
)
