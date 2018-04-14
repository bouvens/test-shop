import React from 'react'
import { render } from 'react-dom'
import { App } from './containers'
import './index.css'

render(<App />, document.querySelector('#app'))

module.hot.accept()
