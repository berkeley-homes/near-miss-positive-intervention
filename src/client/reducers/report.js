import Immutable from 'immutable'
import { SET_PHOTO, SET_POSTING, SET_NAME }
  from '../action_types.js'

export const initialState = Immutable.Map({
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
    case SET_POSTING:
      return state.set('isPosting', true)
    default:
      return state
  }
}
