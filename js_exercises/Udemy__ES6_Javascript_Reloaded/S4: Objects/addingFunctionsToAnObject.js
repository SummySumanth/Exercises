let obj = {
    a : '123',
    b : '456',
    sum : function (num1,num2){
        return num1 + num2; // this was in es5 and in ES6 it can be done in the follwoing way..
    },
    sum2 (num1,num2){
        return num1 + num2;
    }
}

console.log(obj.sum(1,1));
console.log(obj.sum2(1,1));
