let stop = false;

// event-loop timer phase
// set stop to true after 100 ms
setTimeout(() => (stop = true), 100);

// blocking code
// Event loop timer phase or any other phase could not be executed
while (!stop) {
  console.log("I am blocking event loop");
}
