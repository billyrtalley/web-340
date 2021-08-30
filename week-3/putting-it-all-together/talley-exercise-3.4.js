 /*
============================================
; Title: Exercise 3.4 Putting it all Together
; Author: Professor Krasso 
; Date Modified: 29 August 2021
; Modified By: William Talley
; Description: Exercise is to take the lessons 
; learned in exercise 3.2 and 3.3 and build a functioning application
;===========================================
*/ 


var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { response } = require("express");
//require statements we need for the libraries  (http, express, the path and the morgan logger) 

var app = express();
//assign express object to a variable (app)


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//set view and view engine 
//tells Express to look in the 'views' folder
app.use(logger("short"));
//configure the logger

//get request; the colon signals we will get a request inside the params of the URL
//assign a variable, and since the req will be a number we use the parseInt function
//then output this to the indexed IDJS page
app.get("/", function(request, response) {
    response.render("index", {
        message: "Home Page"
    });
});


//sets view for About Page
app.get("/about", function(request, response) {
    response.render("about", {
        message: "About Page"
    });
});
//sets view for Contact Page
app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "Contact Page"
    });
});
//sets view for Products Page
app.get("/products", function(request, response) {
    response.render("products", {
        message: "Products Page"
    });
});
//create new server and have it listen to a port (3001) 
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});


