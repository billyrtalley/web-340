/*
============================================
; Title: Exercise 7.2 TDD in Action 
; Author: Professor Krasso 
; Date Modified: 12 September 2021
; Modified By: William Talley
; Description: Exercise is to practice 
; the TDD approach to development
;===========================================
*/ 

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {

    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
}); 

