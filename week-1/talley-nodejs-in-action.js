/*
Title: Exercise 1.5- Hello World
Author: William Talley
Date: 14 Aug 2021
Modified By: William Talley
Description: Practice with the built-in module of Express, HTTP
Notes: The built-in module makes it possible to develop web servers with Node
and it's what Express is built on (Hahn.2016)
Resources:
Hahn, E. (2016). Express.js in Action (1st ed.).
Manning Publications.
W3Schools. Node.js as a Web Server. n.d.
url: https://www.w3schools.com/nodejs/nodejs_http.asp Date Accessed: August 14-15, 17 2021
*/

var http = require ("http");
//transfer data to the HTTP (W3Schools. n.d.)
function processRequest(req, res) {
    var body = "Aloha, this is Billy's web server";
//response to the client (W3Schools. n.d.)
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain',
    });
//all is OK and the gives the object with the response headers (W3Schools. n.d.)
    res.end(body); 
//
}
var s = http.createServer(processRequest);
s.listen(8080);
//server object listens on port 8080 (W3Schools. n.d.)