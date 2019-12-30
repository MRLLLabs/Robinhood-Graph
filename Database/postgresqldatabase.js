const { Pool } = require('pg');
const moment = require('moment');
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
    });
}

module.exports.addOnePoint = (ticker, timeframe, time, price, cb) => {
  pool
    .query(`INSERT INTO prices_${timeframe} (ticker, price, timest) values ('${ticker}', ${price}, '${time}')`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.updatePrice = (ticker, price, cb) => {
  pool
    .query(`UPDATE businesses SET price=${price} WHERE symbol=${ticker}`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.deletePrice = (ticker, timeframe, time, cb) => {
  let timest = moment(time).format('YYYY-MM-DD HH:mm');
  pool
    .query(`DELETE FROM prices_${timeframe} WHERE timest='${timest}:00' AND ticker=${ticker}`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    });
}