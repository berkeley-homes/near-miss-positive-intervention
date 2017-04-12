import React, { Component } from 'react'

class ThumbsUp extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='bg-dark-gray w-100 pv4'>
        <img
          className='center_img w-55 mt3 h-100'
          src='/img/Thumbs_up_btn_white.svg'
          alt='ThumbsUpImg'
        />
        <p className='mt0 white tc'>Positive Intervention</p>
      </div>
    )
  }
}

export default ThumbsUp
