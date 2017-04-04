import React, { Component } from 'react'

class NearMissBtn extends Component {
  render () {
    return (
      <div className='pa6 w-100 b-black m2'>
        <div className=''>
          <img className='w-75' src='/img/Thumbs_down_btn_white.svg' alt='myimage' />
          <p className='mt0 white size75'>Near Miss</p>
        </div>
      </div>
    )
  }
}

export default NearMissBtn
