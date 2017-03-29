import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import DropDownIII from '../../../src/client/components/form_dropdown3.js'
import count from '../helpers/word_counter.js'

test('form has dropdownI', t => {
  t.plan(2)
  const wrapper = shallow(<DropDownIII />)
  const optionsNumber = (count(wrapper.html(), 'option')) / 2
  t.ok(wrapper.html().includes('select'))
  t.equal(optionsNumber, 4)
  t.end()
})
