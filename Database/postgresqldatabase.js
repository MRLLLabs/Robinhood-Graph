const psqlpassword = require('../keys/psqlrootpw');
const { Pool } = require('pg');
const moment = require('moment');
const poolAB = new Pool({
  user: 'root',
  password: psqlpassword,
  host: '172.31.9.30',
  database: 'rhgraph'
});
const poolCD = new Pool({
  user: 'root',
  password: psqlpassword,
  host: '172.31.3.116',
  database: 'rhgraph'
});
const poolEF = new Pool({
  user: 'root',
  password: psqlpassword,
  host: '172.31.2.235',
  database: 'rhgraph'
});
const poolGH = new Pool({
  user: 'root',
  password: psqlpassword,
  host: '172.31.4.3',
  database: 'rhgraph'
});
const poolIJ = new Pool({
  user: 'root',
  password: psqlpassword,
  host: '172.31.0.188',
  database: 'rhgraph'
});

const poolProcessor = (ticker) => {
  if (ticker < 'C') {
    return poolAB;
  } else if (ticker < 'E') {
    return poolCD;
  } else if (ticker < 'G') {
    return poolEF;
  } else if (ticker < 'I') {
    return poolGH;
  } else {
    return poolIJ;
  }
}

module.exports.getSymbolInfo = (ticker, cb) => {
  const pool = poolProcessor(ticker);
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
  const pool = poolProcessor(ticker);
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
  const pool = poolProcessor(ticker);
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
  const pool = poolProcessor(ticker);
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
  const pool = poolProcessor(ticker);
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