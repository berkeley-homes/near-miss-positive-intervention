import test from 'tape'

import reducer, { initialState } from '../../../src/client/reducers/report.js'
import { SET_PHOTO, SET_POSTING, SET_POST_RESULT }
  from '../../../src/client/action_types.js'

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
  const newState = reducer(initialState, { type: SET_POSTING })

  t.equal(newState.get('isPosting'), true, 'sets isPosting to true')

  t.end()
})

test('report: SET_POS_RESULT', t => {
  const statusCode = true
  const payload = 'payload'
  const newState = reducer(
    initialState.set('isPosting', true),
    { type: SET_POST_RESULT, statusCode, payload }
  )

  t.equal(newState.get('isPosting'), false, 'sets isPosting to false')
  t.equal(newState.get('statusCode'), statusCode, 'sets statusCode')
  t.equal(newState.get('payload'), payload, 'sets payload')

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
