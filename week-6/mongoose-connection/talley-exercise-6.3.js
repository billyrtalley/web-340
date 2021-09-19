/*
============================================
; Title: Exercise 6.3 Mongoose 
; Author: Professor Krasso 
; Date Modified: 12 September 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;how to connect to Mongoose js
;===========================================
*/ 
//declaration: require statements for libraries: express, mongoose, morgan, http object
//adding a path object in order to see where are views are saved

var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

//specify database connection

var mongoDB = 'mongodb+srv://billyrtalley:TRIumph2014@buwebdev-cluster-1.wmilj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//create connection
mongoose.connect(mongoDB, { 
    useMongoClient: true
});

//add a promise
mongoose.Promise = global.Promise;

//create a variable to hold the connection
var db = mongoose.connection;

//error handling 
db.on ('error', console.error.bind(console, 'MongoDB connection error:'));
//message for when connection is made
db.once('open', function() { 
    console.log('Application connected to Compass');
});
//create express server and use our logger
var app = express();
app.use(logger('dev'));

//create http server and get a console log message to signal we are listening on port 5000
http.createServer(app).listen(5000, function() {
    console.log('The application has started and listening on port 5000');
});



