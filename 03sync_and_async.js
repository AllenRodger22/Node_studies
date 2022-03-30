//Blocking and non-Blocking, sync and async
const fs = require('fs');


//synchronous (blocking)
const input = fs.readFileSync('other stuff/input.txt', 'utf-8');
console.log(input);

//asynchronous (non-blocking)
fs.readFile('other stuff/input.txt', 'utf-8',(err, data) => {
    console.log(data);
});
console.log('Reading file...');
