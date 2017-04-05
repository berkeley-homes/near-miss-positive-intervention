import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='height60 pl3 bb w-100'>
        <div className='fl w-25 pa2  height50 mr4'>
          <img className='height50' src='/img/NearMiss_nav_logo.svg' alt='berlogo' />
        </div>
        <div className='fl w-25 pa2 pl3 pr4'>
          <p className='mt3'>HOME</p>
        </div>
        <div className='fl w-25 pa2 height50 mt1 ml4'>
          <img src='/img/Burger_menu.svg' alt='hammenu' />
        </div>
      </div>

    )
  }
  }

export default Header
