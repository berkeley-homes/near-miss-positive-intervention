const { runSqlFromFs } = require('./helpers.js')

const init = (query, cb) => {
  runSqlFromFs(query, 'schema', {}, cb)
}

const submitReport = (
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
  cb
) => {
  if (!['near miss', 'positive intervention'].includes(reportType)) {
    return cb(new Error('Report submission failed. Bad report type.'))
  }

  runSqlFromFs(
    query,
    'submit_report',
    { queryArgs: [
      submitterName,
      locationFirst,
      locationSecond,
      locationThird,
      description,
      reportType,
      photoS3Key
    ] },
    cb
  )
}

module.exports = {
  init,
  submitReport
}
