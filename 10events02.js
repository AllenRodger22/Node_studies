const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    res.end('First Response sent');});

    
server.listen(8000,'127.0.0.1');