import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'

import reducer from './reducers/'

const store = createStore(
   reducer,
   applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
 )

export default store
