/*
============================================
; Title: Exercise 2.4
; Author: Professor Krasso 
; Date Modified: 22 August 2021
; Modified By: William Talley
; Description: Exercise is to practice how to
; views in Express and attempt to use Bootstrap
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();
//load Express modules, and http & path Node modules and define the app variable with Express


app.set("views", path.resolve(__dirname, "views"));
//tell express the views are in the 'views' directory

app.set("view engine", "ejs");
//tell express to the EJS view engine

app.get("/", function (request, response) {
    response.render("index", {
        firstName: "William",
        lastName:  "Talley",
        address: "344 Clinton St., Apt. 3B, Metropolis, USA",
    });
});


http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});
//creates a Node server and then listen to a specific port (port8080)


