const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>this is sachin with herry</h1><p>hey this is the way to rock the world!</p>');
})
server.listen(port, () => {
    console.log(`server is listen on port ${port}`);
    
});