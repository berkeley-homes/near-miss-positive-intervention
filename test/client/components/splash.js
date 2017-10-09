import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'

import Splash from '../../../src/client/components/splash.js'

test('<Splash />', t => {
  const wrapper = shallow(<Splash />)

  const images = wrapper.find('img')

  t.equal(images.length, 2, 'two images')
  t.ok(
    images.at(0).node.props.src.includes('onboarding_logo'),
    'first img is onboarding logo'
  )
  t.ok(
    images.at(1).node.props.src.includes('Berkeley-Group-logo'),
    'second image is logo'
  )

  t.end()
})
