/*
============================================
; Title: Exercise 5.4 EMS
; Author: Professor Krasso 
; Date Modified: 19 September 2021
; Modified By: William Talley
; Description: Javascript to EMS; require statements
; assign variable to express, setup view locations and EJS for the view engine
; set up Morgan to log messages and activity, setup the root directory view,
; the css folder and set up and port and console log a message when app is started
; and listening on the specified port
;===========================================
*/ 

//declaration: require statements for libraries: express,  morgan, http object
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// assignment: variable app assigned to express
var app = express();

//tells express to look inside the views folder for files
app.set("views", path.resolve(__dirname, "views"));
//tells express we are using ejs as the view engine
app.set("view engine", "ejs");
//add the logger; this will allow us to see message in the terminal window 
app.use(logger('short'));

//route for root directory
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

//set folder for the css style
app.use(express.static(__dirname + "/css"));

//create the server, assign a port (8081), set up a message
//that let us know the application started on port 8081
http.createServer(app).listen(8081, function() {
    console.log('Application has started and listening on port 8081')
});