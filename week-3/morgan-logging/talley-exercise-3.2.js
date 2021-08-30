 /*
============================================
; Title: Exercise 3.2 Morgan Logging
; Author: Professor Krasso 
; Date Modified: 29 August 2021
; Modified By: William Talley
; Description: Exercise is to learn how to use
; the middleware function Morgan.
;===========================================
*/ 

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
//require statements we need for the libraries  (http, express, the path and the morgan logger)

var app = express();
//assign express object to a variable (app)

//set view and view engine and set the logger
app.set('views', path.resolve(__dirname, 'views'));
//this tells Express to look in the views for for files

app.set('view engine', 'ejs');
//use the ejs view engine

app.use(logger('dev'));
//adding the logger

app.get('/', function(req, res) {
    res.render('index', { //renders the ejs page
        message: "Aloha. This is the first time I've used Morgan!"
    });
});
//get request (contains a path, accept the function which has a request and response objects)
// return and response 
 //sends out the message on ejs page
http.createServer(app).listen(3000, function() {
    console.log("Application started and is listening on port %s", 3000)
});

// creates the server and tells it to listen on a specific port