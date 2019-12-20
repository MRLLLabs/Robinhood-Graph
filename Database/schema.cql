DROP KEYSPACE IF EXISTS rhgraph;

CREATE KEYSPACE rhgraph WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE rhgraph;

CREATE TABLE symbols ( symbol text PRIMARY KEY, name text, analystHold int, robinhoodOwners int, price decimal);

CREATE TABLE tags ( symbol text PRIMARY KEY, tags set<text>);

CREATE TABLE prices_1D ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );
CREATE TABLE prices_1W ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );
CREATE TABLE prices_1M ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );
CREATE TABLE prices_3M ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );
CREATE TABLE prices_1Y ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );
CREATE TABLE prices_5Y ( symbol text PRIMARY KEY, prices map<timestamp, decimal> );