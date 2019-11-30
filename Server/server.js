const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const db = require('../Database/database.js');

app.use('/', express.static(path.resolve(__dirname, '../Public')));

app.get('/stocks', (req, res) => {
  db.find(req.query.id, res.end);
})

app.listen(port, () => { console.log(`server now running on ${port}`)});