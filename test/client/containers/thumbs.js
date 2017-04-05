import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import { Thumbs } from '../../../src/client/containers/thumbs.js'
import ThumbsUp from '../../../src/client/components/thumbs_up.js'
import ThumbsDown from '../../../src/client/components/thumbs_down.js'

test('<Thumbs />', t => {
  const wrapper = shallow(<Thumbs />)

  t.equal(wrapper.find(ThumbsDown).length, 1, 'has thumbs down')
  t.equal(wrapper.find(ThumbsUp).length, 1, 'has thumbs up')

  t.end()
})
