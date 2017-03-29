const test = require('tape')

const server = require('../../src/server/server.js')

test('can retrive index html', t => {
  server.inject({ method: 'get', url: '/' }, response => {
    t.equal(response.statusCode, 200, 'receive 200')
    const title = 'Near Miss - Positive Interventions'
    t.ok(response.payload.includes(title), 'payload includes title')
    t.end()
  })
})

test('checks our / GET endpoint', (t) => {
  var options = {
    method: 'GET',
    url: '/'
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, '200 status code returned - ✅')
    server.stop()
    t.end()
  })
})
test('checks our /uploadphoto GET endpoint', (t) => {
  var options = {
    method: 'GET',
    url: '/uploadphoto'
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, '200 status code returned - ✅')
    server.stop()
    t.end()
  })
})

test('checks our /modemonitor GET endpoint', (t) => {
  var options = {
    method: 'GET',
    url: '/modemonitor'
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, '200 status code returned - ✅')
    server.stop()
    t.end()
  })
})
