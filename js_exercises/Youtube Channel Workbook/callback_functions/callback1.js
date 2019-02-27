let x = function(){
    console.log('I am called from inside a function');
}

let y = function(callback){
    console.log('doing from Y function');
    callback();
}

y(x);