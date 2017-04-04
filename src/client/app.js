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
import LandingPage from './components/landing_page.js'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route
            exact path='/'
            component={LandingPage}
            />
          <Route
            path='/report'
            component={ReportDetails}
            />
          <Route
            path='/success'
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
