import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header className='bb w-100 h3'>
        <div className='fl w-third h3 db'>
          <Link to='/'>
            <img
              className='h3 fl pointer'
              src='/img/nearMiss_nav_logo.svg'
              alt='NearMissLogo'
            />
          </Link>
        </div>
        <div className='fl w-third pt2 center db'>
          <p className='tc'>{this.props.location}</p>
        </div>
        {/* hamburger menu commented out because it has no functionality */}
        <div className='w-third db'>
          <img
            className='h2 fl o-0'
            src='/img/burger_menu.svg'
            alt='HamburgerMenu'
          />
        </div>
      </header>
    )
  }
}

export default Header
