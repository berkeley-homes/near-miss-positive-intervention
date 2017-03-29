import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Immutable from 'immutable'

import Dropdown from '../../../src/client/components/dropdown.js'

test('dropdown component', t => {
  const value1 = 'o1'
  const value2 = 'o2'
  const optionsData = Immutable.fromJS([value1, value2])
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
    ['', value1, value2],
    'get option tags with correct text'
  )

  const newValue = 'new value'
  wrapper.simulate('change', { target: { value: newValue } })
  t.equal(valueSet, newValue, 'change event passes value')

  t.end()
})
