const test = require('tape')
const Hapi = require('hapi')
const { waterfall } = require('async')

const model = require('../../src/server/data.js')
const { connectionConfig } = require('./data/test_helpers.js')

test('model plugin exposes correct methods', t => {
  const server = new Hapi.Server()

  const plugin = {
    register: model,
    options: { connectionOptions: connectionConfig }
  }

  server.register(plugin, error => {
    t.error(error, 'registers without error')
  })

  t.ok(server.plugins.data, 'plugin exposed')

  t.ok(server.plugins.data.query, 'query function exposed')
  t.ok(server.plugins.data.init, 'init function exposed')
  t.ok(server.plugins.data.submitReport, 'submitReport function exposed')
  t.ok(server.plugins.data.saveImage, 'saveImage function exposed')
  t.ok(
    server.plugins.data.generateImageKeyName,
    'generateImageKeyName function exposed'
  )
  t.end()
})

test('model plugin integration test', t => {
  const server = new Hapi.Server()

  const plugin = {
    register: model,
    options: { connectionOptions: connectionConfig }
  }

  server.register(plugin, error => {
    t.error(error, 'registers without error')
  })

  const { query, init, submitReport } = server.plugins.data

  const submitterName = 'sam'
  const locationFirst = 'block1'
  const locationSecond = 'floor2'
  const locationThird = 'room3'
  const description = 'car crash'
  const reportType = 'near miss'
  const photoS3Key = '123.png'

  const submissionData = {
    submitterName,
    locationFirst,
    locationSecond,
    locationThird,
    description,
    reportType,
    photoS3Key
  }

  let submissionId
  waterfall([
    init,
    (result, cb) => {
      t.ok(result, 'init success')
      cb()
    },
    cb => {
      submitReport(submissionData, cb)
    },
    (result, cb) => {
      t.ok(result && result.rows, 'get data back from submission')
      t.equal(result.rows.length, 1, 'submission returns one row')
      submissionId = result.rows[0].submission_id
      t.ok(submissionId, 1, 'submission returns one row')
      query(`SELECT * FROM submissions WHERE submission_id=${submissionId}`, cb)
    },
    (result, cb) => {
      t.ok(result, 'get back submitted report')
      cb()
    }
  ], (error, result) => {
    t.error(error, 'no error')
    t.end()
  })
})
