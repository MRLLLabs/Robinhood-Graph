const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { promisify } = require('util');
const moment = require('moment');
const { exec } = require('child_process');
const execp = promisify(exec);
const appendFile = promisify(fs.appendFile);
const unlink = promisify(fs.unlink);

const tagslist = ['3D Printing', 'Accounting', 'Aerospace & Defense', 'Agriculture', 'Airlines', 'Alternative Medicine', 'Animation', 'Apparel & Footwear', 'Architecture', 'Arts', 'Arts & Crafts', 'Asset Management', 'Audio', 'Automation', 'Automotive', 'Banking & Mortgages', 'Beverages', 'Biotechnology', 'Broadcasting', 'Building Materials', 'Business Supplies', 'Chemicals', 'Civil Engineering', 'Cloud Services', 'Communications', 'Computer Hardware', 'Construction', 'Construction Contractors & Services', 'Consulting & Professional Services', 'Consumer Discretionary', 'Consumer Electronics', 'Consumer Goods', 'Consumer Staples', 'Corporate & Business', 'Cosmetics', 'Design', 'E-Commerce & Marketplaces', 'E-Learning', 'Education', 'Electrical', 'Energy', 'Energy & Utilities', 'Entertainment & Recreation', 'Events', 'Eyewear', 'Facilities', 'Family Services', 'Finance', 'Financial Services', 'Fine Art', 'Firearms', 'Fishery', 'Food', 'Food Production', 'Forums', 'Fundraising', 'Gambling & Casinos', 'Government', 'Ground Transportation', 'Health & Wellness', 'Health Care', 'Higher Education', 'Home & Furniture', 'Home Improvement', 'Human Resources', 'Import & Export', 'Industrials & Manufacturing', 'Information Technology & Services', 'Insurance', 'International Relations', 'International Trade', 'Internet', 'Investment', 'Investment Banking', 'Investment Management', 'Jewelry, Watches & Luxury Goods', 'Judiciary', 'Law Enforcement', 'Legal Services', 'Libraries', 'Machinery', 'Maritime', 'Market Research', 'Marketing & Advertising', 'Mechanical Engineering', 'Media', 'Medicine', 'Military', 'Mining & Metals', 'Movies & TV', 'Museums', 'Music', 'Nanotechnology', 'Networking', 'Non-Profit & Philanthropy', 'Oil & Gas', 'Outsourcing', 'Packaging & Containers', 'Paper Goods', 'Payments', 'Performing Arts', 'Pharmaceuticals', 'Pharmacy', 'Photography', 'Plastics', 'Plumbing', 'Political Organization', 'Primary & Secondary Education', 'Printing', 'Public Relations', 'Publishing', 'Ranching', 'Real Estate', 'Religion', 'Renewables & Environment', 'Restaurants', 'Retail', 'Sanitization Services', 'Scientific & Academic Research', 'Security', 'Services', 'Shipbuilding', 'Shipping & Logistics', 'Society', 'Sporting Goods', 'Sports & Fitness', 'Stores', 'Talent Agencies', 'Technology', 'Telecommunications', 'Textiles', 'Tobacco', 'Tools', 'Translation', 'Transportation', 'Travel & Leisure', 'Utilities', 'Venture Capital', 'Veterinary', 'Video Games', 'Warehousing', 'Web Services & Apps', 'Wholesale'];

