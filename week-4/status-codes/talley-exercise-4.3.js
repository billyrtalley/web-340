 /*
============================================
; Title: Exercise 4.3 HTTP Status Codes
; Author: Professor Krasso 
; Date Modified: 4 September 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;how to set up status codes in express and learn 
; the meanings of common status codes
;===========================================
*/ 

const { response } = require('express');
var express = require('express');
var http = require('http');
//declaration: require statements for libraries: express, http
//tried it without morgan

var app = express();
// assignment: variable app assigned to express

//requests using different status codes: 404, 200 and 501
app.get('/not-found', function(req, res) {
    res.status(404);
    res.json({
        error: "Sorry, we can't find that page :'("
    });
});

app.get('/ok', function (req, res) {

    res.status(200);
    res.json({
        error: 'Your page will be ready soon.'
    });
});

app.get('/not-implemented', function (req, res) {

    res.status(501);
    res.json({
        error: "It's not you, it's us! This page isn't ready yet!"
    });
});

//create the server
http.createServer(app).listen(8080, function() {
    console.log("Success! The application started on port 8080!");
});

//use the morgan logger from now on. it's faster to test in the cmd terminal
//instead of the browser window