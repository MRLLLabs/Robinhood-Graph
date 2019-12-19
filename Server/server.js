const express = require('express');
const path = require('path');
const controller = require('./controller.js');
const cors = require('cors');
const compression = require('compression');
const port = 3001;
const app = express();

app.use(compression());
app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/:symbol', express.static(path.join(__dirname, '../public')));

app.get('/graph/:symbol', (req, res) => {
  controller.getPoints(req, res);
}); //if query time length specified, return sp. time else return all
app.post('/graph/:symbol', (req, res) => {
  controller.addOnePoint(req, res);
}); //use query to sp. time length
app.put('/graph/:symbol', (req, res) => {
  controller.updatePrice(req, res);
});
app.delete('/graph/:symbol', (req, res) => {
  controller.deleteOnePoint(req, res);
}); //use query to sp. time length

app.listen(port, () => { console.log(`Graph server now running on ${port}`); });
