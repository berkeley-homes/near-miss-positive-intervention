import React, { Component } from 'react'

class NearMissBtn extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='w-100 h-100'>
        <p className='mb0'>Near Miss</p>
        <img className='w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
      </div>
    )
  }
}

export default NearMissBtn
