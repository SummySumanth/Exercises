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

waitingFor('mike')
            .then(
                (name) => console.log(' great we have got ' + name)
            )
            .catch(
                (err) => console.log(err)
            );