import { push } from 'react-router-redux'

import { SET_REPORT_TYPE } from '../action_types.js'
import { nearMiss, positiveIntervention } from '../../constants.js'

export const selectNearMiss = () => (dispatch, getState) => {
  const site = getState().report.get('site')
  dispatch({
    type: SET_REPORT_TYPE,
    reportType: nearMiss
  })
  dispatch(push(`/report/${site}/near-miss`))
}

export const selectPositiveIntervention = () => (dispatch, getState) => {
  const site = getState().report.get('site')
  dispatch({
    type: SET_REPORT_TYPE,
    reportType: positiveIntervention
  })
  dispatch(push(`/report/${site}/positive-intervention`))
}

export const redirectUser = () => dispatch => {
  dispatch(push('/site'))
}
