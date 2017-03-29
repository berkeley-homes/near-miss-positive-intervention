import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import SendBtn from '../../../src/client/components/form_sendbtn.js'

test('form has send button', t => {
  const wrapper = shallow(<SendBtn />)
  t.equal(wrapper.contains(<div>
    <button type='button'>Send</button>
  </div>), true)
  t.end()
})
