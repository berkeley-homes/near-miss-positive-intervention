const Hapi = require('hapi')
const Inert = require('inert')
const path = require('path')
require('env2')('.env')

const { model, dbConnect, getS3 } = require('./model.js')

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

const dbConnectionOptions = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'near_miss_test'
}

const modelPlugin = {
  register: model,
  options: {
    query: dbConnect(dbConnectionOptions),
    s3: getS3()
  }
}

server.register([Inert, modelPlugin], err => {
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
