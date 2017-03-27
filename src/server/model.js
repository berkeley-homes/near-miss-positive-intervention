const { init, submitReport } = require('./model/queries.js')
const { put: saveImage, parsePhotoData } =
  require('./model/image.js')

const bindFirst = (f, arg) => (...args) => f(arg, ...args)

const register = (server, { query, s3 }, next) => {

  server.expose('init', bindFirst(init, query))
  server.expose('submitReport', bindFirst(submitReport, query))
  server.expose('saveImage', bindFirst(saveImage, s3))
  server.expose('parsePhotoData', parsePhotoData)

  next()
}

register.attributes = {
  name: 'model'
}

module.exports = {
  model: register,
  bindFirst
}
