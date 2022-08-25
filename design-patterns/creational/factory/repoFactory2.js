var repoFactory = function (){
    var repos = this
    var repoList = [
        {name:'task',source:'./taskRepository'},
        {name:'user',source:'./userRepository'},
        {name:'project',source:'./projectRepository'}
    ]

    repoList.forEach( repo => {
        //you could use the keyword "this" instead of repo
        repos[repo.name] = require(repo.source)
    })
}

module.exports = new repoFactory