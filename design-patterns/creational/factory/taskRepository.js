var repo = function(){
    //private information
    var db = {}
    
    var get = function(id){
        console.log('Getting task' + id)
        return {
            name: 'new task from db'
        }
    }
    var save = function(task){
        console.log(`Saving ${task.name} to the db`)
    }

    return {
        get,save
    }
}

module.exports = repo()