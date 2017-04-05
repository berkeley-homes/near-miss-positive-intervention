const test = require('tape')
const hapi = require('hapi')

const { model } = require('../../../src/server/model.js')
const submit = require('../../../src/server/routes/submit.js')
const { createAsyncSpy } = require('../../helpers/spy.js')

const mockPayload = {
  description: 'description',
  photo: 'data:image/png;base64,iVBO',
  locationFirst: 'l1',
  locationSecond: 'l2',
  locationThird: 'l3',
  reportType: 'near miss'
}

test('submit endpoint with photo', t => {
  const { spy: querySpy, calls: queryCalls } = createAsyncSpy()
  const { spy: s3Spy, calls: s3Calls } = createAsyncSpy()
  const s3 = { putObject: s3Spy }

  const server = new hapi.Server()
  server.connection({})
  server.register({ register: model, options: { query: querySpy, s3 } })
  server.route(submit)

  const requestOptions = {
    method: 'POST',
    url: '/report',
    payload: mockPayload
  }
  server.inject(requestOptions, response => {
    t.equal(response.statusCode, 200, 'status code 200')
    t.equal(s3Calls.length, 1, 'one s3 call')

    t.equal(queryCalls.length, 1, 'one query to db attempted')
    t.ok(
      queryCalls[0][0].includes('INSERT INTO submissions'),
      'query to submission table'
    )

    const queryArgs = queryCalls[0][1]
    t.equal(s3Calls[0][0].Key, queryArgs[6], 'key generated for s3 sent to db')

    t.end()
  })
})

test('submit endpoint with s3 error', t => {
  const errMsg = new Error('this is an error')
  const { spy: querySpy, calls: queryCalls } = createAsyncSpy()
  const { spy: s3Spy } = createAsyncSpy(errMsg)
  const s3 = { putObject: s3Spy }

  const server = new hapi.Server()
  server.connection({})
  server.register({ register: model, options: { query: querySpy, s3 } })
  server.route(submit)

  const requestOptions = {
    method: 'POST',
    url: '/report',
    payload: mockPayload
  }
  server.inject(requestOptions, response => {
    t.equal(response.statusCode, 500, 'status code 500')
    t.equal(queryCalls.length, 0, 'does not query db')

    t.end()
  })
})

test('submit endpoint without photo', t => {
  const { spy: querySpy, calls: queryCalls } = createAsyncSpy()
  const { spy: s3Spy, calls: s3Calls } = createAsyncSpy()
  const s3 = { putObject: s3Spy }

  const server = new hapi.Server()
  server.connection({})
  server.register({ register: model, options: { query: querySpy, s3 } })
  server.route(submit)

  const requestOptions = {
    method: 'POST',
    url: '/report',
    payload: {
      description: 'description',
      locationFirst: 'l1',
      locationSecond: 'l2',
      locationThird: 'l3',
      reportType: 'near miss'
    }
  }
  server.inject(requestOptions, response => {
    t.equal(response.statusCode, 200, 'status code 200')

    t.equal(s3Calls.length, 0, 'no call to s3')
    t.equal(queryCalls.length, 1, 'but we still make a call to database')

    t.end()
  })
})
