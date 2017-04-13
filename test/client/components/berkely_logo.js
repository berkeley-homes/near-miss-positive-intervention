import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import BerkeleyLogo from '../../../src/client/components/berkeley_logo.js'

test('<BerkeleyLogo />', t => {
  const wrapper = shallow(<BerkeleyLogo />)
  t.equal(wrapper.contains(
    <img
      className='ml3 mt3 w-25'
      src='/img/Berkeley-Group-logo.png'
      alt='berkeleylogosuccesspage'
    />
  ), true)
  t.end()
})
