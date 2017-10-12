import { push } from 'react-router-redux'
import { SET_SITE, RESET_SITE } from '../action_types.js'

export const setSite = site => dispatch => {
  dispatch({
    type: SET_SITE,
    site
  })
  dispatch(push(`/thumbs/${site}`))
}

export const resetSite = site => dispatch => {
  dispatch({
    type: RESET_SITE,
    site
  })
  dispatch(push(`/thumbs/${site}`))
}
