import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='height50 bb w-100'>
        <div>
          <img className='fl w-25  height50 width50' src='/img/NearMiss_nav_logo.svg' alt='berlogo' />
        </div>
        <div>
          <p className='fl w-25'>title</p>
          </div>
          <div>
            <img className='fl w-25 height50 ' src='/img/Burger_menu.svg' alt='hammenu' />
          </div>

        </div>
      )
    }
  }

  export default Header
