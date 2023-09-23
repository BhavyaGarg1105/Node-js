const http = require('http');

const port = process.env.port || 3000;

const server = http.Server((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    if(req.url=='/'){
        res.end('<h1> Hello this is Bhavya.!! </h1> <p>This is a resposne using js Server.</p>');
    }
    else if(req.url=='/about'){
        res.end('<h1> Hello this is about Bhavya.!! </h1> <p>This is about using js Server.</p>');
    }
})

server.listen({port});