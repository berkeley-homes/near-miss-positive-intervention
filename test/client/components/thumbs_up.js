import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import PositiveBtn from '../../../src/client/components/thumbs_up.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<PositiveBtn />)
  t.equal(wrapper.contains(
    <img className='w-75' src='/img/Thumbs_up_btn_black.svg' alt='myimage' />
  ), true)
  t.end()
})
