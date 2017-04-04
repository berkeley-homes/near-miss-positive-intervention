import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Thumbs from '../../../src/client/containers/thumbs.js'
import ThumbsUp from '../../../src/client/components/thumbs_up.js'
import ThumbsDown from '../../../src/client/components/thumbs_down.js'

test('Name input component includes input', t => {
  const wrapper = shallow(<Thumbs />)
  t.equal(wrapper.contains(
    <div className='container h-100 w-100'>
      <ThumbsUp />
      <ThumbsDown />
    </div>
  ), true)
  t.end()
})
