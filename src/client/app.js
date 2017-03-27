import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'css!/node_modules/tachyons/css/tachyons.min.css'
import store from './store'
import UploadPhoto from './containers/upload_photo.js'

render(
  <Provider store={store}>
    <div>
      <UploadPhoto />
    </div>
  </Provider>,
  document.getElementById('app')
)
