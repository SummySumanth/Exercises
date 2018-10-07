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

Promise.all([cleanRoom, RemoveGarbage, winIcecream]).then(function(){
    console.log('all finished');
});

Promise.race([cleanRoom, RemoveGarbage, winIcecream]).then(function(){
    console.log('one of them is finished');
});