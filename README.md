# How to start application:

## Step 1

In Terminal, run 
```
npm install
``` 
to install all relevent packages /n

## Step 2

In Terminal, run 
```
npm run seed
```
to setup and populate database

## Step 3

In Terminal, run
```
npm start
```
to open server

## Step 4

In different Terminal, run 
```
npm run build
```
to compile with webpack and babel

Open browser to localhost:3001

# API Endpoints

## Create
Query timeframe in search, e.g.: `?timeframe=1M`.<br />POST to `/graph/:symbol`
<br />Sample post json body object:
```
{
  symbol: 'AAAAA',
  prices: {
    '2019-12-19': 300.00
  }, 
  {
    '2019-12-19': 330.00
  }
}
```

## Read
Query timeframe in search, e.g.: `?timeframe=1M`.<br />GET to `/graph/:symbol`<br />Response body example:
```
symbol: 'BBBBB',
  prices: {
    'Fri Dec 20 2019 00:00:00 GMT-0800 (Pacific Standard Time)': BigDecimal { _intVal: [Integer], _scale: 2 },
    'Sat Dec 21 2019 00:00:00 GMT-0800 (Pacific Standard Time)': BigDecimal { _intVal: [Integer], _scale: 2 }
  }
```
## Update
PUT to `/graph/:symbol`
## Delete
Query timeframe in search, e.g.: `?timeframe=1M`.<br />DELETE to `/graph/:symbol`