let obj = {num:2};

let addToThis = function(a,b,c){
    return this.num + a + b + c;
}

console.log(addToThis.call(obj, 3, 2, 1)); //  functionname.call(obj, functionArguments)  