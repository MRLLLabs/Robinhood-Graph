const { Pool } = require('pg');
const pool = new Pool({
  database: 'rhgraph'
});

module.exports.getSymbolInfo = (ticker, cb) => {
  pool
    .query(`SELECT * FROM businesses WHERE symbol='${ticker}'`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.getTimeFrame = (ticker, timeframe, cb) => {
  pool
    .query(`SELECT * FROM prices_${timeframe} WHERE ticker='${ticker}'`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    })
}