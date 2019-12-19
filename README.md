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
Query timeframe in search: `?timeframe=1M`.<br />POST to `/graph/:symbol`
## Read
Query timeframe in search: `?timeframe=1M`.<br />GET to `/graph/:symbol`
## Update
Query timeframe in search: `?timeframe=1M`.<br />PUT to `/graph/:symbol`
## Delete
Query timeframe in search: `?timeframe=1M`.<br />DELETE to `/graph/:symbol`