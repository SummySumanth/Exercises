function waitingFor(name){
    console.log('waiting for ' + name);

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(name === 'mike'){
                reject(`mike is always late`);
            } else{
                resolve(name);
            }
        },2000);
    })
}

function waitingForFriend(name){
    return function(){
        return waitingFor(name);
    }
}


function leave(){
    console.log('Great we have everyone!');
}

waitingFor('abdi').then(waitingForFriend('Thomas'))
                .then(waitingForFriend('Michelle'))
                .then(waitingForFriend('John'))
                .then(leave);