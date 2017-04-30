const { runSqlFromFs } = require('./helpers.js')

const init = (query, cb) => {
  runSqlFromFs(query, 'schema', {}, cb)
}

const submitReport = (query, params) => cb => {
  const {
    name,
    locationFirst,
    locationSecond,
    locationThird,
    description,
    reportType,
    photoUrl
  } = params

  if (!['near miss', 'positive intervention'].includes(reportType)) {
    return cb(new Error('Report submission failed. Bad report type.'))
  }

  runSqlFromFs(
    query,
    'submit_report',
    { queryArgs: [
      name,
      locationFirst,
      locationSecond,
      locationThird,
      description,
      reportType,
      photoUrl
    ] },
    err => {
      if (err) return cb(err)
      cb(null, params)
    }
  )
}

module.exports = {
  init,
  submitReport
}
