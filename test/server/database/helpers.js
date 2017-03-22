const test = require('tape')

const { makeMockQuery } = require('./test_helpers')
const { connect, runSqlFromFs } =
  require('../../../src/server/database/helpers.js')

const connectionConfig = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'near_miss_test',
  idleTimeoutMillis: 1 // so test does not hang
}

test('connect to database', t => {
  t.doesNotThrow(
    () => { connect(connectionConfig) },
    'does not throw'
  )

  t.end()
})

test('run some queries', t => {
  const query = connect(connectionConfig)

  t.plan(4)
  query('nonsence', error => {
    t.ok(error, 'bad query returns error')
    t.equal(
      error.message,
      'syntax error at or near "nonsence"',
      'error message is correct'
    )
  })

  query('SELECT datname FROM pg_database', (error, result) => {
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
