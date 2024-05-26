const express = require("express");
const http = require("http");

const { generatePrimes } = require("./generate-primes.js");

const app = express();
const server = http.createServer(app);

const MIN = 2;
const MAX = 3e6;

app.get("/test", (req, res) => {
  console.time("total-execution-time");
  generatePrimes(MIN, MAX);
  res.status(200).send({ msg: "ok" });
  console.timeEnd("total-execution-time");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`sever is linstenig on PORT: ${PORT}`);
});
