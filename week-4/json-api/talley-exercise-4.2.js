 /*
============================================
; Title: Exercise 4.2 JSON API
; Author: Professor Krasso 
; Date Modified: 4 September 2021
; Modified By: William Talley
; Description: Exercise is to learn 
;how to create an API that will return JSON data
; to the client
;===========================================
*/ 

var express = require('express');
var http = require('http');
var logger = require('morgan');
//declaration: require statements for libraries: express, morgan, http and path

var app = express();
// assignment: variable app assigned to express

app.use(logger('dev'));
//add the logger; this will allow us to see message in the terminal window 

app.get('/customer/:id', function(req, res) {

    var id = parseInt(req.params.id, 10);

    res.json({
        firstName: 'Quentin',
        lastName: 'Tarantino',
        employeeId: id
    });
});
//get request; passing a customer id
//requests need a request and response object
//body has id from url and respond with json object

http.createServer(app).listen(3000, function() {
    console.log('Application has started and listening on port 3000')
});
//create the server, assign a port (3000), set up a message
//that let us know the application started on port 3000