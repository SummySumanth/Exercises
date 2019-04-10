function waitingFor(name){
    console.log('waiting for ' + name);

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(name === 'mike'){
                reject(Error(`mike is always late`));
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

function gotImpatient(error){
    console.log(error.message);
    return Promise.resolve('We\'re leaving');
}

waitingFor('abdi').then(waitingForFriend('Thomas'))
                .then(waitingForFriend('Michelle'))                
                .then(waitingForFriend('mike')) // Mike will be late
                .then(waitingForFriend('John'))
                .catch(gotImpatient)
                .then(leave);