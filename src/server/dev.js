const server = require('./server.js')

server.register([{
  register: require('hapi-webpack-dev-middleware'),
  options: {
    config: require('../../webpack.config.js'),
    options: {
      noInfo: true
    }
  }
}, {
  register: require('hapi-webpack-hot-middleware')
}])

server.start(error => {
  if (error) throw error
  server.plugins.model.init((error) => {
    if (error) throw error
    console.log(`server started on port ${server.info.port}`)
  })
})
