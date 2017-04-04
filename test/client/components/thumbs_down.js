import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import NearMissBtn from '../../../src/client/components/thumbs_down.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<NearMissBtn />)
  t.equal(wrapper.contains(
    <img className='w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
  ), true)
  t.end()
})
