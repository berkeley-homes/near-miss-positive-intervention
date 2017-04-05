import React, { Component } from 'react'

class PositiveBtn extends Component {
  render () {
    return (
      <div className='g-bg flex-thumbsup'>
        <img className='up-img' src='/img/Thumbs_up_btn_white.svg' alt='myimage' />
        <p className='mt0 tc white'>Positive Intervention</p>
      </div>
    )
  }
}

export default PositiveBtn
