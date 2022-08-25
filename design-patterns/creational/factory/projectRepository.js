var projectRepo = function (){
    var get = function(id){
        console.log(`getting project ${id}`)
        return `getting project ${id}`
    }

    return {get}
}

module.exports = projectRepo()