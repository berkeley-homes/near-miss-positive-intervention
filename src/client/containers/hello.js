import React from 'react'
import { connect } from 'react-redux'

export const Hello = ({ title }) => <p>{title}</p>

export const mapStateToProps = (state) => {
  return {
    title: state.getIn(['hello', 'title'])
  }
}

export default connect(mapStateToProps)(Hello)
