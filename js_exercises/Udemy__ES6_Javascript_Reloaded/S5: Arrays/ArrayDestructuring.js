let fruits = [ 'apple', 'banana', 'grapes'];

let a = fruits[0], 
    b = fruits[1], 
    c = fruits[2];

    console.log(a, b, c);

    // OR

    let [x, y, z] = fruits;

    console.log(x, y, z);

    // and if we want to miss out an array item we can do this

    let [e, , f] = fruits;

    console.log(e,f);
