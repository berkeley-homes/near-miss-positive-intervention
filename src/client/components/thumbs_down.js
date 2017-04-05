import React, { Component } from 'react'

class NearMissBtn extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='pa4 pl3 w-100 h-100 mt3'>
        <p className='mb0'>Near Miss</p>
        <img className='w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
      </div>
    )
  }
}

export default NearMissBtn
