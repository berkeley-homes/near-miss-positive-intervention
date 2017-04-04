import { push } from 'react-router-redux'

import { SET_REPORT_TYPE } from '../action_types.js'

export const selectNearMiss = () => dispatch => {
  dispatch({
    type: SET_REPORT_TYPE,
    reportType: 'near miss'
  })
  dispatch(push('/report'))
}

export const selectPositiveIntervention = () => dispatch => {
  dispatch({
    type: SET_REPORT_TYPE,
    reportType: 'positive Intervention'
  })
  dispatch(push('/report'))
}
