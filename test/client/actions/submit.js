import test from 'tape'
import Immutable from 'immutable'

import { submitReport } from '../../../src/client/actions/submit_report.js'
import { SET_POSTING, SET_POST_RESULT } from '../../../src/client/action_types'
import createMockDispatch from './mock_thunk'
import { createPromiseSpy } from '../../helpers/spy.js'

test('submitReport success', t => {
  const status = 200
  const body = 'I am some data'
  const mockResponse = { status, body: JSON.stringify(body) }
  const { calls: requests, spy } = createPromiseSpy({ response: mockResponse })

  const photoData = 'I am a photo'
  const mockState = Immutable.Map({ photoData })
  const { dispatch, calls } = createMockDispatch(mockState, spy)

  dispatch(submitReport()).then(() => {
    t.deepEqual(
      requests,
      [['/report', JSON.stringify({ photo: photoData })]],
      'make one request to report with photo'
    )

    t.deepEqual(
      calls.shift(),
      { type: SET_POSTING },
      'first dispatch SET_POSTING'
    )
    t.deepEqual(
      calls.shift(),
      { type: SET_POST_RESULT, payload: body, status },
      'then we set the result'
    )
    t.equal(calls.length, 0, 'only 2 actions dispached')

    t.end()
  })
})

test('submitReport failure', t => {
  const error = 'I am an error'
  const { spy } = createPromiseSpy({ error })

  const photoData = 'I am a photo'
  const mockState = Immutable.Map({ photoData })
  const { dispatch, calls } = createMockDispatch(mockState, spy)

  dispatch(submitReport()).then(() => {
    t.deepEqual(
      calls[1],
      { type: SET_POST_RESULT, payload: 'I am an error', status: 500 },
      'then we set the result'
    )

    t.end()
  })
})
