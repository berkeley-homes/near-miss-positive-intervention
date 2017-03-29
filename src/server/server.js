const Hapi = require('hapi')
const Inert = require('inert')
const path = require('path')
const Vision = require('vision')

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

server.register([Inert, Vision], err => {
  /* istanbul ignore if */
  if (err) throw err
  server.views({
    path: path.join(__dirname, '../../public'),
    engines: {
      html: {
        module: require('handlebars')
      }
    },
    isCached: false
  })
  server.route([
    {
      path: '/{param*}',
      method: 'get',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true
        }
      }
    },
    {
      path: '/uploadphoto',
      method: 'get',
      handler: (request, replay) => {
        replay.view('index')
      }
    },
    {
      path: '/modemonitor',
      method: 'get',
      handler: (request, replay) => {
        replay.view('index')
      }
    },
    {
      path: '/',
      method: 'get',
      handler: (request, replay) => {
        replay.view('index')
      }
    }
  ])
})

module.exports = server
