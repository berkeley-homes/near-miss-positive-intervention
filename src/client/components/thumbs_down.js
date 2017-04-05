import React, { Component } from 'react'

class NearMissBtn extends Component {
  render () {
    return (
      <div className='flex-thumbsdown'>
        <p className='tc mb0'>Near Miss</p>
        <img className='down-img'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
      </div>
    )
  }
}

export default NearMissBtn
