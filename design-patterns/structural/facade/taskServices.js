var Task = function (data) {
    this.name = data.name
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
}

var TaskService = function (){
    return {
        complete: function(task){
            task.completed = true
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

module.exports = {TaskService, Task}