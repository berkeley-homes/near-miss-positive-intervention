import React, { Component } from 'react'

import ThumbsUp from '../components/thumbs_up.js'
import ThumbsDown from '../components/thumbs_down.js'

class Thumbs extends Component {
  render () {
    return (
      <div className='container'>
        <ThumbsDown />
        <ThumbsUp />
      </div>
    )
  }
}
export default Thumbs
