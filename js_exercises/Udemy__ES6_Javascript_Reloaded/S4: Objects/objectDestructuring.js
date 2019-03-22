// ES5 way

let obj = {
    x : 1,
    y : 2,
    z : 3
}

let x = obj.x;
let y = obj.y;
let z = obj.z;

console.log(x, y, z);

// ES6 way provide a easier way to de structure

let obj2 = {
    a : 1,
    b : 2,
    c : 3
}

let { a, b, c } = obj2;//key names must match

console.log(a, b, c);