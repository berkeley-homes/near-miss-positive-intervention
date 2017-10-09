import test from 'tape'

import { selectNearMiss, selectPositiveIntervention }
  from '../../../src/client/actions/thumbs.js'
import { SET_REPORT_TYPE } from '../../../src/client/action_types'
import createMockDispatch from './mock_thunk'
import Immutable from 'immutable'

test('selectNearMiss action', t => {
  const state = Immutable.fromJS({ site: 'test-bad' })
  const { dispatch, calls } = createMockDispatch({ report: state })
  dispatch(selectNearMiss())

  t.deepEqual(
    { reportType: 'near-miss', type: SET_REPORT_TYPE },
    calls.shift(),
    'set report type to near miss'
  )
  t.deepEqual(
    calls.shift().payload,
    { args: ['/report/test-bad/near-miss'], method: 'push' },
    'then navigates to report'
  )
  t.equal(calls.length, 0, 'then finishes')

  t.end()
})

test('selectPositiveIntervention action', t => {
  const state = Immutable.fromJS({ site: 'test-good' })
  const { dispatch, calls } = createMockDispatch({ report: state })
  dispatch(selectPositiveIntervention())

  t.deepEqual(
    { reportType: 'positive-intervention', type: SET_REPORT_TYPE },
    calls.shift(),
    'set report type to positive Intervention'
  )
  t.deepEqual(
    calls.shift().payload,
    { args: ['/report/test-good/positive-intervention'], method: 'push' },
    'then navigates to report'
  )
  t.equal(calls.length, 0, 'then finishes')

  t.end()
})
