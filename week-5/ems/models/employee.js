/*
============================================
; Title: Exercise 5.2 EJS Templates
; Author: Professor Krasso 
; Date Modified: 25 September 2021
; Modified By: William Talley
; Description: Create the EmployeeSchema and 
; map the EmployeeSchema to the employee model
; employeeSchema will have two fields (first name and last name)
;===========================================
*/ 

// require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create the EmployeeSchema; built from fruit example in WEB340 ex7.4 instructions
let EmployeeSchema = new Schema ({
    name: { type: String, required: true },
});

//export
module.exports = mongoose.model("Employee", EmployeeSchema);