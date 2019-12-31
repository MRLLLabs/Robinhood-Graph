const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile);

async function writesymbols() {
  const start = Date.now();
  let ticker = [65, 65, 65, 65, 65];
  let counter = 0;
  const tickerProcessor = (arr) => {
    arr[4]++;
    for (let i = 4; i > 0; i--) {
      if (arr[i] > 74) {
        arr[i - 1]++;
        arr[i] = 65;
      }
    }
  }
  while(counter < 100000) {
    const tickerName = ticker.map(number => String.fromCharCode(number)).join('') + '\n';
    await appendFile(path.resolve(__dirname, 'tickers.csv'), tickerName);
    tickerProcessor(ticker);
    counter++;
    if (counter % 5000 === 0) {
      console.log(counter / 1000, '% completed');
      console.log('Seconds elapsed: ', Math.round((Date.now() - start) / 1000));
    }
  }
}

writesymbols()
  .catch(error => console.error(error));