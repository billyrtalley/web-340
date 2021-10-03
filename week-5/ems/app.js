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
;
; Title: Exercise 7.4 EMS
; Author: Professor Krasso 
; Date Modified: 25 September 2021
; Modified By: William Talley
; Description: Javascript to EMS; modified the original app.js file to
; include the mongoose connection code and Employee model.
;
; Title: Exercise 8.2 Cross Site Scripting
; Author: Professor Krasso 
; Date Modified: 3 October 2021
; Modified By: William Talley
; Description: Exercise is designed to practice installing helmet to our ems application
; to protect against cross-site scripting
;
; Title: Exercise 8.3 Cross Site Request Forgery
; Author: Professor Krasso 
; Date Modified: 3 October 2021
; Modified By: William Talley
; Description: Exercise is designed to practice protecting against
; cross site request forgery. The objective is to create a random CSRF token every time the
; user is asked for data and to validate the random token every time i deal with the data
;===========================================
*/ 

//declaration: require statements for libraries: express,  morgan, http object, and the mongoose connection and models folder
//week 8 add require statement for helmet
//8.3 add body-parser, cookie-parser, and csurf to require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");
const { once } = require("events");
const { urlencoded } = require("body-parser");

//set up the connection string
var mongoDB = 'mongodb+srv://billyrtalley:TRIumph2014@buwebdev-cluster-1.wmilj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//connect to the database
mongoose.connect(mongoDB, { 
    useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
//set up an error message
db.on("error", console.error.bind(console, "MongoDB connection error: "));

//set up a message that shows the connection was successful
db.once ("open", function() {
    console.log("Application connection to MongoDB Atlas instance");
});

//week 8 (8.3) add variable to setup csrf protection
var csrfProtection = csrf({cookie: true});

// assignment: variable app assigned to express
var app = express();

//tells express to look inside the views folder for files
app.set("views", path.resolve(__dirname, "views"));
//tells express we are using ejs as the view engine
app.set("view engine", "ejs");

//add the logger; this will allow us to see message in the terminal window 
app.use(logger('short'));

// week 8- add a use statement for helmet
app.use(helmet.xssFilter());

//week 8 (8.3) use statements for body-parser, cookie-parser and csurf
app.use (
    bodyParser, urlencoded({
        extended: true,
    })  
);

app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) { 
    var token = request.csrfToken();
    response.cookie("XSRF-Token", token);
    response.locals.csrfToken = token;
    next();
});


//add variable for employee
var employee = new Employee({
    firstName: "Billy",
    lastName: "Talley"
});

//route for root directory
//week 8- http calls for helmet 
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page",
        message: "XSS prevention example"
    });
});

//add a new message for 8.3
app.get("/new", function (request, response) { 
    response.render("new", {
        message: "message added for Exercise 8.3",
    });
});

//week 8(8.3) add new routing for exercise 8.3

app.post("/process", function (request, response) { 
    console.log(request.body.txtName);
    response.redirect("/");
});

//set folder for the css style
app.use(express.static(__dirname + "/css"));

//create the server, assign a port (8081), set up a message
//that let us know the application started on port 8081
http.createServer(app).listen(8081, function() {
    console.log('Application has started and listening on port 8081')
});