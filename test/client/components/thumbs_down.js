import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThumbsDown from '../../../src/client/components/thumbs_down.js'

test('<ThumbsDown />', t => {
  t.plan(2)
  const wrapper = shallow(<ThumbsDown />)
  t.equal(wrapper.contains(
    <p className='mb0 tc'>Near Miss</p>
  ), true)
  t.equal(wrapper.contains(
    <img className='center_img w-55'
      src='/img/Thumbs_down_btn_black.svg'
      alt='ThumbsDownImg'
    />
  ), true)
  t.end()
})
