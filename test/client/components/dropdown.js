import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Immutable from 'immutable'

import Dropdown from '../../../src/client/components/dropdown.js'

test('dropdown component', t => {
  const value1 = 'o1'
  const value2 = 'o2'
  const text1 = 'option 1'
  const text2 = 'option 2'
  const optionsData = Immutable.fromJS([
    { value: value1, text: text1 },
    { value: value2, text: text2 }
  ])
  const value = 'o1'
  let valueSet
  const select = value => { valueSet = value }
  const wrapper = shallow(
    <Dropdown
      options={optionsData}
      value={value}
      select={select}
    />
  )

  const options = wrapper.find('option')
  const optionText = options.map(option => option.text())
  t.deepEqual(
    optionText,
    [text1, text2],
    'get option tags with correct text'
  )

  const newValue = 'new value'
  wrapper.simulate('change', { target: { value: newValue } })
  t.equal(valueSet, newValue, 'change event passes value')

  t.end()
})
