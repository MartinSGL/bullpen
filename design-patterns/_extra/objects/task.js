var task = {}
// var task = Object.create(Object.prototype)
// var task = new Object()

task.title = 'My new task'
task.description = 'My description'

console.log(task.toString())

Object.defineProperty(task, 'toString',{
    value:toString = function () {
        return this.title + ' ' + this.description
    },
    writable:true, //alow to modify properties of an object
    enumerable:false, //allow to show the keys or not
    configurable:true //allor to configure the object or no

})

console.log(Object.keys(task))