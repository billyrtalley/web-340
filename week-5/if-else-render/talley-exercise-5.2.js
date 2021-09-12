/*
============================================
; Title: Exercise 5.2 EJS Templates
; Author: Professor Krasso 
; Date Modified: 12 September 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;and practice using if/else statements in EJS view templates.
;===========================================
*/ 

var express = require('express');
var http = require('http');
var path = require("path");
var logger = require('morgan');
//declaration: require statements for libraries: express, ejs, morgan, http object
//adding a path object in order to see where are views are saved
//morgan isn't mandatory, but adding to build the habit of using it to log activity and view messages

var app = express();
// assignment: variable app assigned to express
app.set('views', path.resolve(__dirname, 'views'));
//tells express to look inside the views folder for files
app.set('view engine', 'ejs');
//tells express we are using ejs as the view engine

app.use(logger('dev'));
//add the logger; this will allow us to see message in the terminal window 

//local fruits array
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Cobain"
];

// routes 
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });
});


http.createServer(app).listen(8080, function() {
    console.log('Application has started and listening on port 8080')
});
//create the server, assign a port (8080), set up a message
//that let us know the application started on port 8080