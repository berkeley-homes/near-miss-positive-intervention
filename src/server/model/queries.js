const { runSqlFromFs } = require('./helpers.js')
const { nearMiss, positiveIntervention } = require('../../constants.js')

const init = (query, cb) => {
  runSqlFromFs(query, 'schema', {}, cb)
}

// run query to get data for weekly email
// args = [ site, location ]
const weekly = (query, cb, args) => {
  let [site, location] = args
  location = location ? location : '';
  runSqlFromFs(query, 'weekly', [site, location], cb)
}

const submitReport = (query, params) => cb => {
  const {
    name,
    locationFirst,
    locationSecond,
    locationThird,
    description,
    reportType,
    photoUrl,
    site
  } = params

  if (![nearMiss, positiveIntervention].includes(reportType)) {
    return cb(new Error('Report submission failed. Bad report type.'))
  }

  runSqlFromFs(
    query,
    'submit_report',
    [
      // query args
      name,
      locationFirst,
      locationSecond,
      locationThird,
      description,
      reportType,
      photoUrl,
      site
    ],
    err => {
      if (err) return cb(err)
      cb(null, params)
    }
  )
}

module.exports = {
  init,
  weekly,
  submitReport
}
