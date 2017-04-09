import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='bb w-100 h3'>
        <img className='h3 fl w-third' src='/img/NearMiss_nav_logo.svg' alt='berlogo' />
        <p className='fl w-third pl1p5 pr1p5'>HOME</p>
        <img className='h2 fl w-third pt3' src='/img/Burger_menu.svg' alt='hammenu' />
      </div>
    )
  }
}

export default Header
