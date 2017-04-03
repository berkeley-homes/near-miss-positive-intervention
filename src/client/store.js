/* global XMLHttpRequest */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

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
     createLogger({ stateTransformer: state => state.toJS() }),
     thunk.withExtraArgument(jsonPost)
  )
)

export default store
