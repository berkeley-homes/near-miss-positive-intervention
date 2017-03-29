import { SET_NAME, SET_LOCATION } from '../action_types.js'

export const setName = name => ({
  type: SET_NAME,
  name
})

const setLocation = locationIndex => location => ({
  type: SET_LOCATION,
  location,
  locationIndex
})

export const setFirstLocation = setLocation(0)

export const setSecondLocation = setLocation(1)

export const setThirdLocation = setLocation(2)