const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
   
    res.setHeader('content-type', 'text/html')
    console.log(req);
    if (req = '/') {
        res.statusCode = 200;
        res.end('<h1>this is sachin with herry</h1><p>hey this is the way to rock the world!</p>');
    }
    else if (req = '/about') {
        res.statusCode = 200;
        res.end('<h1> about  sachin with herry</h1><p>hey this about code with herry!!</p>');
    }
    else if (req = '/hello') {
        res.statusCode = 200;
      const data=  fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Not Found</h1><p>hey page was not found on this server!</p>');
    }
   
})
server.listen(port, () => {
    console.log(`server is listen on port ${port}`);
    
});