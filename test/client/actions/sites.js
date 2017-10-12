import test from 'tape'
import { setSite, resetSite } from '../../../src/client/actions/sites'
import { SET_SITE, RESET_SITE } from '../../../src/client/action_types'
import createMockDispatch from './mock_thunk'

test('setSite action', t => {
  const { dispatch, calls } = createMockDispatch()
  dispatch(setSite('goodmans'))
  t.deepEqual(
    calls.shift(),
    { type: SET_SITE, site: 'goodmans' },
    'returns correct action data'
  )
  t.end()
})

test('resetSite action', t => {
  const { dispatch, calls } = createMockDispatch()
  dispatch(resetSite('goodmans'))
  t.deepEqual(
    calls.shift(),
    { type: RESET_SITE, site: 'goodmans' },
    'returns correct action data'
  )
  t.end()
})
