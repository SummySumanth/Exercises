
let numbers = [1,2,3];

function sum(num1,num2,num3){
    return num1 + num2 + num3;
}

console.log(sum(...numbers));

//it spreads the items inside an array

let a = [1,2,3];
let b = [0, ...a , 4 , 5];

console.log(b);