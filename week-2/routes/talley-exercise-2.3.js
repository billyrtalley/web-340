/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso 
; Date Modified: 22 August 2021
; Modified By: William Talley
; Description: This program is an exercise
; to build the components of a Node application
; (project folder, the package.json file and 
; necessary modules) and intercept specific routes
; and how to create a 404 message for request that 
; were not specifically coded for. Notes and comments
; were created from the WEB340 exercise 2.3 video
;===========================================
*/

//require statement for Express; inside the () 
//is the library name
var express = require('express');
//require statement for http; library that starts the server
var http = require('http');

//variable to set up the Express app
var app = express()

//creates the route interceptors that will catch the 
//URL messages and then send a response to notify 
// the user
app.get('/', function(req, res)
{ 
    res.end('Aloha. Welcome to the homepage.\n');
});
//http get request is made up of a route and a function
//that accepts requests and gives a response; the 
// /n is to create a new line for cleaner formatting

app.get('/about', function(req, res) 
{
    res.end('Aloha. Welcome to the about page.\n');
});
//get request for the about page

app.get('/contact', function(req, res) 
{
    res.end('Aloha. Welcome the contacts page.\n');
})
//get request for the contacts page

app.use(function(req, res) 
{
    res.statusCode = 404;
    res.end('404!\n');
})
//route interceptor for any bad requests (requests that were not coded for); need to use app. use
//res.statsCode 404 and a message to the end user for this interceptor

http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s, 3000');
})
//creates a Node server and then listen to a specific port