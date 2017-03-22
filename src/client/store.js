import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'

import reducer from './reducers/'

const store = createStore(
   reducer,
   applyMiddleware(createLogger())
 )

export default store
