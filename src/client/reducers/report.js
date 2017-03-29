import Immutable from 'immutable'
import { SET_PHOTO, SET_POSTING, SET_NAME, SET_LOCATION, SET_DESCRIPTION }
  from '../action_types.js'

export const initialState = Immutable.fromJS({
  location: [],
  isPosting: false,
  name: '',
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
    case SET_POSTING:
      return state.set('isPosting', true)
    case SET_LOCATION:
      return state.setIn(['location', action.locationIndex], action.location)
    default:
      return state
  }
}