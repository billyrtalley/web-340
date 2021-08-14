/*
Title: Exercise 1.3
Author: William Talley
Date: 14 Aug 2021
Modified By: William Talley
Description: Modules and the three components (third-party, built-in, and custom)
Notes: A module is a bit of code encapsulated in a file and exported to another file (Crutchfield. 2018).
CommonJS allows for code encapsulation, as modules with no global variables won’t
conflict with each other when your application is run (Crutchfield. 2018). 
 Without module systems like CommonJS, dependencies had to be loaded in <script> tags in the
header of an HTML file, OR all code had to be lumped together which is incredibly slow
and inefficient for file loading (Crutchfield. 2018). 
Resources:
Crutchfield, Constance. Commonjs...what, what and how. October 21, 2018. 
url: https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46
*/

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=talley');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);