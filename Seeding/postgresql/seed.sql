COPY businesses (symbol, bname, analysthold, robinhoodowners, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/symbols.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1d.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1w.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1m.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_3m.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1y.csv' DELIMITER '|' CSV HEADER;
COPY prices_1d (ticker, timest, price) from '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_5y.csv' DELIMITER '|' CSV HEADER;