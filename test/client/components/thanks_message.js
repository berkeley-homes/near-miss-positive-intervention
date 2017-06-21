import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import ThanksMessage from '../../../src/client/components/thanks_message.js'

test('<ThanksMessage />', t => {
  const wrapper = shallow(<ThanksMessage />)
  t.equal(wrapper.contains(
    <div className='f_francois tc main_black_font f4'>
      <p className='mb0'>Thank you,</p>
      <p className='mt0 lh-copy pa4'>your Near miss or Positive intervention has been recorded.</p>
    </div>
  ), true)
  t.end()
})
