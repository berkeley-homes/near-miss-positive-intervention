import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Hello from './containers/hello.js'
import Camera from './components/camera.js'
render(
  <Provider store={store}>
    <div>
      <Hello />
      <Camera />
    </div>
  </Provider>,
  document.getElementById('app')
)
