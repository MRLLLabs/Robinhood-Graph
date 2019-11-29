const db = require('../Database/database.js');

let allStocks = [];
const firstLetter = ['Y', 'T', 'X', 'A', 'E'];
const secondLetter = ['N', 'J', 'K', 'L', 'F'];
const thirdLetter = ['Z', 'U', 'M', 'W'];
const symbols = [];
const names = ['Youtags', 'Mudo', 'Plajo', 'Wikizz', 'Yakijo', 'Rhynyx', 'Photofeed', 'Skyble', 'InnoZ', 'Blogpad', 'Skippad', 'Blogtags', 'Wordware', 'Rhynoodle', 'Zoovu', 'Ntag', 'Demivee', 'Dynava', 'Photofeed', 'Voomm', 'Cogibox', 'Tagopia', 'Demizz', 'Meejo', 'Layo', 'Zoomlounge', 'Meevee', 'Buzzster', 'Twitterbeat', 'Tazz', 'Plambee', 'Ntags', 'Thoughtworks', 'Jaxworks', 'Topicware', 'Gabspot', 'Livetube', 'Tanoodle', 'Quimm', 'Trudoo', 'Camido', 'Kaymbo', 'Jaloo', 'Twitterbridge', 'Topicshots', 'Realmix', 'Leexo', 'Yabox', 'Yodoo', 'Abata', 'Twitterbeat', 'Mydo', 'Wikizz', 'Zoomlounge', 'Realbuzz', 'Kare', 'Jazzbuzz', 'Linkbuzz', 'Katz', 'Skivee', 'Babbleopia', 'Brainlounge', 'Voonder', 'Fadeo', 'Muxo', 'Skivee', 'Realfire', 'Avavee', 'Livepath', 'Mybuzz', 'Jayo', 'Jatri', 'Avamm', 'Browsedrive', 'Jabbertype', 'Devify', 'Yabox', 'Fatz', 'Kwideo', 'Voomm', 'Gigazoom', 'Riffpath', 'Blogtags', 'Shuffledrive', 'Babbleopia', 'Mydo', 'Devpulse', 'Quinu', 'Mydo', 'Oba', 'Buzzshare', 'Voomm', 'Plambee', 'Realcube', 'Yacero', 'Skyvu', 'Skinder', 'Topicware', 'Mydeo', 'Minjago'];


const buildSymbols = () => {
	for (let i = 0; i < firstLetter.length; i++) {
		for (let j = 0; j < secondLetter.length; j++) {
			for (let k = 0; k < thirdLetter.length; k++) {
				symbols.push(`${firstLetter[i]}${secondLetter[j]}${thirdLetter[k]}`);
			} 
		} 
	} 
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
	buildSymbols();
	for (let i = 0; i < 100; i++) {
		let stock = {};
		const startPrice = Math.random() * 200;
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

