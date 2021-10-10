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
;
; Title: Exercise 8.4 EMS Milestone 4 Mongodb Integration
; Author: Professor Krasso 
; Date Modified: 3 October 2021
; Modified By: William Talley
; Description: Exercise is designed to practice employing Mongoose query API
; to view employee records in the ems app
;Title: The options [useMongoClient] is not supported
;Source: Stack Overflow, Akib Sadmanee 
;Date: 2 January 2018
; Description: installed new version of MongoDB and didn't know how to uninstall. Source for connecting to new MongoDB
; instructions
;
; Title: Exercise 9.2 EMS Milestone 5: Finalize MongoDB Integrations
; Author: Professor Krasso 
; Date Modified: 9-10 October 2021
; Modified By: William Talley
; Description: In this exercise, we add a GET request to the view.ejs page 
; in order to be able to query Mongo for select records
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
// const { once } = require("events");
// const { urlencoded } = require("body-parser");

//set up the connection stringy
// var mongoDB = 'mongodb+srv://billyrtalley:TRIumph2014@buwebdev-cluster-1.wmilj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// //connect to the database
// mongoose.connect(mongoDB, { 
//     useMongoClient: true,
// });


//installed new version of MongoDB and didnt know how to uninstall. Source for connecting to new MongoDB
// instructions: https://stackoverflow.com/questions/48031029/the-options-usemongoclient-is-not-supported

mongoose.connect('mongodb+srv://billyrtalley:TRIumph2014@buwebdev-cluster-1.wmilj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

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
app.set("port", process.env.PORT || 8080);
//add the logger; this will allow us to see message in the terminal window 
app.use(logger('short'));

// week 8- add a use statement for helmet
app.use(helmet.xssFilter());

//week 8 (8.3) use statements for body-parser, cookie-parser and csurf
app.use (
    bodyParser.urlencoded({
        extended: true,
    })  
);

app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) { 
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
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

//add the routing for /list

app.get("/list", function (request, response) { 
    Employee.find({}, function (error, employees) {
        if (error) throw error;

        response.render("list", {
            title: "Employee Names",
            employees: employees,
        });
    });
});

//week 8(8.3) add new routing for exercise 8.3
//updated with status 400 for exercise 8.4
app.post("/process", function (request, response) { 
    //from 8.3 console.log(request.body.txtName);
    if(!request.body.txtName) {
        response.status(400).send("All entries require a name");
        return;
    }
//Exercise 8.4 get the form data
    var employeeName = request.body.txtName;
    console.log(employeeName);

    var employee = new Employee({ 
        name: employeeName,
    });
//Exercise 8.4 save the data  
    employee.save(function (error) { 
        if (error) throw error;
        console.log(employeeName + " save successful");
    });

    response.redirect("/list");
});

// Exercise 9.2: updated route for  /view
app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;
    Employee.find({ name: queryName }, function (error, employees) {
      if (error) throw error;
      console.log(employees);
      if (employees.length > 0) {
        response.render("view", {
          title: "Employee Record",
          employee: employees,
        });
      } else {
        response.redirect("/list");
      }
    });
  });

//set folder for the css style
app.use(express.static(__dirname + "/css"));

//create the server, assign a port (8080), set up a message
//that let us know the application started on port 8081
http.createServer(app).listen(app.get("port"), function() {
    console.log('Application has started and listening on port ' + app.get("port"));
});