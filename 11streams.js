//Stream concept ---> perfect for large volumes of data


//there's no need to keep all volume of data in memory

//1. Readable streams --- http request/fs readtreams
//2. Writable  streams --- http response/fs writestreams
//3. Duplex streams --- web socket
//4. Transform streams ---zlib Gzip cration

const fs = require('fs');
const server = require('http').createServer();




 server.on('request',(req,res)=>{

// solution 1 ( entire file into memory)
//     fs.readFile('other stuff/test-file.txt',(err,data)=>{
//         if(err) console.log(err);
//         res.end(data);
//     });


// solution 2 (using streams)
//we always need DATA and END like that
const readable = fs.createReadStream('other stuff/test-file.txt');
readable.on('data',chunk => {
    re.write(chunk);
})
readable.on('end',()=>{
    res.end();
});

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening ate 8000 port....')
});