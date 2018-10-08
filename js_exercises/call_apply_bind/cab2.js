let obj = {num:2};
let obj2 = {num:5};

let addToThis = function(a,b,c){
    return this.num + a + b + c;
}

console.log(addToThis.call(obj, 3, 2, 1)); //  functionname.call(obj, functionArguments)  

let arr = [1,2,3];

console.log(addToThis.apply(obj, arr)); //  functionname.call(obj, functionArguments)  
console.log(addToThis.apply(obj2, arr));