import report from './report.js'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

export default combineReducers({
  report,
  routing: routerReducer
})
