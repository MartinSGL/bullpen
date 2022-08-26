var Task = function (data) {
    this.name = data.name
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
}

var TaskService = function (){
    return {
        complete: function(task){
            task.complete = true
            console.log(`completing task ${task.name}`)
        },
        setCompleteDate: function(task){
            task.completedDate = new Date()
            console.log(`${task.name} completed on ${task.completedDate}`)
        },
        notifyCompletion: function(task,user){
            console.log(`Notifying ${user} of the comlpetion of ${task.name}`)
        },
        save: function (task){
            console.log(`savint Task: ${task.name}`)
        }
    }
} ()

//this is a simple facade pattern
var TaskServiceWrapper = function(){
    var completeAndNotify = function(task){
        TaskService.complete(myTask)
        if(myTask.completed===true){
            TaskService.setCompleteDate(myTask)
            TaskService.notifyCompletion(myTask,myTask.user)
            TaskServioce.save(myTask)
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}()

var myTask = new Task({
    name:'MyTask',
    priority:1,
    project:'Courses',
    user:'Jon',
    completed:false
})


TaskServiceWrapper.completeAndNotify(myTask)
//this was before instead of TaskServiceWrapper.completeAndNotify(myTask)
// TaskService.complete(myTask)
// if(myTask.completed===true){
//     TaskService.setCompleteDate(myTask)
//     TaskService.notifyCompletion(myTask,myTask.user)
//     TaskServioce.save(myTask)
// }

console.log(myTask)