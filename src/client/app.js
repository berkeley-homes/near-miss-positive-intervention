import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Hello from './containers/hello.js'

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('app')
)
