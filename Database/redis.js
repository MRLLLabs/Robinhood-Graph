const redis = require("redis");
const client = redis.createClient({
  host: '172.31.2.79'
});

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports.getCache = (ticker, cb) => {
  client.get(ticker, cb);
}

module.exports.setCache = (ticker, string) => {
  client.set(ticker, string, 'EX', 1);
}