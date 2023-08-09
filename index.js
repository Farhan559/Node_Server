const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.method === 'GET')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('This is the response for GET request')
    } else if(req.method === 'POST')
    {
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('This is the response for POST request')
    } else{
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end('Method not allowed .\n');
    }
});

    const port = 4000;
    server.listen(port,()=>{
        console.log('Server is listening on port:' + port);
    });