import test from 'tape'

import { selectNearMiss, selectPositiveIntervention }
  from '../../../src/client/actions/thumbs.js'
import { SET_REPORT_TYPE } from '../../../src/client/action_types'
import createMockDispatch from './mock_thunk'

test('selectNearMiss action', t => {
  const { dispatch, calls } = createMockDispatch()
  dispatch(selectNearMiss())

  t.deepEqual(
    { reportType: 'near miss', type: SET_REPORT_TYPE },
    calls.shift(),
    'set report type to near miss'
  )
  t.deepEqual(
    calls.shift().payload,
    { args: [ '/report' ], method: 'push' },
    'then navigates to report'
  )
  t.equal(calls.length, 0, 'then finishes')

  t.end()
})

test('selectPositiveIntervention action', t => {
  const { dispatch, calls } = createMockDispatch()
  dispatch(selectPositiveIntervention())

  t.deepEqual(
    { reportType: 'positive Intervention', type: SET_REPORT_TYPE },
    calls.shift(),
    'set report type to positive Intervention'
  )
  t.deepEqual(
    calls.shift().payload,
    { args: [ '/report' ], method: 'push' },
    'then navigates to report'
  )
  t.equal(calls.length, 0, 'then finishes')

  t.end()
})
