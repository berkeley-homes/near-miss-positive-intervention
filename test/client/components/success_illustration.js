import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import SuccessIllustration from '../../../src/client/components/success_illustration.js'

test('<SuccessIllustration />', t => {
  const wrapper = shallow(<SuccessIllustration />)
  t.equal(wrapper.contains(
    <img
      src='/img/Success_page_illustration.svg'
      alt='successIllustration'
    />
  ), true)
  t.end()
})
