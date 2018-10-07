let cleanRoom = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' cleaned the room,');
    });
}

let RemoveGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' Removed garbage,');
    });
}

let winIcecream = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' Won Ice cream,');
    });
}

cleanRoom('is ').then(function(result){
    return RemoveGarbage(result)
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log('finished ' + result);
});