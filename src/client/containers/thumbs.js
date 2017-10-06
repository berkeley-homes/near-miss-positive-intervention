import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/thumbs.js'

import ThumbsUp from '../components/thumbs_up.js'
import ThumbsDown from '../components/thumbs_down.js'
import Header from '../components/header.js'

export const Thumbs = ({ selectNearMiss, selectPositiveIntervention }) => (
  <div className='vh-100 w-100 f_lato f4 flex flex-column'>
    <Header location={'TYPE'} />
    <div className='flex flex-column h-100'>
      <ThumbsDown onClick={selectNearMiss} />
      <ThumbsUp onClick={selectPositiveIntervention} />
    </div>
  </div>
)

export default connect(() => ({}), actions)(Thumbs)
