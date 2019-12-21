const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'rhgraph', credentials: { username: 'cassandra', password: 'cassandra' } });

client.connect()
  .then(() => {console.log('connected to cassandra!');})
  .catch(err => {console.log('Connection error: ', err);});

// client.execute('SELECT * FROM prices_1D')
//   .then(result => {
//     console.log(result.rows[0].prices);
//     for(let key in result.rows[0].prices) {
//       console.log('key: ', key);
//       console.log('value: ', result.rows[0].prices[key].toNumber());
//     }
//   })
//   .catch(err => {
//     console.log("Err: ", err);
//   })
//   .then(() => {
//     client.shutdown();
//   });
  
module.getSymbolInfo = (ticker, cb) => {
  client.execute(`SELECT * FROM SYMBOLS WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows);
    })
    .catch( err => {
      cb(err);
    });
}

module.exports.getTimeFrame = (ticker, timeframe, cb) => {
  timeframe = 'prices_' + timeframe;
  client.execute(`SELECT * FROM ${timeframe} WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch( err => {
      cb(err);
    });
}

module.exports.client = client;