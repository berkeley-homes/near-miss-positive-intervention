const makeMockQuery = () => {
  const queriesMade = []
  return {
    queriesMade,
    query: (queryStr, queryArgs, cb) => {
      queriesMade.push({
        text: queryStr,
        args: queryArgs
      })
      cb()
    }
  }
}

const connectionConfig = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'near_miss_test',
  idleTimeoutMillis: 1 // so test does not hang
}

module.exports = {
  makeMockQuery,
  connectionConfig
}
