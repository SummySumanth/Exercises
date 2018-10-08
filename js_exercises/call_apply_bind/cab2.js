let obj = {num:2};
let arr = [1,2,3];

let addToThis = function(a,b,c){
    return this.num + a + b + c;
}



console.log(addToThis.apply(obj, arr)); //  functionname.call(obj, functionArguments)  
console.log(addToThis.apply(obj2, arr));