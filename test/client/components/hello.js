import test from 'tape'
import { shallow } from 'enzyme'
import React from 'react'

import Hello from '../../../src/client/components/hello.js'

test('<hello /> contains title', t => {
  const wrapper = shallow(<Hello />)
  const title = 'Near Miss - Positive Interventions'

  t.ok(wrapper.text().includes(title), 'includes title')
  t.end()
})
