/*
============================================
; Title: Exercise 7.2 TDD in Action 
; Author: Professor Krasso 
; Date Modified: 25 September 2021
; Modified By: William Talley
; Description: Exercise to practice creating a test in Chai
;===========================================
*/ 

var fruits = require("../talley-fruits");


//require the chai app and then use the assert property to make assertions
var chai = require("chai");
var assert = chai.assert;

//specification to run at the mocha level and assertions at the chai level

describe("fruits", function() {
    it("it should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});