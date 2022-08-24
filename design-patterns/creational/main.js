var Task = require('./constructor.js')
//var Task = require('./class')
var Repo = require('./task_repository') //module

var task1 = new Task(Repo.get(1))

// var task1 = new Task('create a demo for constructor')
var task2 = new Task({name:'create a demo for modules'})
var task3 = new Task({name:'create a demo for singletons'})
var task4 = new Task({name:'create a demo for prototypes'})

task1.complete()
task2.save()
task3.save()
task4.save()

