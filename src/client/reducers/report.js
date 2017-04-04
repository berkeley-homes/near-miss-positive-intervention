import Immutable from 'immutable'
import {
  SET_PHOTO,
  SET_POSTING,
  SET_NAME,
  SET_LOCATION,
  SET_DESCRIPTION,
  SET_POST_RESULT,
  SET_REPORT_TYPE
} from '../action_types.js'

export const initialState = Immutable.fromJS({
  location: [],
  isPosting: false,
  name: '',
  description: '',
  title: 'Near Miss - Positive Interventions'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return state.set('photoData', action.photoData)
    case SET_NAME:
      return state.set('name', action.name)
    case SET_DESCRIPTION:
      return state.set('description', action.description)
    case SET_REPORT_TYPE:
      return state.set('reportType', action.reportType)
    case SET_POSTING:
      return state.set('isPosting', true)
    case SET_POST_RESULT:
      return state
        .set('isPosting', false)
        .set('payload', action.payload)
        .set('statusCode', action.statusCode)
    case SET_LOCATION:
      const index = action.locationIndex
      return state.update('location', location => location
        .set(index, action.location)
        .map((val, i) => i > index ? '' : val))
    default:
      return state
  }
}
