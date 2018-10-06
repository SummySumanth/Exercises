let passed = 3;

let addTo = function(passed){
    
    let inner = 2

    let add = function(inner){
        return passed+inner;
    }

    return add;
} 

let addThree = addTo(3);
let addFour = addTo(4);//Watch this in chrome console

console.dir(addThree);
console.dir(addFour);


console.log(addThree(1));
console.log(addFour(1))
/*

*/