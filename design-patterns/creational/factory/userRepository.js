var userRepo = function (){
    var get = function(id){
        console.log(`getting user ${id}`)
        return `getting user ${id}`
    }

    return {get}
}

module.exports = userRepo()