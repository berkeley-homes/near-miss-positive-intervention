import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThumbsUp from '../../../src/client/components/thumbs_up.js'

test('<ThumbsUp />', t => {
  t.plan(2)
  const wrapper = shallow(<ThumbsUp />)
  t.equal(wrapper.contains(
    <img className='center db w-65 h-100'
      src='/img/Thumbs_up_btn_white.svg'
      alt='ThumbsUpImg'
    />
  ), true)
  t.equal(wrapper.contains(
    <p className='mt0 white tc'>Positive Intervention</p>
  ), true)
  t.end()
})
