import React, { Component } from 'react'
import { connect } from 'react-redux'
import immutable from 'immutable'
import * as actions from '../actions/thumbs.js'
import { push } from 'react-router-redux'
import store from '../store'

import ThumbsUp from '../components/thumbs_up.js'
import ThumbsDown from '../components/thumbs_down.js'
import Header from '../components/header.js'

class Thumbs extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (!this.props.site) {
      store.dispatch(push(`/site`))
    }
  }
  render () {
    let { selectNearMiss, selectPositiveIntervention } = this.props
    return (
      <div className='vh-100 w-100 f_lato f4 flex flex-column'>
        <Header location={'HOME'} />
        <div className='flex flex-column h-100'>
          <ThumbsDown onClick={selectNearMiss} />
          <ThumbsUp onClick={selectPositiveIntervention} />
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ site: immutable.fromJS(state.report.get('site')) }), actions)(Thumbs)
