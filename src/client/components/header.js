import React from 'react'

const Header = () => {
  return (
    <div className='bb w-100 h3'>
      <img
        className='h3 fl w-third'
        src='/img/nearMiss_nav_logo.svg'
        alt='NearMissLogo'
        />
      <div className='fl w-third pt2 center db'>
        <p className='tc'>HOME</p>
      </div>
      <img
        className='h2 fl w-third pt3'
        src='/img/burger_menu.svg'
        alt='HamburgerMenu'
        />
    </div>
  )
}

export default Header
