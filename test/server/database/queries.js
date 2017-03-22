const test = require('tape')

const { init, submitReport } =
  require('../../../src/server/database/queries.js')
const { makeMockQuery } = require('./test_helpers.js')

test('build db', t => {
  const { query, queriesMade } = makeMockQuery()

  init(query, err => {
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

  submitReport(
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

  submitReport(query, { reportType }, error => {
    t.ok(error, 'returns error')
    t.equal(
      error.message,
      'Report submission failed. Bad report type.',
      'inserts to correct table'
    )
    t.end()
  })
})
