import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThanksMessage from '../../../src/client/components/thanks_message.js'

test('<ThanksMessage />', t => {
  const wrapper = shallow(<ThanksMessage />)
  t.equal(wrapper.contains(
    <div className='f_francois tc main_black_font f4'>
      <p className='mb0'>Thanx Pal,</p>
      <p className='mt0 lh-copy'>We have recieved your email!</p>
    </div>
  ), true)
  t.end()
})
