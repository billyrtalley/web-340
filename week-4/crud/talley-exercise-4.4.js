/*
============================================
; Title:  Assignment 4.4 cURL
; Author: William Talley
; Date:   5 September 2021
; Description: Exercise is to learn 
;how to send different requests (get, put, post, delete)
; to the server. It demonstrates the CRUD application pattern
;===========================================
============================================
; Title:  Express in Action
; Author: Evan Hahn
; Modified by: William Talley
; Date:   April 2016
; Publisher: Manning Publication. USA
; Description: Pages: 93-95. Create, read, update, delete APIs
;===========================================
*/

var express = require('express');
var http = require('http');
var logger = require('morgan');
//declaration: require statements for libraries: express, morgan, http
//don't necessarily need morgan, but wanted to get back in the habit of using it 
//to log activity and messages

var app = express();
//assignment: assign variable app to express

app.use(logger('dev'));
//add the logger; lets you see message in the terminal window 

app.get('/', function(req, res) {
    res.send("API was used to send an HTTP GET request.");
});
//get request; will return the message in parentheses to the cmd terminal

app.post('/', function(req, res) {
    res.send("API was used to send an HTTP POST request.");
});
//post request; will return the message in parentheses to the cmd terminal

app.put('/', function(req, res) { 
    res.send("API was used to send an HTTP PUT request.");
});
//put request; will return the message in parentheses to the cmd terminal

app.delete('/', function(req, res) {
    res.send("API was used to send an HTTP DELETE request.");
});
//delete request; will return the message in parentheses to the cmd terminal

//create the server and listen on port 8000
app.listen(8000, function() { 
    console.log("You are getting the hang of this. App is listening on port 8000");
})