const psqlpassword = require('../keys/psqlrootpw');
const { Pool } = require('pg');
const moment = require('moment');
let pool;
const poolProcessor = (ticker) => {
  let host;
  if (ticker < 'C') {
    host = '54.215.251.18';
  } else if (ticker < 'E') {
    host = '13.57.207.54';
  } else if (ticker < 'G') {
    host = '13.52.182.177';
  } else if (ticker < 'I') {
    host = '13.52.214.153';
  } else {
    host = '52.53.166.241';
  }
  pool = new Pool({
    user: 'root',
    password: psqlpassword,
    host: host,
    database: 'rhgraph'
  });
}

module.exports.getSymbolInfo = (ticker, cb) => {
  poolProcessor(ticker);
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
  poolProcessor(ticker);
  pool
    .query(`SELECT * FROM prices_${timeframe} WHERE ticker='${ticker}' ORDER BY timest ASC`)
    .then(res => {
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.addOnePoint = (ticker, timeframe, time, price, cb) => {
  poolProcessor(ticker);
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
  poolProcessor(ticker);
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
  poolProcessor(ticker);
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