import test from 'tape'
import Immutable from 'immutable'

import reducer, { initialState }
  from '../../../src/client/reducers/hello.js'

test('hello reducer', t => {
  const state = Immutable.fromJS({ hello: { title: 'old title' } })
  const newState = reducer(state)
  t.equal(newState, state, 'hello reducer')
  t.end()
})

test('hello reducer initialState', t => {
  const newState = reducer()
  t.equal(newState, initialState, 'hello reducer')
  t.end()
})
