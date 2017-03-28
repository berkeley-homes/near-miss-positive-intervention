import test from 'tape'

import reducer, { initialState } from '../../../src/client/reducers/report.js'
import { SET_PHOTO } from '../../../src/client/action_types.js'

test('report: initailState', t => {
  t.equal(initialState.get('isPosting'), false, 'not posting request initially')

  t.end()
})

test('report reducer initialState', t => {
  const newState = reducer(undefined, {})
  t.equal(newState, initialState, 'report reducer')
  t.end()
})

test('report: SET_POSTING', t => {
  const newState = reducer(initialState, { type: 'SET_POSTING' })

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
