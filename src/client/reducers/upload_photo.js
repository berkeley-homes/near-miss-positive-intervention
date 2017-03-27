import Immutable from 'immutable'
import { SET_PHOTO } from '../action_types.js'
export const initialState = Immutable.Map({
  title: 'Near Miss - Positive Interventions'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return state.set('photoData', action.photoData)
    default:
      return state
  }
}
