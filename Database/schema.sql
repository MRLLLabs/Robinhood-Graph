CREATE TABLE businesses (
  symbol VARCHAR (10) PRIMARY KEY,
  bname VARCHAR (50),
  analysthold INTEGER,
  robinhoodowners INTEGER,
  price DECIMAL (9, 2)
);
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  tag VARCHAR (50)
);

CREATE TABLE prices_1d (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1w (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1m (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_3m (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1y (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_5y (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol),
  price DECIMAL (9, 2),
  timest TIMESTAMP
);