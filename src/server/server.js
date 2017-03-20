const Hapi = require('hapi')
const Inert = require('inert')
const path = require('path')

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../..', 'public')
      }
    }
  }
})

server.connection({ port: process.env.PORT || 4000 })

server.register([Inert], err => {
  /* istanbul ignore if */
  if (err) throw err

  server.route({
    path: '/{param*}',
    method: 'get',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  })
})

module.exports = server
