import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import HomeBtn from '../../../src/client/components/home_button.js'

test('<HomeBtn />', t => {
  const wrapper = shallow(<HomeBtn />)
  t.equal(wrapper.contains(<div className='w-100 g-bg div-home'>
    <button className='bg-white button'>BACK TO HOME</button>
  </div>
), true)
  t.end()
})
