var {TaskService} = require('./taskServices')

//this is a simple facade pattern
var TaskServiceWrapper = function(){
    var completeAndNotify = function(task){
        TaskService.complete(task)
        if(task.completed===true){
            TaskService.setCompleteDate(task)
            TaskService.notifyCompletion(task,task.user)
            TaskService.save(task)
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}()

module.exports = TaskServiceWrapper