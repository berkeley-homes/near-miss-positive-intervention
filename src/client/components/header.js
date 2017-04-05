import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='bb w-100'>
        <div className='height50'>
          <div className='fl w-30  height50 width50'>
            <img  className="height50" src='/img/NearMiss_nav_logo.svg' alt='berlogo' />
          </div>
          <div className='fl w-30 pl4 pr2'>
            <p>HOME</p>
            </div>
            <div className='fl w-30 height50 mt2 pl4'>
              <img src='/img/Burger_menu.svg' alt='hammenu' />
            </div>
          </div>
      </div>

      )
    }
  }

  export default Header
