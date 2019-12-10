const express = require('../node_modules/express');
const path = require('path');
const db = require('../database/database.js');

const port = 3001;
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/stocks', (req, res) => {
  const callback = (data) => {
    res.end(JSON.stringify(data));
  };
  let stockId = req.query.q ? req.query.q : '4';
  db.find(stockId, callback);

});

app.listen(port, () => { console.log(`server now running on ${port}`); });
