import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'

import Site from '../../../src/client/components/site.js'

test('<Site />', t => {
  const imgURL = '/path/to/image'
  const wrapper = shallow(
    <Site
      name='goodmans test'
      path='goodmans-test'
      handleSetSite={() => { }}
      imgURL={imgURL}
    />)

  const images = wrapper.find('img')
  t.equal(images.length, 1, 'single image in the component')
  t.equal(images.at(0).node.props.src, imgURL, 'correct image path being used')
  t.end()
})
