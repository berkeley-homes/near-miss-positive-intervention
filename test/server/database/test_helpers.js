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

module.exports = {
  makeMockQuery
}
