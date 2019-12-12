const express = require('express');
const path = require('path');
const db = require('../database/database.js');
const cors = require('cors');

const port = 3001;
const app = express();

app.use(cors())
app.use('/', express.static(path.resolve(__dirname, '../public')));
console.log('here');
app.get('/graph/getStocks', (req, res) => {
  console.log('making request');
  const callback = (data) => {
    console.log('success accessing database');
    res.end(JSON.stringify(data));
  };
  let stockId = req.query.id ? req.query.id : '4';
  db.find(stockId, callback);

});

app.listen(port, () => { console.log(`server now running on ${port}`); });
