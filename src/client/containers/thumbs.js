import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/thumbs.js'

import ThumbsUp from '../components/thumbs_up.js'
import ThumbsDown from '../components/thumbs_down.js'

export const Thumbs = ({ selectNearMiss, selectPositiveIntervention }) =>
  <div className='tc container h-100 w-100 f_lato f4'>
    <ThumbsDown onClick={selectNearMiss} />
    <ThumbsUp onClick={selectPositiveIntervention} />
  </div>

export default connect(() => ({}), actions)(Thumbs)
