const cassandra = require('cassandra-driver');
const moment = require('moment');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'rhgraph', credentials: { username: 'cassandra', password: 'cassandra' } });

client.connect()
  .then(() => { console.log('connected to cassandra!'); })
  .catch(err => { console.log('Connection error: ', err); });

module.exports.getSymbolInfo = (ticker, cb) => {
  client
    .execute(`SELECT * FROM symbols WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows);
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.getTimeFrame = (ticker, timeframe, cb) => {
  client
    .execute(`SELECT * FROM prices_${timeframe} WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.addOnePoint = (ticker, timeframe, time, price, cb) => {
  client
    .execute(`UPDATE prices_${timeframe} SET prices = prices + {'${time}': ${price}} WHERE symbol='${ticker}`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.updatePrice = (ticker, price, cb) => {
  client
    .execute(`UPDATE symbols SET price=${price} where symbol=${ticker}`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch(err => {
      cb(err);
    });
}

module.exports.deletePrice = (ticker, timeframe, time, cb) => {
  let timekey = moment(time).format('YYYY-MM-DD HH:mm');
  client
    .execute(`DELETE prices['${timekey}:00.000+0000'] FROM prices_${timeframe} WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch(err => {
      cb(err);
    });
}