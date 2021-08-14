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
*/

var http = require ("http");

function processRequest(req, res) {
    var body = "Aloha, this is Billy's web server";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain',
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);