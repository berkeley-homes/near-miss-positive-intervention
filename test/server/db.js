const test = require('tape')

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
  db.runSqlFromFs(mockQuery, 'notafile', error => {
    t.equal(error.message.indexOf('ENOENT'), 0, 'bad path gives ENOENT')
  })

  db.runSqlFromFs(mockQuery, 'schema', error => {
    t.error(error, 'bad path does not give error')
  })
})

test('build db', t => {
  const queriesMade = []
  const mockQuery = (queryStr, cb) => {
    queriesMade.push(queryStr)
    cb()
  }

  db.init(mockQuery, err => {
    t.error(err, 'no error')

    t.ok(
      queriesMade[0] &&
        queriesMade[0].includes('submission_id SERIAL PRIMARY KEY NOT NULL'),
      'schema passed to query'
    )
    t.end()
  })
})
