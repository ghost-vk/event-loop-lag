const { generatePrimes } = require("./generate-primes");

console.time("eventlooplag");

// event-loop timer phase
setTimeout(() => console.timeEnd("eventlooplag"), 100);

// blocking code, stalling event loop, delaying the execution of
// the setTimeout ie lag in the event loop
const min = 2;
const max = 3e6;
generatePrimes(min, max);
