import test from 'tape'

import reducer, { initialState } from '../../../src/client/reducers/report.js'
import { SET_PHOTO, SET_POSTING, SET_NAME }
  from '../../../src/client/action_types.js'

test('report: initailState', t => {
  t.equal(initialState.get('isPosting'), false, 'not posting request initially')
  t.equal(initialState.get('name'), '', 'name initially empty string')

  t.end()
})

test('report reducer initialState', t => {
  const newState = reducer(undefined, {})
  t.equal(newState, initialState, 'report reducer')
  t.end()
})

test('report: SET_POSTING', t => {
  const newState = reducer(initialState, { type: SET_POSTING })

  t.equal(newState.get('isPosting'), true, 'sets isPosting to true')

  t.end()
})

test('report: SET_PHOTO', t => {
  const photoData = 'photo data'
  const newState = reducer(
    initialState,
    { type: SET_PHOTO, photoData }
  )
  t.equal(
    photoData,
    newState.get('photoData'),
    'set photo puts photo data in state'
  )
  t.end()
})

test('report reducer: SET_NAME', t => {
  const name = 'name'
  const newState = reducer(initialState, { type: SET_NAME, name })

  t.equal(newState.get('name'), name, 'set the name')

  t.end()
})
