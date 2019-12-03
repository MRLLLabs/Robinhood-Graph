const db = require('../database/database.js');
const d3 = require('./node_modules/d3');
const fs = require('fs');

let allStocks = [];
const names = [];
const symbols = [];


const loadNames = new Promise((resolve, reject) => {
	fs.readFile('./Seeding/Companies.csv', 'utf8', function (err, data) {
		if (err) throw err
		var dataArray = data.split(/\r?\n/);
		for (var i = 1; i < dataArray.length; i++) {
			dataArray[i] = dataArray[i].split(',');
			symbols.push(dataArray[i][0]);
			names.push(dataArray[i][1]);
		}
		resolve();
	});
});

const buildHistoricPrice = (count, deltaVariation, price) => {
	let newPrice = price;
	let priceArray = [];
	for (let i = 0; i < count; i++) {
		priceArray.push(newPrice);
		newPrice += ((Math.random() - 0.5) * deltaVariation * 2);
	}
	return priceArray;
};

const buildStocks = (callback) => {
	loadNames.then(() => {
		for (let i = 0; i < 100; i++) {
			let stock = {};
			const startPrice = Math.random() * 200;
			stock.id = i + 1;
			stock.name = names.shift();
			stock.symbol = symbols.shift();
			stock.analystHold = Math.floor(Math.random() * 100);
			stock.robinhoodOwners = Math.floor(Math.random() * 200000);
			stock.price = startPrice;
			stock.historicPrice1D = buildHistoricPrice(108, 6, startPrice);
			stock.historicPrice1W = buildHistoricPrice(198, 6, startPrice);
			stock.historicPrice1M = buildHistoricPrice(108, 6, startPrice);
			stock.historicPrice3M = buildHistoricPrice(108, 6, startPrice);
			stock.historicPrice1Y = buildHistoricPrice(108, 6, startPrice);
			stock.historicPrice5Y = buildHistoricPrice(108, 6, startPrice);
			allStocks.push(stock);
		}
		callback();
	})
};

const saveCB = () => {
	db.save(allStocks);
}

buildStocks(saveCB);