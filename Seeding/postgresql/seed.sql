COPY businesses FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/businesses_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_1d FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_1d_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_1w FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_1w_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_1m FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_1m_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_3m FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_3m_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_1y FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_1y_ij.csv"' DELIMITER '|' CSV HEADER;
COPY prices_5y FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/prices_5y_ij.csv"' DELIMITER '|' CSV HEADER;
COPY tags FROM PROGRAM 'curl "https://rhgraph.s3-us-west-1.amazonaws.com/tags_ij.csv"' DELIMITER '|' CSV HEADER;

-- COPY businesses (symbol, bname, analysthold, robinhoodowners, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/symbols.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_1d (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1d.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_1w (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1w.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_1m (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1m.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_3m (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_3m.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_1y (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_1y.csv' DELIMITER '|' CSV HEADER;
-- COPY prices_5y (ticker, timest, price) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_prices_5y.csv' DELIMITER '|' CSV HEADER;
-- COPY tags (ticker, tag) FROM '/Users/hyungjinlee/Documents/hackreactor/mrlllabs/Robinhood-Graph/Seeding/csvs/sql_tags.csv' DELIMITER '|' CSV HEADER;