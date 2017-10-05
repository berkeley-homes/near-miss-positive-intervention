import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThumbsUp from '../../../src/client/components/thumbs_up.js'

test('<ThumbsUp />', t => {
  t.plan(2)
  const wrapper = shallow(<ThumbsUp />)
  t.ok(wrapper.find('img').length === 1)
  t.ok(wrapper.find('p').length === 1)
  t.end()
})
