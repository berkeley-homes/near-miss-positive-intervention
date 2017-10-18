const pg = require("pg");
const fs = require("fs");
const path = require("path");

const connect = connectionConfig => {
  const poolConfig = {
    idleTimeoutMillis: 30000,
    max: 10
  };
  const config = Object.assign({}, poolConfig, connectionConfig);

  const pool = new pg.Pool(config);

  /* istanbul ignore next */
  pool.on("error", (err, client) => {
    console.error("idle client error", err.message, err.stack);
  });

  // wrapper around pg.pool.connect to make query simple
  return (queryText, queryArgs, cb) => {
    pool.connect((connectionError, client, done) => {
      /* istanbul ignore next */
      if (connectionError) {
        console.error("error fetching client from pool", connectionError);
        return cb(connectionError);
      }

      client.query(queryText, queryArgs, (queryError, result) => {
        done(queryError);

        if (queryError) return cb(queryError);

        cb(null, result);
      });
    });
  };
};

const runSqlFromFs = (query, queryName, queryArgs = [], cb) => {
  // so we have control of where we look in fs
  const noEscape = path.basename(queryName);
  const queryPath = path.join(__dirname, "queries", noEscape) + ".sql";

  fs.readFile(queryPath, { encoding: "utf8" }, (error, queryText) => {
    if (error) {
      console.error("Failed to find schema in fs");
      return cb(error);
    }
    query(queryText, queryArgs, cb);
  });
};

module.exports = {
  connect,
  runSqlFromFs
};
