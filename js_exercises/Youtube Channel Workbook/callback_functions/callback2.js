let add = function(a,b){
    return a+b;
}

let multiply = function(a,b){
    return a*b;
}

let doWhatever = function(a,b){
    console.log('your two numbers are ' + a +' and ' + b );
}
let calc = function(num1,num2, callback){
    return callback(num1,num2);
}

console.log(calc(2,3,doWhatever));