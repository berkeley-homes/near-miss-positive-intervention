import { push } from 'react-router-redux'

import { SET_POSTING, SET_POST_RESULT } from '../action_types.js'

export const setPostResult = response => ({
  type: SET_POST_RESULT,
  payload: JSON.parse(response.body),
  status: response.status
})

export const setPostResultError = error => ({
  type: SET_POST_RESULT,
  payload: error,
  status: 500
})

export const submitReport = () => (dispatch, getState, jsonPost) => {
  const state = getState().report

  dispatch({ type: SET_POSTING })

  const [locationFirst, locationSecond, locationThird] =
    state.get('location').toArray()

  const body = JSON.stringify({
    photo: state.get('photoData'),
    description: state.get('description'),
    name: state.get('name'),
    locationFirst,
    locationSecond,
    locationThird,
    reportType: state.get('reportType')
  })
  return jsonPost(`/report`, body)
    .then(response => {
      dispatch(setPostResult(response))
      // dispatch(push('/success'))
    })
    .catch(error => { dispatch(setPostResultError(error)) })
}
