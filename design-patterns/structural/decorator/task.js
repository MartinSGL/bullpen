var Task = function (name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log(`completing task: ${this.name}`)
    this.completed = true
}

Task.prototype.save = function (){
    console.log(this)
    console.log(`saving task ${this.name}`)
}

var myTask = new Task('Legacy Task')
myTask.complete()
myTask.save()

var urgentTask = new Task('Urgent Task')
urgentTask.priority = 2
urgentTask.notify = function(){
    console.log('notifying important people')
}
// urgentTask.notify() easy way to doit with out saving
urgentTask.complete()
urgentTask.save = function (){
    this.notify();
    Task.prototype.save.call(this) 
    //this is used to call origin save prototype
    //
}
urgentTask.save()