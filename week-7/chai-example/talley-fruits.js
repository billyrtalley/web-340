/*
============================================
; Title: Exercise 7.2 TDD in Action 
; Author: Professor Krasso 
; Date Modified: 25 September 2021
; Modified By: William Talley
; Description: Function that splits a comma separated string into an array that
; can be used to test in Chai
;===========================================
*/ 

function fruits(str) {
    return str.split(",");
}


//export the module
module.exports = fruits; 