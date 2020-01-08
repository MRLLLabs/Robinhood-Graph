const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile);

async function writesymbols() {
  const start = Date.now();
  let ticker = [65, 65, 65, 65, 65];
  let counter = 0;
  const tickerProcessor = (arr) => {
    for(let i = 0; i < 5; i++){
      arr[i] = Math.floor(Math.random() * 10) + 65;
    }
  }
  let used = {};
  while(counter < 10000) {
    tickerProcessor(ticker);
    let tickerName = ticker.map(number => String.fromCharCode(number)).join('') + '\n';
    while (used[tickerName]) {
      tickerProcessor(ticker);
      tickerName = ticker.map(number => String.fromCharCode(number)).join('') + '\n';
    }
    used[tickerName] = true;
    await appendFile(path.resolve(__dirname, 'csvs/top10.csv'), tickerName);
    counter++;
    if (counter % 8500 === 0) {
      console.log(counter / 8500, '% completed');
      console.log('Seconds elapsed: ', Math.round((Date.now() - start) / 1000));
    }
  }
}

writesymbols()
  .catch(error => console.error(error));