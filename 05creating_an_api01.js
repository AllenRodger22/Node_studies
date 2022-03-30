//routing in JS
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/overview'){
        res.end('This is the OVERVIEW page');
    } else if (pathName ==='/product'){
        res.end('This is the PRODUCT page')
    }
});

server.listen(5000, '127.0.0.1', () => {
    console.log('Listening to requests on port 5000');
});

