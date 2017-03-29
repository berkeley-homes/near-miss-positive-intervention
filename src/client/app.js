import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '../../node_modules/tachyons/css/tachyons.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import UploadPhoto from './containers/upload_photo.js'
import ModeMonitor from './containers/mood_monitor.js'
import LandingPage from './components/landing_page.js'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route
            exact path='/'
            component={LandingPage}
            />
          <Route
            path='/uploadphoto'
            component={UploadPhoto}
            />
          <Route
            path='/modemonitor'
            component={ModeMonitor}
            />
        </div>
      </Router>
    </Provider>
  )
}

window.onload = () => {
  render(<App />, document.getElementById('app'))
}
