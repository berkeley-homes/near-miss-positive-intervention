import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import HomeBtn from '../../../src/client/components/home_button.js'

test('<HomeBtn />', t => {
  const wrapper = shallow(<HomeBtn />)
  t.equal(wrapper.contains(
    <button className='w-75 h3 bg-white f_lato br-pill center db main_black_font'>BACK TO HOME</button>
  ), true)
  t.end()
})
