const fs = require('fs');

//reading files.....
const textIn =fs.readFileSync('other stuff/text.txt', 'utf-8');
let textOut = 'text read:\n' + textIn;
console.log(textOut);

//writing files.....
fs.writeFileSync('other stuff/text_writen.txt', textOut);1