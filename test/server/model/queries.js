const test = require('tape')

const { init, submitReport } =
  require('../../../src/server/model/queries.js')
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

  const reportType = 'near miss'
  submitReport(query, { reportType })(() => {
    const queryMade = queriesMade[0]

    t.equal(
      queryMade.text.indexOf('INSERT INTO submissions'),
      0,
      'inserts to correct table'
    )
    t.equal(queryMade.args.length, 7, 'with the correct number of arguments')
    t.end()
  })
})

test('submitReport with bad type', t => {
  const { query } = makeMockQuery()

  const reportType = 'not a correct type'

  submitReport(query, { reportType })(error => {
    t.ok(error, 'returns error')
    t.equal(
      error.message,
      'Report submission failed. Bad report type.',
      'inserts to correct table'
    )
    t.end()
  })
})
