import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '../../node_modules/tachyons/css/tachyons.min.css'
import store from './store'
// import UploadPhoto from './containers/upload_photo.js'
import ReportDetails from './containers/report_details.js'

render(
  <Provider store={store}>
    <div>
      <ReportDetails />
    </div>
  </Provider>,
  document.getElementById('app')
)
