var TaskRepo = (function(){
	var taskRepo;
	function createRepo(){
		var taskRepo = new Object('Task')
	}
	return {
		getInstance: function(){
			if(!taskRepo){
				taskRepo = createRepo()
			}
			return taskRepo;
		}
	}
})()

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
	console.log("same taskrepo")
}

var repo = function(){
    var called = 0;
    var save = function(task){
        called++;
        console.log(`saving ${task} called ${called} times`)
    }
    console.log('newing up task repo')
    return{
        save:save
    }
}

var myrepo = repo()

myrepo.save('fromMain')
myrepo.save('fromMain')
myrepo.save('fromMain')