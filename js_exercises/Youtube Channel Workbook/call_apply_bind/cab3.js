let obj = {num:2};
let arr = [1,2,3];

let addToThis = function(a,b,c){
    return this.num + a + b + c;
}

var  bound = addToThis.bind(obj);

console.dir(bound(...arr));