const express = require('../node_modules/express');
const path = require('path');
const db = require('../database/database.js');

const port = 3000;
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/stocks', (req, res) => {
  const callback = (data) => {
    res.end(JSON.stringify(data));
  };
  let stockId = req.query.q ? req.query.q : '4';
  db.find(stockId, callback);

});

app.listen(port, () => { console.log(`server now running on ${port}`); });
