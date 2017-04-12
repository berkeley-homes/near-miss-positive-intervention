import React, { Component } from 'react'

class ThumbsDown extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='w-100 h-100 pv4'>
        <p className='mb0 tc'>Near Miss</p>
        <img
          className='center db w-55'
          src='/img/Thumbs_down_btn_black.svg'
          alt='ThumbsDownImg'
        />
      </div>
    )
  }
}

export default ThumbsDown
