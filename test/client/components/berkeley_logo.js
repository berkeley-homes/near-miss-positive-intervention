import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import BerkeleyLogo from '../../../src/client/components/berkeley_logo.js'

test('<BerkeleyLogo />', t => {
  const wrapper = shallow(<BerkeleyLogo />)
  t.equal(wrapper.contains(<div className=''>
    <img className='berkeley-logo' src='/img/Berkeley-Group-logo.png' alt='myimage' />
  </div>
), true)
  t.end()
})
