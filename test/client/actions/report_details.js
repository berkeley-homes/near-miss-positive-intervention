import test from 'tape'

import { setName, setFirstLocation, setSecondLocation, setThirdLocation }
  from '../../../src/client/actions/report_details'
import { SET_NAME, SET_LOCATION } from '../../../src/client/action_types.js'

test('reportDetails container: setName action', t => {
  const name = 'eoin'
  const action = setName(name)

  t.equal(action.type, SET_NAME, 'action type')
  t.equal(action.name, name, 'name in action')

  t.end()
})

test('reportDetails container: setFirstLocation action', t => {
  const location = 'location'
  const action = setFirstLocation(location)

  t.equal(action.type, SET_LOCATION, 'action type')
  t.equal(action.location, location, 'location in action')
  t.equal(action.locationIndex, 0, 'correct index')

  t.end()
})

test('reportDetails container: setSecondLocation action', t => {
  const location = 'location'
  const action = setSecondLocation(location)

  t.equal(action.type, SET_LOCATION, 'action type')
  t.equal(action.location, location, 'location in action')
  t.equal(action.locationIndex, 1, 'correct index')

  t.end()
})

test('reportDetails container: setThirdLocation action', t => {
  const location = 'location'
  const action = setThirdLocation(location)

  t.equal(action.type, SET_LOCATION, 'action type')
  t.equal(action.location, location, 'location in action')
  t.equal(action.locationIndex, 2, 'correct index')

  t.end()
})