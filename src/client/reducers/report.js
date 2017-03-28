import Immutable from 'immutable'
import { SET_PHOTO, SET_POSTING, SET_POST_RESULT } from '../action_types.js'

export const initialState = Immutable.Map({
  isPosting: false,
  title: 'Near Miss - Positive Interventions'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return state.set('photoData', action.photoData)
    case SET_POSTING:
      return state.set('isPosting', true)
    case SET_POST_RESULT:
      return state
        .set('isPosting', false)
        .set('payload', action.payload)
        .set('statusCode', action.statusCode)
    default:
      return state
  }
}
