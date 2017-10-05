import '../../node_modules/tachyons/css/tachyons.min.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import history from './history.js'

import store from './store'
import ReportDetails from './containers/report_details.js'
import Success from './containers/success.js'
import Thumbs from './containers/thumbs.js'
import Splash from './components/splash.js'
import Sites from './containers/sites.js'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route
            exact path='/'
            component={Splash}
          />
          <Route
            exact path='/site'
            component={Sites}
          />
          <Route
            path='/thumbs'
            component={Thumbs}
          />
          <Route
            path='/report/:site/:thumbs'
            component={ReportDetails}
          />
          <Route
            path='/success/:site/:thumbs'
            component={Success}
          />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

window.onload = () => {
  render(<App />, document.getElementById('app'))
}
