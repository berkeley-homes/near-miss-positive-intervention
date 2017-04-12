import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='bb w-100 h3'>
        <img
          className='h3 fl w-third'
          src='/img/nearMiss_nav_logo.svg'
          alt='NearMissLogo'
        />
        <p className='fl w-third pl1p5 pr1p5 pt2'>HOME</p>
        <img
          className='h2 fl w-third pt3'
          src='/img/burger_menu.svg'
          alt='HamburgerMenu'
        />
      </div>
    )
  }
}

export default Header
