const db = require('../database/cassandradatabase.js');

module.exports.getPoints = (req, res) => {
  if (req.query.timeframe){
    debugger;
    // db.getTimeFrame((err, data) => {
    //   if (err) {
    //     console.log('Getting timeframe points data err: ', err);
    //     res.status(400).send();
    //   } else {
    //     res.status(200).send(JSON.stringify(data));
    //   }
    // });
  } else {
    res.status(400).send();
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