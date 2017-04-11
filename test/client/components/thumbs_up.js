import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThumbsUpBtn from '../../../src/client/components/thumbs_up.js'

test('<ThumbsUpBtn />', t => {
  t.plan(2)
  const wrapper = shallow(<ThumbsUpBtn />)
  t.equal(wrapper.contains(
    <img className='center_img w-55 mt3 h-100'
      src='/img/Thumbs_up_btn_white.svg'
      alt='ThumbsUpImg'
    />
  ), true)
  t.equal(wrapper.contains(
    <p className='mt0 white tc'>Positive Intervention</p>
  ), true)
  t.end()
})
