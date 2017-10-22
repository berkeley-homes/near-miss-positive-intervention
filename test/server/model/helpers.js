const test = require('tape')

const { makeMockQuery, connectionConfig } = require('./test_helpers')
const { connect, runSqlFromFs } =
  require('../../../src/server/model/helpers.js')

test('connect to database', t => {
  t.doesNotThrow(
    () => { connect(connectionConfig) },
    'does not throw'
  )

  t.end()
})

test('run some queries', t => {
  const query = connect(connectionConfig)

console.log(query.toString());
  t.plan(4)
  query('nonsence', [], error => {
    t.ok(error, 'bad query returns error')
    t.equal(
      error.message,
      'syntax error at or near "nonsence"',
      'error message is correct'
    )
  })

  query('SELECT datname FROM pg_database', [], (error, result) => {
    t.error(error, 'good query does not throw error')
    t.ok(result, 'good query has truthy result')
  })
})

test('runSqlFromFs', t => {
  const { query } = makeMockQuery()

  t.plan(2)
  runSqlFromFs(query, 'notafile', {}, error => {
    t.equal(error.message.indexOf('ENOENT'), 0, 'bad path gives ENOENT')
  })

  runSqlFromFs(query, 'schema', {}, error => {
    t.error(error, 'bad path does not give error')
  })
})
