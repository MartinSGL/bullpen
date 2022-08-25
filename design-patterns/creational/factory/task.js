var Task = function(name){
    this.name = name;
    this.completed = false;

    this.complete = function(){
        console.log(`completing task: ${this.name}`)
    }

    this.save = function (){
        console.log(`saving Task ${this.name}`)
    }
}

module.exports = Task