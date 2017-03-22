import test from 'tape'
import { shallow } from 'enzyme'
import React from 'react'
import Immutable from 'immutable'

import { UploadPhoto, mapStateToProps } from '../../../src/client/containers/upload_photo.js'

test('<UploadPhoto /> contains title', t => {
  const title = 'Near Miss - Positive Interventions'
  const wrapper = shallow(<UploadPhoto title={title} />)
  t.ok(wrapper.text().includes(title), 'includes title')
  t.end()
})

test('UploadPhoto mapStateToProps', t => {
  const title = 'title'
  const state = Immutable.fromJS({ UploadPhoto: { title } })
  const props = mapStateToProps(state)

  t.deepEqual(props, { title }, 'title pulled from state')

  t.end()
})
