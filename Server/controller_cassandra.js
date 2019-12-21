const db = require('../Database/cassandradatabase.js');

module.exports.getPoints = (req, res) => {
  if (req.query.gotinfo === undefined){
    db.getSymbolInfo(req.params.symbol, (err, data) => {
      if (err) {
        console.log('Getting initial info err: ', err);
        res.status(400).send();
      } else {

      }
    })
    db.getTimeFrame(req.params.symbol, req.query.timeframe, (err, data) => {
      if (err) {
        console.log('Getting timeframe points data err: ', err);
        res.status(400).send();
      } else {
        let dates = Object.keys(data[0].prices).slice();
        dates.sort((a, b) => Date.parse(a) - Date.parse(b));
        let sortedPrices = dates.map(date => Number(data[0].prices[date]));
        res.status(200).send(JSON.stringify(sortedPrices));
      }
    });
  } else {
    db.getTimeFrame(req.params.symbol, req.query.timeframe, (err, data) => {
      if (err) {
        console.log('Getting timeframe points data err: ', err);
        res.status(400).send();
      } else {
        let dates = Object.keys(data[0].prices).slice();
        dates.sort((a, b) => Date.parse(a) - Date.parse(b));
        let sortedPrices = dates.map(date => Number(data[0].prices[date]));
        res.status(200).send(JSON.stringify(sortedPrices));
      }
    });
  }
}

module.exports.addOnePoint = (req, res) => {
  if (req.query.timeframe) {
    console.log(req.body);
    res.status(200).send(req.body)
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