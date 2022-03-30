// SERVER
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW page');
    } else if (pathName ==='/product'){
        res.end('This is the PRODUCT page')
    } else if (pathName === '/api'){
        res.readFile(`other stuff/avocado.json`,'utf-8',(err,data)=>{
            const productData = JSON.parse(data);
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(data);
        });
        res.end('API');
    } else if (pathName ==='/edu'){
        res.end('Salve, Edu, grandiosa cria !')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 page not found');
    }


});

server.listen(5000,'127.0.0.1',()=>{
    console.log('listening at port 5000.....')
});