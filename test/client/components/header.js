import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../src/client/components/header.js'

test('Header includes NM Logo, title and menubtn', t => {
  t.plan(3)
  const wrapper = shallow(<Header />)
  t.equal(wrapper.contains(
    <img
      className='h3 fl w-third'
      src='/img/NearMiss_nav_logo.svg'
      alt='NearMissLogo'
  />), true)
  t.equal(wrapper.contains(
    <p className='fl w-third pl1p5 pr1p5 pt2'>HOME</p>), true)
  t.equal(wrapper.contains(
    <img
      className='h2 fl w-third pt3'
      src='/img/Burger_menu.svg'
      alt='HamburgerMenu'
  />), true)
  t.end()
})
