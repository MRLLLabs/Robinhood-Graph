const db = require('../Database/postgresqldatabase.js');

module.exports.getPoints = (req, res) => {
  if (req.query.timeframe) {

  } else {
    res.status(400).send();
  }
}

module.exports.addOnePoint = (req, res) => {
  if (req.query.timeframe) {
    console.log(req.body);
    res.status(200).send(req.body);
    // const addObj = {
    //   symbol: req.params.symbol,
    //   timeframe: 'historicPrice' + req.query.timeframe,
    //   point: 0  
    // }
    // db.addOnePoint();
  } else {
    res.status(400).send();
  }
}

module.exports.updatePrice = (req, res) => {
  if (req.query.timeframe) {
    const addObj = {
      symbol: req.params.symbol,
      timeframe: 'historicPrice' + req.query.timeframe,
      point: 0  
    }
    // db.addOnePoint();
  } else {
    res.status(400).send();
  }
}

module.exports.deleteOnePoint = (req, res) => {
  if (req.query.timeframe) {

  } else {
    res.status(400).send();
  }
}