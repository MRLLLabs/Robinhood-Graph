const db = require('../database/database.js');
const fs = require('fs');
const path = require('path');

let allStocks = [];
const names = [];
const symbols = [];
const tags = [];


const loadNames = new Promise((resolve, reject) => {
	fs.readFile(path.resolve(__dirname, 'Companies.csv'), 'utf8', function (err, data) {
		if (err) throw err
		let dataArray = data.split(/\r?\n/);
		for (let i = 1; i < dataArray.length; i++) {
			dataArray[i] = dataArray[i].split(',');
			symbols.push(dataArray[i][0]);
			names.push(dataArray[i][1]);
			tags.push(dataArray[i][2].split('.'));
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
		if (newPrice <= 0) {
			newPrice = -1 * newPrice;
		}
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
			stock.tags = tags.shift();
			stock.historicPrice1D = buildHistoricPrice(109, .2, startPrice);
			stock.historicPrice1W = buildHistoricPrice(155, .5, startPrice);
			stock.historicPrice1M = buildHistoricPrice(120, 1, startPrice);
			stock.historicPrice3M = buildHistoricPrice(360, 4, startPrice);
			stock.historicPrice1Y = buildHistoricPrice(251, 4, startPrice);
			stock.historicPrice5Y = buildHistoricPrice(260, 6, startPrice);
			allStocks.push(stock);
		}
		callback();
	})
};

const saveCB = () => {
	db.save(allStocks);
}

buildStocks(saveCB);