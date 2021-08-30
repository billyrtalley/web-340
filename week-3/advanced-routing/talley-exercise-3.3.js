 /*
============================================
; Title: Exercise 3.3 Advanced Routing
; Author: Professor Krasso 
; Date Modified: 29 August 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;how to pass values to a route, how to accept the values, 
; and output them to an HTML or EJS page
;===========================================
*/ 

var express =  require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
//require statements for (http, express, the path and the morgan logger)

var app = express();
//assign express to the variable "app"

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
//set view and view engine 
//tells Express to look in the 'views' folder
app.use(logger('dev'));
//configure the logger

//get request; the colon signals we will get a request inside the params of the URL
//assign a variable, and since the req will be a number we use the parseInt function
//then output this to the indexed IDJS page
app.get('/:productId', function(req, res) {
    var productId = parseInt(req.params.productId, 10);

    res.render('index', { 
        productId: productId
    });
});

//create new server and have it listen to a port (3001)
http.createServer(app).listen(3001, function() {
    console.log("Application started and is listening on port %s", 3001)
});