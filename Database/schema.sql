DROP TABLE IF EXISTS businesses CASCADE;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS prices_1d;
DROP TABLE IF EXISTS prices_1w;
DROP TABLE IF EXISTS prices_1m;
DROP TABLE IF EXISTS prices_3m;
DROP TABLE IF EXISTS prices_1y;
DROP TABLE IF EXISTS prices_5y;

CREATE TABLE businesses (
  symbol VARCHAR (10) PRIMARY KEY,
  bname VARCHAR (50),
  analysthold INTEGER,
  robinhoodowners INTEGER,
  price DECIMAL (9, 2)
);
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  tag VARCHAR (100)
);

CREATE TABLE prices_1d (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1w (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1m (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_3m (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_1y (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);
CREATE TABLE prices_5y (
  id SERIAL PRIMARY KEY,
  ticker VARCHAR (10) REFERENCES businesses(symbol) ON DELETE CASCADE,
  price DECIMAL (9, 2),
  timest TIMESTAMP
);

CREATE INDEX prices_1d_index ON prices_1d (ticker);
CREATE INDEX prices_1w_index ON prices_1w (ticker);
CREATE INDEX prices_1m_index ON prices_1m (ticker);
CREATE INDEX prices_3m_index ON prices_3m (ticker);
CREATE INDEX prices_1y_index ON prices_1y (ticker);
CREATE INDEX prices_5y_index ON prices_5y (ticker);

CREATE INDEX prices_1d_timest_index ON prices_1d (ticker, timest);
CREATE INDEX prices_1w_timest_index ON prices_1w (ticker, timest);
CREATE INDEX prices_1m_timest_index ON prices_1m (ticker, timest);
CREATE INDEX prices_3m_timest_index ON prices_3m (ticker, timest);
CREATE INDEX prices_1y_timest_index ON prices_1y (ticker, timest);
CREATE INDEX prices_5y_timest_index ON prices_5y (ticker, timest);