import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import FormMessage from '../../../src/client/components/form_message.js'

test('form message should have in input field', t => {
  const wrapper = shallow(<FormMessage />)
  t.equal(wrapper.contains(<div>
    <input type='text' name='message' placeholder='Enter your message here' />
  </div>), true)
  t.end()
})
