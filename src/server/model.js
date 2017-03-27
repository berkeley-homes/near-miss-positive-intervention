const { connect } = require('./model/helpers.js')
const { init, submitReport } = require('./model/queries.js')
const { put: saveImage, parsePhotoData } =
  require('./model/image.js')

const register = (server, { connectionOptions }, next) => {
  const query = connect(connectionOptions)

  server.expose('query', query)
  server.expose('init', cb => init(query, cb))
  server.expose('submitReport', (args, cb) => submitReport(query, args, cb))
  server.expose('saveImage', saveImage)
  server.expose('parsePhotoData', parsePhotoData)

  next()
}

register.attributes = {
  name: 'model'
}

module.exports = register
