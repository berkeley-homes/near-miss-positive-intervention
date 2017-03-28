const server = require('./server')

server.start(error => {
  if (error) throw error
  server.plugins.model.init((error) => {
    if (error) throw error
    console.log(`server started on port ${server.info.port}`)
  })
})
