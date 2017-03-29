import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '../../node_modules/tachyons/css/tachyons.min.css'
import { Match } from 'react-router-dom'
import store from './store'
import UploadPhoto from './containers/upload_photo.js'
import ModeMonetor from './containers/mood_monetor.js'
import LandingPage from './components/landing_page.js'

const App = () => {
  return (
    <Provider
      store={store}>
      <div>
        <Match
          exactly pattern='/'
          component={LandingPage}
          />
        <Match
          pattern='/uploadphoto'
          component={UploadPhoto}
          />
        <Match
          pattern='/modemoentor'
          component={ModeMonetor}
          />
      </div>
    </Provider>
  )
}


window.onload = () => {
  render(<App />, document.getElementById('app'))
}
