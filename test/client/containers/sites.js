import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import { Sites } from '../../../src/client/containers/sites.js'
import Site from '../../../src/client/components/site.js'

import * as siteData from '../../../src/client/lib/siteData'

test('<Sites />', t => {
  const wrapper = shallow(<Sites />)
  t.equal(wrapper.find(Site).length, Object.keys(siteData).length, `has ${Object.keys(siteData).length} site components`)
  t.end()
})
