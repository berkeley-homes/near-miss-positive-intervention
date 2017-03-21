const test = require('tape')
const path = require('path')

const db = require('../../src/server/db.js')

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
    () => { db.startConnection(connectionConfig) },
    'does not throw'
  )

  t.end()
})

test('run some queries', t => {
  const query = db.startConnection(connectionConfig)

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
  const mockQuery = (_, cb) => { cb() }

  t.plan(2)
  db.runSqlFromFs(mockQuery, path.join(__dirname, 'notafile'), error => {
    t.equal(error.message.indexOf('ENOENT'), 0, 'bad path gives ENOENT')
  })

  db.runSqlFromFs(mockQuery, path.join(__dirname, 'mock_sql.txt'), error => {
    t.error(error, 'bad path does not give error')
  })
})
