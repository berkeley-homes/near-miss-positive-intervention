import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import PositiveBtn from '../../../src/client/components/positive_btn.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<PositiveBtn />)
  t.equal(wrapper.contains(<div>
    <button><img src='' alt='my image' /></button>
  </div>), true)
  t.end()
})
