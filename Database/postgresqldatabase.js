const { Pool } = require('pg');
const pool = new Pool({
  database: 'rhgraph'
});

module.exports.getTimeFrame = (ticker, timeframe, cb) => {
  
}