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
      src='/img/nearMiss_nav_logo.svg'
      alt='NearMissLogo'
  />), true)
  t.equal(wrapper.contains(
    <div className='fl w-third pt2 center db'>
      <p className='tc'>HOME</p>
    </div>), true)
  t.equal(wrapper.contains(
    <img
      className='h2 fl w-third pt3'
      src='/img/burger_menu.svg'
      alt='HamburgerMenu'
  />), true)
  t.end()
})
