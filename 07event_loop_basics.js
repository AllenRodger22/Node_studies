// Event loop in practice
// callback functions

const fs = require('fs');

setTimeout(() =>  console.log("Timer 1 finished"), 10000);

setImmediate((() =>  console.log("Immediate 1 finished")));

fs.readFile('text-file.txt',() => {
    console.log('I/O finished');
});

console.log('Hello from the top-level code');
