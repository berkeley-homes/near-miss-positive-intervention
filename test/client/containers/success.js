import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Success from '../../../src/client/containers/success.js'
import BerkeleyLogo from '../../../src/client/components/berkeley_logo.js'
import ThanksMessage from '../../../src/client/components/thanks_message.js'
import SuccessIllustration from '../../../src/client/components/success_illustration.js'
import HomeBtn from '../../../src/client/components/home_button.js'
test('Success container', t => {
  const wrapper = shallow(<Success />)
  t.plan(4)
  t.equal(wrapper.contains(
    <BerkeleyLogo />
  ), true)
  t.equal(wrapper.contains(
    <ThanksMessage />
  ), true)
  t.equal(wrapper.contains(
    <SuccessIllustration />
  ), true)
  t.equal(wrapper.contains(
    <HomeBtn />
  ), true)
  t.end()
})
