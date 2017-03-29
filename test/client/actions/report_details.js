import test from 'tape'

import { setName } from '../../../src/client/actions/report_details'
import { SET_NAME } from '../../../src/client/action_types.js'

test('reportDetails container: setName action', t => {
  const name = 'eoin'
  const action = setName(name)

  t.equal(action.type, SET_NAME, 'action type')
  t.equal(action.name, name, 'name in action')

  t.end()
})
