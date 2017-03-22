const pg = require('pg')
const fs = require('fs')
const path = require('path')

const startConnection = connectionConfig => {
  const poolConfig = {
    idleTimeoutMillis: 30000,
    max: 10
  }
  const config = Object.assign({}, poolConfig, connectionConfig)

  const pool = new pg.Pool(config)

  /* istanbul ignore next */
  pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
  })

  // wrapper around pg.pool.connect to make query simple
  return (...queryArgsWithCb) => {
    const numQueryArgs = queryArgsWithCb.length - 1
    const cb = queryArgsWithCb[numQueryArgs]
    const queryArgs = queryArgsWithCb.slice(0, numQueryArgs)
    pool.connect((connectionError, client, done) => {
      /* istanbul ignore next */
      if (connectionError) {
        console.error('error fetching client from pool', connectionError)
        return cb(connectionError)
      }

      client.query(...queryArgs, (queryError, result) => {
        done(queryError)

        if (queryError) return cb(queryError)

        cb(null, result.rows)
      })
    })
  }
}

const runSqlFromFs = (query, filepath, cb) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (error, queryText) => {
    if (error) {
      console.error('Failed to find schema in fs')
      return cb(error)
    }
    // console.log(queryText);
    query(queryText, cb)
  })
}

const init = (query, cb) => {
  runSqlFromFs(query, path.join(__dirname, 'schema.txt'), cb)
}

module.exports = {
  startConnection,
  runSqlFromFs,
  init
}
