const hapi = require('hapi')
const inert = require('inert')
const path = require('path')
const pgConString = require('pg-connection-string')
const vision = require('vision')

require('env2')('.env')
const { model, dbConnect, getS3 } = require('./model.js')

const server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../..', 'public')
      }
    }
  }
})
server.connection({ port: process.env.PORT || 4000 })

const databaseUrl = process.env.DATABASE_URL

const defaultConnectionOptions = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'near_miss_test'
}

const dbConnectionOptions = Object.assign(
  {},
  defaultConnectionOptions,
  databaseUrl
    /* istanbul ignore next */ ? pgConString.parse(databaseUrl)
    : {}
)

const modelPlugin = {
  register: model,
  options: {
    query: dbConnect(dbConnectionOptions),
    s3: createS3(),
    ses: createSes()
  }
}

server.register([inert, vision, modelPlugin], err => {
  server.views({
    engines: { html: require('handlebars') },
    relativeTo: path.join(__dirname, 'handlebars'),
    path: 'views'
  })
  /* istanbul ignore if */
  if (err) throw err
})

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

server.route(require('./routes/submit.js'))

module.exports = server
