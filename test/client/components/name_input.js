import test from 'tape'
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import NameInput from '../../../src/client/components/name_input.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<NameInput />)
  console.log(wrapper.html());
  t.equal(wrapper.contains(<div><input type='text' name='fullname' /></div>), true)
  t.end()
})
