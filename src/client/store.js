/* global XMLHttpRequest */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from './history.js'

const jsonPost = (url, data) => {
  return new Promise(resolve => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        resolve({ status: request.status, body: request.responseText })
      }
    }
    request.open('post', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data)
  })
}

import reducer from './reducers/'

const store = createStore(
   reducer,
   applyMiddleware(
     createLogger({ stateTransformer: state => state.report.toJS() }),
     thunk.withExtraArgument(jsonPost),
     routerMiddleware(history)
   )
)

export default store
