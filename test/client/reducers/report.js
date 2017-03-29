import test from 'tape'
import Immutable from 'immutable'

import reducer, { initialState } from '../../../src/client/reducers/report.js'
import { SET_PHOTO, SET_POSTING, SET_NAME, SET_LOCATION, SET_DESCRIPTION }
  from '../../../src/client/action_types.js'

test('report reducer: initailState', t => {
  t.equal(initialState.get('isPosting'), false, 'not posting request initially')

  t.equal(initialState.get('name'), '', 'name initially empty string')

  const location = initialState.get('location')
  t.ok(Immutable.List.isList(location), 'location is list')
  t.equal(location.size, 0, 'location list is empty')

  t.equal(initialState.get('description'), '', 'description is empty string')

  t.end()
})

test('report reducer: empty call', t => {
  const newState = reducer(undefined, {})

  t.equal(newState, initialState, 'returns initial state')

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

test('report reducer: SET_LOCATION', t => {
  const location = 'location'

  const newState = reducer(
    initialState,
    { type: SET_LOCATION, location, locationIndex: 1 }
  )
  t.equal(
    newState.getIn(['location', 1]),
    location,
    'sets the location'
  )

  const finalState = reducer(
    newState,
    { type: SET_LOCATION, location, locationIndex: 0 }
  )
  t.equal(
    finalState.getIn(['location', 1]),
    '',
    'setting previous location wipes later locations'
  )

  t.end()
})

test('report reducer: SET_DESCRIPTION', t => {
  const description = 'description'
  const action = { type: SET_DESCRIPTION, description }
  const newState = reducer(initialState, action)

  t.equal(newState.get('description'), description, 'sets the description')

  t.end()
})
