import { SET_NAME, SET_LOCATION, SET_DESCRIPTION, SET_PHOTO }
  from '../action_types.js'
export { submitReport } from './submit_report.js'
import { push } from 'react-router-redux'

export const setName = name => ({
  type: SET_NAME,
  name
})

export const setDescription = description => ({
  type: SET_DESCRIPTION,
  description
})

const setLocation = locationIndex => location => ({
  type: SET_LOCATION,
  location,
  locationIndex
})

export const setPhoto = photo => {
  return {
    type: SET_PHOTO,
    photo
  }
}

export const redirectUser = () => dispatch => {
  dispatch(push('/site'))
}
export const setFirstLocation = setLocation(0)

export const setSecondLocation = setLocation(1)

export const setThirdLocation = setLocation(2)
