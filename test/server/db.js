const test = require('tape')

const db = require('../../src/server/db.js')

const makeMockQuery = () => {
  const queriesMade = []
  return {
    queriesMade,
    query: (queryStr, queryArgs, cb) => {
      queriesMade.push({
        text: queryStr,
        args: queryArgs
      })
      cb()
    }
  }
}

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
  const { query } = makeMockQuery()

  t.plan(2)
  db.runSqlFromFs(query, 'notafile', {}, error => {
    t.equal(error.message.indexOf('ENOENT'), 0, 'bad path gives ENOENT')
  })

  db.runSqlFromFs(query, 'schema', {}, error => {
    t.error(error, 'bad path does not give error')
  })
})

test('build db', t => {
  const { query, queriesMade } = makeMockQuery()

  db.init(query, err => {
    t.error(err, 'no error')

    const queryText = queriesMade[0] && queriesMade[0].text
    t.ok(
      queryText &&
        queryText.includes('submission_id SERIAL PRIMARY KEY NOT NULL'),
      'schema passed to query'
    )
    t.end()
  })
})

test('submitReport', t => {
  const { query, queriesMade } = makeMockQuery()

  const submitterName = 'sam'
  const locationFirst = 'block1'
  const locationSecond = 'floor2'
  const locationThird = 'room3'
  const description = 'car crash'
  const reportType = 'near miss'
  const photoS3Key = '123.png'

  db.submitReport(
    query,
    {
      submitterName,
      locationFirst,
      locationSecond,
      locationThird,
      description,
      reportType,
      photoS3Key
    },
    () => {
      const queryMade = queriesMade[0]

      t.equal(
        queryMade.text.indexOf('INSERT INTO reports'),
        0,
        'inserts to correct table'
      )
      t.equal(queryMade.args.length, 7, 'with the correct number of arguments')
      t.end()
    }
  )
})

test('submitReport with bad type', t => {
  const { query } = makeMockQuery()

  const reportType = 'not a correct type'

  db.submitReport(query, { reportType }, error => {
    t.ok(error, 'returns error')
    t.equal(
      error.message,
      'Report submission failed. Bad report type.',
      'inserts to correct table'
    )
    t.end()
  })
})
