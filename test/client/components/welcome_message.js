import test from 'tape'
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import WelcomeMessage from '../../../src/client/components/welcome_message.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<WelcomeMessage />)
  t.equal(wrapper.contains(<div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the</p>
      </div>), true)
  t.end()
})