async function symbolloop() {
  const start = Date.now();
  if (fs.existsSync(path.resolve(__dirname, 'csvs/symbols.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/symbols.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_1d.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_1d.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_1w.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_1w.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_1m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_1m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_3m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_3m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_1y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_1y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/prices_5y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/prices_5y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/tags.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/tags.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_1d.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_1d.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_1w.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_1w.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_1m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_1m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_3m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_3m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_1y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_1y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/cql_prices_5y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/cql_prices_5y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_1d.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_1d.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_1w.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_1w.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_1m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_1m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_3m.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_3m.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_1y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_1y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_prices_5y.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_prices_5y.csv'));
  }
  if (fs.existsSync(path.resolve(__dirname, 'csvs/sql_tags.csv'))) {
    await unlink(path.resolve(__dirname, 'csvs/sql_tags.csv'));
  }

  await appendFile(path.resolve(__dirname, 'csvs/symbols.csv'), 'symbol|name|analysthold|robinhoodowners|price');
  await appendFile(path.resolve(__dirname, 'csvs/prices_1d.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/prices_1w.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/prices_1m.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/prices_3m.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/prices_1y.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/prices_5y.csv'), 'symbol|prices');
  await appendFile(path.resolve(__dirname, 'csvs/tags.csv'), 'symbol|tags');

  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1d.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1w.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1m.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_3m.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1y.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_prices_5y.csv'), 'symbol|timest|price');
  await appendFile(path.resolve(__dirname, 'csvs/sql_tags.csv'), 'symbol|tag');

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
  const build = (price, timeamount, minorday, delta, round, identifier) => {
    time = moment();
    if (round) {
      if (timeamount === -10 && minorday === 'm') {
        time.minutes(Math.round(time.minutes() / 10) * 10);
      } else if (timeamount === -1 && minorday === 'day') {
        time.minutes(Math.round(time.minutes() / 60) * 60);
      }
      if (time.hours() >= 16) {
        time.set({ hour: 16, minute: 0 });
      }
    } else {
      time = moment(moment().format('YYYY-MM-DD') + ' 09:00');
    }
    let newPrice = price;
    let timesprices = {};
    if (!round) {
      for (let i = 0; i < identifier; i++) {
        timesprices[Date.parse(time.format('YYYY-MM-DD HH:mm'))] = newPrice;
        newPrice += ((Math.random() - 0.5) * delta * 2);
        newPrice = Math.round(newPrice * 100) / 100;
        if (newPrice < 0) {
          newPrice = -1 * newPrice;
        }
        time.add(timeamount, minorday);
        if (time.minutes() + time.hours() * 60 <= 540) {
          time.subtract(1, 'day');
        }
        if (time.format('ddd') === 'SUN') {
          time.subtract(2, 'day');
          time.set({ hour: 16, minute: 0 });
        }
      }
    } else {
      let cfTime = moment(time.format('YYYY-MM-DD HH:mm'));
      cfTime.subtract(identifier[0], identifier[1]);
      while (time.isSameOrAfter(cfTime)) {
        timesprices[Date.parse(time.format('YYYY-MM-DD HH:mm'))] = newPrice;
        newPrice += ((Math.random() - 0.5) * delta * 2);
        newPrice = Math.round(newPrice * 100) / 100;
        if (newPrice < 0) {
          newPrice = -1 * newPrice;
        }
        time.add(timeamount, minorday);
        if (time.minutes() + time.hours() * 60 <= 540) {
          time.subtract(1, 'day');
          time.set({ hour: 16, minute: 0 });
        }
        if (time.format('ddd') === 'SUN') {
          time.subtract(2, 'day');
        }
      }
    }
    return timesprices;
  }
  while (counter < 100000) {
    const tickerName = ticker.map(number => String.fromCharCode(number)).join('');
    const symboldescriptionarray = [];
    const name = faker.company.companyName();
    const analysthold = Math.ceil(Math.random() * 100);
    const robinhoodOwners = Math.floor(Math.random() * 200000);
    const startPrice = (Math.round(Math.random() * 20000)) / 100;
    const prices1d = build(startPrice, 5, 'm', 0.2, false, 85);
    const prices1w = build(startPrice, -10, 'm', 0.5, true, [1, 'week']);
    const prices1m = build(startPrice, -60, 'm', 1, true, [1, 'month']);
    const prices3m = build(startPrice, -60, 'm', 4, true, [3, 'month']);
    const prices1y = build(startPrice, -1, 'd', 4, true, [1, 'year']);
    const prices5y = build(startPrice, -7, 'd', 6, true, [5, 'year']);
    let sqlprices1darray = '';
    let sqlprices1warray = '';
    let sqlprices1marray = '';
    let sqlprices3marray = '';
    let sqlprices1yarray = '';
    let sqlprices5yarray = '';
    let sqltagsarray = '';
    const prices1darray = ['\n' + tickerName, JSON.stringify(prices1d)];
    const prices1warray = ['\n' + tickerName, JSON.stringify(prices1w)];
    const prices1marray = ['\n' + tickerName, JSON.stringify(prices1m)];
    const prices3marray = ['\n' + tickerName, JSON.stringify(prices3m)];
    const prices1yarray = ['\n' + tickerName, JSON.stringify(prices1y)];
    const prices5yarray = ['\n' + tickerName, JSON.stringify(prices5y)];
    for (let keys in prices1d) {
      sqlprices1darray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices1d[keys]}`;
    }
    for (let keys in prices1w) {
      sqlprices1warray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices1w[keys]}`;
    }
    for (let keys in prices1m) {
      sqlprices1marray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices1m[keys]}`;
    }
    for (let keys in prices3m) {
      sqlprices3marray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices3m[keys]}`;
    }
    for (let keys in prices1y) {
      sqlprices1yarray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices1y[keys]}`;
    }
    for (let keys in prices5y) {
      sqlprices5yarray += `\n${tickerName}|${moment(Number(keys)).format('YYYY-MM-DD HH:mm')}|${prices5y[keys]}`;
    }
    const tags = ['\n' + tickerName];
    let tagscounter = 0;
    let tagstring = '{';
    while (tagscounter < tagslist.length) {
      tagscounter += Math.floor(Math.random() * tagslist.length);
      if (tagslist[tagscounter] !== undefined) {
        tagstring += tagslist[tagscounter] + ', ';
        sqltagsarray += `\n${tickerName}|${tagslist[tagscounter]}`;
      }
    }
    tags.push(tagstring.slice(0, -2) + '}');

    symboldescriptionarray.push('\n' + tickerName, name, analysthold, robinhoodOwners, startPrice);

    await appendFile(path.resolve(__dirname, 'csvs/symbols.csv'), symboldescriptionarray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_1d.csv'), prices1darray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_1w.csv'), prices1warray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_1m.csv'), prices1marray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_3m.csv'), prices3marray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_1y.csv'), prices1yarray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/prices_5y.csv'), prices5yarray.join('|'));
    await appendFile(path.resolve(__dirname, 'csvs/tags.csv'), tags.join('|'));

    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1d.csv'), sqlprices1darray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1w.csv'), sqlprices1warray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1m.csv'), sqlprices1marray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_3m.csv'), sqlprices3marray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_1y.csv'), sqlprices1yarray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_prices_5y.csv'), sqlprices5yarray);
    await appendFile(path.resolve(__dirname, 'csvs/sql_tags.csv'), sqltagsarray);
    tickerProcessor(ticker);
    counter++;
    if (counter % 5000 === 0) {
      console.log(counter / 1000, '% completed');
      console.log('Seconds elapsed: ', Math.round((Date.now() - start) / 1000));
    }
  }
}
symbolloop()
.then(() => {
  execp(`tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_1d.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_1d.csv && tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_1w.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_1w.csv && tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_1m.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_1m.csv && tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_3m.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_3m.csv && tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_1y.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_1y.csv && tr '"' "'" < /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/prices_5y.csv > /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/cql_prices_5y.csv`);
})
.then(() => {
  execp('cqlsh -u cassandra -p cassandra -f /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Database/schema.cql');
})
.then(() => {
  execp('psql -d rhgraph -f /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Database/schema.sql');
})
.then(() => {
  execp('cqlsh -u cassandra -p cassandra -f /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/cassandra/seed.cql');
})
.then(() => {
  execp('psql -d rhgraph -f /Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/postgresql/seed.sql');
})
.catch(error => console.error(error));