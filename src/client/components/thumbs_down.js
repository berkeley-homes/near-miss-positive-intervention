import React, { Component } from 'react'

class NearMissBtn extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='w-100 h-100 thumbs-down mt4 pa3'>
        <p className='mb0 tc'>Near Miss</p>
        <img className='w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
      </div>
    )
  }
}

export default NearMissBtn
