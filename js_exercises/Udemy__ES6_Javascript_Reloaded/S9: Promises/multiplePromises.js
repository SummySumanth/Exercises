console.clear();
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


function waitForAll(){
    return Promise.all([
        waitingFor('john'),
        waitingFor('mac'),
        waitingFor('rodha')
    ])
}

waitForAll().then((friends)=>{
    console.log(friends);
});