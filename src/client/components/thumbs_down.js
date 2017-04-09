import React, { Component } from 'react'

class ThumbdsDownBtn extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='w-100 h-100 pv4'>
        <p className='mb0 tc'>Near Miss</p>
        <img className='center_img w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
      </div>
    )
  }
}

export default ThumbdsDownBtn
