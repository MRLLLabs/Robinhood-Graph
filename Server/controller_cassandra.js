const db = require('../Database/cassandradatabase.js');

module.exports.getPoints = (req, res) => {
  let response = {};
  if (req.query.gotinfo === undefined){
    db.getSymbolInfo(req.params.symbol, (err, data) => {
      if (err) {
        console.log('Getting initial info err: ', err);
        res.status(400).send();
      } else {
        response.symbol = data[0].symbol;
        response.analysthold = data[0].analysthold;
        response.name = data[0].name;
        response.price = Number(data[0].price);
        response.robinhoodowners = data[0].robinhoodowners;
      }
      db.getTimeFrame(req.params.symbol, req.query.timeframe, (err, data) => {
        if (err) {
          console.log('Getting timeframe points data err: ', err);
          res.status(400).send();
        } else {
          let dates = Object.keys(data[0].prices).slice();
          dates.sort((a, b) => Date.parse(a) - Date.parse(b));
          let sortedPrices = dates.map(date => Number(data[0].prices[date]));
          response.sortedPrices = sortedPrices;
          res.status(200).send(JSON.stringify(response));
        }
      });
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
        response.sortedPrices = sortedPrices;
        res.status(200).send(JSON.stringify(response));
      }
    });
  }
}

module.exports.addOnePoint = (req, res) => {
  db.addOnePoint(req.params.symbol, req.query.timeframe, req.body.time, req.body.price, (err, data) => {
    if (err) {
      console.log('Adding one point err: ', err);
      res.status(400).send();
    } else {
      res.status(200).send('Success adding point');
    }
  });
}

module.exports.updatePrice = (req, res) => {
  db.updatePrice(req.params.symbol, req.body.price, (err, data) => {
    if (err) {
      console.log('Updating price err: ', err);
      res.status(400).send();
    } else {
      res.status(200).send('Success updating price');
    }
  });
}

module.exports.deleteOnePoint = (req, res) => {
  db.deletePrice(req.params.symbol, req.query.timeframe, req.body.time, (err, data) => {
    if (err) {
      console.log('Deleting point err: ', err);
      res.status(400).send();
    } else {
      res.status(200).send('Success deleting point');
    }
  });
}