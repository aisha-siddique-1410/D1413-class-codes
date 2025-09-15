const http = require('http');

// create server

const server = http.createServer((req, res) => {

    // check the request
    if (req.url === '/login') {
           res.writeHead(200, {'Content-Type' : 'text/plain'});
           res.end('welcome to home page ');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
           res.end('welcome to about page ');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
           res.end('welcome to Contact page ');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
           res.end('404 - pagenot found');
    }


    // // set response header
    // res.writeHead(200, {'Content-Type' : 'text/plain'});

    // //send response 
    // res.end('hello students! Welcome to http module')

});

