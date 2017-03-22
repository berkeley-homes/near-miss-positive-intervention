import test from 'tape'
import Immutable from 'immutable'

import reducer, { initialState }
  from '../../../src/client/reducers/upload_photo.js'

test('uploadPhoto reducer', t => {
  const state = Immutable.fromJS({ uploadPhoto: { title: 'old title' } })
  const newState = reducer(state)
  t.equal(newState, state, 'uploadPhoto reducer')
  t.end()
})

test('uploadPhoto reducer initialState', t => {
  const newState = reducer()
  t.equal(newState, initialState, 'uploadPhoto reducer')
  t.end()
})
