console.clear();

function waitingFor(name, done){
    console.log('waiting for ' + name);
    
    setTimeout(function(){
        if(name === 'Mike'){
            done('mike is always late');
        } else{
            done(null, name);
        }
    }, 3000);
};

waitingFor('Abdi', function(error, Abdi){
    if(error){
        console.log(error);
    } else {
        waitingFor('Michella', function(error, Michella){
            if(error){
                console.log(error);
            } else {
                waitingFor('Thomas', function(error, Thomas){
                    if(error){
                        console.log(error);
                    } else {
                        waitingFor('Mike', function(error, Abdi){
                            if(error){
                                console.log(error);
                            } else {
                                console.log('Great! We\'ve got everyone, lets go');
                            }
                        });
                    }
                    });
                    }
                })
            }
        });

