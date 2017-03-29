import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import NearMissBtn from '../../../src/client/components/nearMiss_btn.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<NearMissBtn />)
  t.equal(wrapper.contains(<div>
    <button><img src='' alt='my image' /></button>
  </div>), true)
  t.end()
})
