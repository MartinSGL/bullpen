var Task = function(name){
    this.name = name;
    this.completed = false;
}

this.prototype.complete = function(){
    console.log(`completing task: ${this.name}`)
    this.complete = true
}

this.prototype.save = function (){
    console.log(`saving Task ${this.name}`)
}

module.exports = Task