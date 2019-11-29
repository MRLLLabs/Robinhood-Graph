const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../Public')));

app.listen(port, () => { console.log(`server now running on ${port}`)});