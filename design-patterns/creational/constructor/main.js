//execute this file with node
//you can use either constructor function or class

var Task = require('./task') //export from constructor function
// var Task = require('./class') //export from classes avaliable from ES6 - 2015

var task1 = new Task('create a demo for constructor')
var task2 = new Task('create a demo for modules')
var task3 = new Task('create a demo for singletons')
var task4 = new Task('create a demo for prototypes')

task1.complete()
task2.save()
task3.save()
task4.save()