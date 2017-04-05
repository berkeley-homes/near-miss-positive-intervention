import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='bb w-100 pa1'>
        <div className='height50'>
          <div className='fl w-25  height50 pl1'>
            <img  className="height50" src='/img/NearMiss_nav_logo.svg' alt='berlogo' />
          </div>
          <div className='fl w-10 pl5'>
            <p className='mt3'>HOME</p>
            </div>
            <div className='fl w-10 height50 mt3 ml6'>
              <img src='/img/Burger_menu.svg' alt='hammenu' />
            </div>
          </div>
      </div>

      )
    }
  }

  export default Header
