import test from 'tape'
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import Logo from '../../../src/client/components/logo.js'

test('Logo page includes Photo', t => {
  const wrapper = shallow(<Logo />)
  console.log(wrapper.html());
  t.equal(wrapper.contains(<div><img src='' alt='Logo' /></div>), true)
  t.end()
})
