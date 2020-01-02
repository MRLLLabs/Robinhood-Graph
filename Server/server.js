require('newrelic');
const express = require('express');
const path = require('path');
const controller = require('./controller_postgresql.js');
const cors = require('cors');
const compression = require('compression');
const port = 3001;
const app = express();

app.use(compression());
app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '../Public')));
app.use('/:symbol', express.static(path.join(__dirname, '../Public')));

app.get('/graph/:symbol', (req, res) => {
  if(req.query.timeframe === undefined){
    req.query.timeframe = '1d';
  }
  req.params.symbol = req.params.symbol.toUpperCase();
  controller.getPoints(req, res);
});
app.post('/graph/:symbol', (req, res) => {
  if(req.query.timeframe === undefined){
    req.query.timeframe = '1d';
  }
  req.params.symbol = req.params.symbol.toUpperCase();
  controller.addOnePoint(req, res);
}); //use query to sp. time length
app.put('/graph/:symbol', (req, res) => {
  if(req.query.timeframe === undefined){
    req.query.timeframe = '1d';
  }
  req.params.symbol = req.params.symbol.toUpperCase();
  controller.updatePrice(req, res);
});
app.delete('/graph/:symbol', (req, res) => {
  if(req.query.timeframe === undefined){
    req.query.timeframe = '1d';
  }
  req.params.symbol = req.params.symbol.toUpperCase();
  controller.deleteOnePoint(req, res);
}); //use query to sp. time length

app.listen(port, () => { console.log('dirname: ', __dirname); console.log(`Graph server now running on ${port}`); });
