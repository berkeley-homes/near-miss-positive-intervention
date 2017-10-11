import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThanksMessage from '../../../src/client/components/thanks_message.js'

test('<ThanksMessage />', t => {
  const wrapper = shallow(<ThanksMessage reportType={'near-miss'} />)
  t.equal(wrapper.find('p').length, 2, 'success page contains 2 p tags')
  t.end()
})
