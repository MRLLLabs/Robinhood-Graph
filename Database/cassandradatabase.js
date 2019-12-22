const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'rhgraph', credentials: { username: 'cassandra', password: 'cassandra' } });

client.connect()
  .then(() => {console.log('connected to cassandra!');})
  .catch(err => {console.log('Connection error: ', err);});
  
module.exports.getSymbolInfo = (ticker, cb) => {
  client
    .execute(`SELECT * FROM symbols WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows);
    })
    .catch( err => {
      cb(err);
    });
}

module.exports.getTimeFrame = (ticker, timeframe, cb) => {
  timeframe = 'prices_' + timeframe;
  client
    .execute(`SELECT * FROM ${timeframe} WHERE symbol='${ticker}'`)
    .then(result => {
      cb(null, result.rows)
    })
    .catch( err => {
      cb(err);
    });
}