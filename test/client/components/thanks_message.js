import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThanksMessage from '../../../src/client/components/thanks_message.js'

test('<ThanksMessage />', t => {
  const wrapper = shallow(<ThanksMessage />)
  t.equal(wrapper.contains(<div>
    <p className='tc'>Thanx Pal, </p>
    <p className='tc'>We have recieved your email!</p>
  </div>
), true)
  t.end()
})
