import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import NameInput from '../../../src/client/components/form_nameinput.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<NameInput />)
  console.log(wrapper.html())
  t.equal(wrapper.contains(<div><input type='text' name='fullname' /></div>), true)
  t.end()
})
