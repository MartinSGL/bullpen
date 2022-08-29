
var {Task,TaskService} = require('./taskServices')
var TaskServiceWrapper = require('./facade')

var myTask = new Task({
    name:'MyTask',
    priority:1,
    project:'Courses',
    user:'Jon',
    completed:false
})

TaskServiceWrapper.completeAndNotify(myTask)

// this was before instead of TaskServiceWrapper.completeAndNotify(myTask)
// TaskService.complete(myTask)
// if(myTask.completed){
//     TaskService.setCompleteDate(myTask)
//     TaskService.notifyCompletion(myTask,myTask.user)
//     TaskService.save(myTask)
// }

console.log(myTask)