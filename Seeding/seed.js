const db = require('../Database/database.js');
const d3 = require('d3');

let allStocks = [];
const names = [];
const symbols = [];


const loadNames = () => {
	d3.csv("./Seeding/Companies.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
				console.log(data[i].Symbol);
				symbols.push(data[i].Symbol);
        console.log(data[i].Name);
				names.push(data[i].Name);
    }
});
};

const buildHistoricPrice = (count, deltaVariation, price) => {
	let newPrice = price;
	let priceArray = [];
	for (let i = 0; i < count; i++) {
		priceArray.push(newPrice);
		newPrice += ((Math.random() - 0.5) * deltaVariation * 2);
	}
	return priceArray;
};

const buildStocks = () => {
	loadNames();
	for (let i = 0; i < 100; i++) {
		let stock = {};
		const startPrice = Math.random() * 200;
		stock.id = i + 1;
		stock.name = names.shift();
		stock.symbol = symbols.shift();
		stock.analystHold = Math.floor(Math.random() * 100);
		stock.robinhoodOwners = Math.floor(Math.random() * 200000);
		stock.historicPrice1D = buildHistoricPrice(108, 6, startPrice);
		stock.historicPrice1W = buildHistoricPrice(198, 6, startPrice);
		stock.historicPrice1M = buildHistoricPrice(108, 6, startPrice);
		stock.historicPrice3M = buildHistoricPrice(108, 6, startPrice);
		stock.historicPrice1Y = buildHistoricPrice(108, 6, startPrice);
		stock.historicPrice5Y = buildHistoricPrice(108, 6, startPrice);
		allStocks.push(stock);
	}
};

buildStocks();
db.save(allStocks);

