import test from 'tape'
import { setSite } from '../../../src/client/actions/sites'
import { SET_SITE } from '../../../src/client/action_types'
import createMockDispatch from './mock_thunk'
test('setSite action', t => {
  const { dispatch, calls } = createMockDispatch()
  dispatch(setSite('goodmans'))
  t.deepEqual({ type: SET_SITE, site: 'goodmans' }, calls.shift(), 'returns correct action data')
  t.end()
})
