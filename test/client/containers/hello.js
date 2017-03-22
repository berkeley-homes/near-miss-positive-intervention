import test from 'tape'
import { shallow } from 'enzyme'
import React from 'react'
import Immutable from 'immutable'

import { Hello, mapStateToProps } from '../../../src/client/containers/hello.js'

test('<hello /> contains title', t => {
  const title = 'Near Miss - Positive Interventions'
  const wrapper = shallow(<Hello title={title} />)
  t.ok(wrapper.text().includes(title), 'includes title')
  t.end()
})

test('hello mapStateToProps', t => {
  const title = 'title'
  const state = Immutable.fromJS({ hello: { title } })
  const props = mapStateToProps(state)

  t.deepEqual(props, { title }, 'title pulled from state')

  t.end()
})
