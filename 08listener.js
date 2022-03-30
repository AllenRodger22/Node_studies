const http = require('http');

const server = http.createServer();

//OBSERVER DESIGN PATTERN  <( O )>

// Listener on REQUEST
server.on('request',(req,res)=>{
    console.log('Request received');
    res.end('Hello from the server');
});


