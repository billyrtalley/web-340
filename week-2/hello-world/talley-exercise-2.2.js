/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso 
; Date Modified: 21 August 2021
; Modified By: Talley
; Description: This program is an exercise
; to build the components of a Node application
; (project folder, the package.json file and 
; necessary modules). Notes and comments
; were created from the WEB340 exercise 2.2 video
;===========================================
*/

//require statement for Express; inside the () 
//is the library name
var express = require('express');
//require statement for http; library that starts the server
var http = require('http');
//variable for the Express app
var app =  express();


app.use(function(req, res) 
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
// \n use to add a new line to clean up the format of the message
})

//create new server, listen on a port, output message
//that says application is started and the port its listening on
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});
