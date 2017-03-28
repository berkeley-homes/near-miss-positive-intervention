import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import LandingPage from '../../../src/client/components/landing_page.js'
import Logo from '../../../src/client/components/logo.js'
import WelcomeMessage from '../../../src/client/components/welcome_message.js'

test('Landing page includes Logo and Welcome Message', t => {
  t.plan(2)
  const wrapper = shallow(<LandingPage />)
  t.equal(wrapper.contains(<Logo />), true)
  t.equal(wrapper.contains(<WelcomeMessage />), true)
  t.end()
})
