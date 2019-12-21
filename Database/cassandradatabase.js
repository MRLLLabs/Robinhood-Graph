const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'rhgraph', credentials: { username: 'cassandra', password: 'cassandra' } });

client.connect()
  .then(() => {console.log('connected!');})
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
  
module.exports.getTimeFrame = (cb) => {
  client.execute('SELECT AOIWJFOIAWEJFOAIWH;EFAWE')
    .then(result => {
      cb(null, result.rows)
    })
    .catch( err => {
      cb(err);
    })
}

module.exports.client = client;