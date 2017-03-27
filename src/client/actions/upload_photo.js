import { SET_PHOTO } from '../action_types.js'

export const setPhoto = photoData => {
  return {
    type: SET_PHOTO,
    photoData
  }
}
