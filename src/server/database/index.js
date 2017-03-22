const { connect } = require('./helpers.js')
const { init, submitReport } = require('./queries.js')

const register = (server, { connectionOptions }, next) => {
  const query = connect(connectionOptions)

  server.expose('query', query)
  server.expose('init', cb => init(query, cb))
  server.expose('submitReport', (args, cb) => submitReport(query, args, cb))

  next()
}

register.attributes = {
  name: 'data'
}

module.exports = register
