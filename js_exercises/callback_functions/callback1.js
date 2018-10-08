let x = function(){
    console.log('I am called from inside a function');
}

let y = function(callback){
    console.log('doing from Y function');
    callback();
}

y(x);

/*

Callback functions are the functions that are passed as argument to another function

*/