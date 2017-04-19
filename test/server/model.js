const test = require('tape')
const hapi = require('hapi')

const { model, bindFirst } = require('../../src/server/model.js')
const { connectionConfig } = require('./model/test_helpers.js')

test('model plugin exposes correct methods', t => {
  const server = new hapi.Server()

  const plugin = {
    register: model,
    options: { connectionOptions: connectionConfig }
  }

  server.register(plugin, error => {
    t.error(error, 'registers without error')
  })

  t.ok(server.plugins.model, 'plugin exposed')

  t.ok(server.plugins.model.init, 'init function exposed')
  t.ok(server.plugins.model.submitReport, 'submitReport function exposed')
  t.ok(server.plugins.model.sendEmail, 'sendEmail function exposed')
  t.ok(
    server.plugins.model.generateSignedUrl,
    'generateSignedUrl function exposed'
  )
  t.ok(server.plugins.model.getUrl, 'getUrl function exposed')
  t.end()
})

test('bindFirst', t => {
  const adder = (x, y) => x + y
  const addOne = bindFirst(adder, 1)
  t.equal(addOne(1), 2, 'one plus one is two')
  t.end()
})
