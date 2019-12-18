const db = require('../database/database.js');

module.exports.getPoints = (req, res) => {
  if (req.query.timeframe){
    debugger;
    // db.getTimePoints((err, data) => {
    //   if (err) {
    //     console.log('Getting timeframe points data err: ', err);
    //     res.status(400).send();
    //   } else {
    //     res.status(200).send(JSON.stringify(data));
    //   }
    // });
  } else {
    debugger;
    // db.getAllPoints((err, data) => {
    //   if (err) {
    //     console.log('Getting all points data err: ', err);
    //     res.status(400).send();
    //   } else {
    //     res.status(200).send(JSON.stringify(data));
    //   }
    // });
  }
}

module.exports.addOnePoint = (req, res) => {
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

module.exports.updatePrice = (req, res) => {

}

module.exports.deleteOnePoint = (req, res) => {
  if (req.query.timeframe) {

  } else {
    res.status(400).send();
  }
}