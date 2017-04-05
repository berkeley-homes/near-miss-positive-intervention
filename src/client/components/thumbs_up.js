import React, { Component } from 'react'

class PositiveBtn extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div onClick={onClick} className='g-bg pl3 pa4 w-100 h-100'>
        <img className='w-55' src='/img/Thumbs_up_btn_white.svg' alt='myimage' />
        <p className='mt0 white'>Positive Intervention</p>
      </div>
    )
  }
}

export default PositiveBtn
