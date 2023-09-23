const http = require('http');

const port = process.env.port || 3000;

const server = http.Server((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> Hello this is Bhavya.!! </h1> <p>This is a resposne using js Server.</p>')
})

server.listen({port});