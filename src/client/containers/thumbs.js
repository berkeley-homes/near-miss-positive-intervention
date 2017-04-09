import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/thumbs.js'

import ThumbsUpBtn from '../components/thumbs_up.js'
import ThumbsDownBtn from '../components/thumbs_down.js'

export const Thumbs = ({ selectNearMiss, selectPositiveIntervention }) =>
  <div className='h-100 w-100 f_lato f4'>
    <ThumbsDownBtn onClick={selectNearMiss} />
    <ThumbsUpBtn onClick={selectPositiveIntervention} />
  </div>

export default connect(() => ({}), actions)(Thumbs)
