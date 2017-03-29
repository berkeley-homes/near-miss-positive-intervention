import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/report_details'

export const ReportDetails = props => {
  const {
    name,
    setName
  } = props

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export const mapStateToProps = state => ({
  name: state.get('name')
})

export default connect(mapStateToProps, actions)(ReportDetails)
