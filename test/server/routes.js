const test = require('tape')

const server = require('../../src/server/server.js')

test('can retrieve index html', t => {
  server.inject({ method: 'get', url: '/' }, response => {
    t.equal(response.statusCode, 200, 'receive 200')
    const title = 'Near Miss - Positive Interventions'
    t.ok(response.payload.includes(title), 'payload includes title')
    t.end()
  })
})
test('can retrieve index html', t => {
  server.inject({ method: 'get', url: '/thumbs' }, response => {
    t.equal(response.statusCode, 200, 'receive 200')
    const title = 'Near Miss - Positive Interventions'
    t.ok(response.payload.includes(title), 'payload includes title')
    t.end()
  })
})
test('can retrieve index html', t => {
  server.inject({ method: 'get', url: '/report' }, response => {
    t.equal(response.statusCode, 200, 'receive 200')
    const title = 'Near Miss - Positive Interventions'
    t.ok(response.payload.includes(title), 'payload includes title')
    t.end()
  })
})
test('can retrieve index html', t => {
  server.inject({ method: 'get', url: '/success' }, response => {
    t.equal(response.statusCode, 200, 'receive 200')
    const title = 'Near Miss - Positive Interventions'
    t.ok(response.payload.includes(title), 'payload includes title')
    t.end()
  })
})
