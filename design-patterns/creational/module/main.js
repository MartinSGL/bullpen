//execute this file with node
var Task = require('../constructor/task') //import from constructor function
var Repo = require('./taskRepository') //module

var task1 = new Task(Repo.get(1)) 