/*
============================================
; Title: Exercise 5.3 Pug Template
; Author: Professor Krasso 
; Date Modified: 12 September 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;and practice using Pug templates in Express.
;===========================================
*/ 


//declaration: require statements for libraries: express, pug, morgan, http object
//adding a path object in order to see where are views are saved
//morgan isn't mandatory, but adding to build the habit of using it to log activity and view messages

var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');
var logger = require('morgan');


// assignment: variable app assigned to express
var app = express();

//tells express to look inside the views folder for files
app.set('views', path.resolve(__dirname, 'views'));
//tells express we are using pug as the view engine
app.set('view engine', 'pug');

app.use(logger('dev'));
//add the logger; this will allow us to see message in the terminal window 

//route and pass a message
app.get('/', function(_request, response) { 
    response.render('index', { 
        message: "Aloha! Welcome to Billy's Pug based homepage."
    });
});

//create the server, assign a port (8001), set up a message
//that let us know the application started on port 8001
http.createServer(app).listen(8001, function() {
    console.log('Application has started and listening on port 8001')
});


