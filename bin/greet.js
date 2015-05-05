#!/usr/bin/env node

var greet = require("greet");
var argv = require('minimist');

var argv = require('minimist')(process.argv.slice(2));

var name = argv._[0];
var drunk = argv.drunk;

console.log(greet(name, drunk));
