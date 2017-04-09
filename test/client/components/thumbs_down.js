import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThumbsDownBtn from '../../../src/client/components/thumbs_down.js'

test('<ThumbsDownBtn />', t => {
  const wrapper = shallow(<ThumbsDownBtn />)
  t.equal(wrapper.contains(
    <img className='center_img w-55'src='/img/Thumbs_down_btn_black.svg' alt='myimage' />
  ), true)
  t.end()
})
