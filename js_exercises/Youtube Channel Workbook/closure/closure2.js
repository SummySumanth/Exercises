let passed = 3;

let addTo = function(){
    let inner = 2;
    return passed+inner;
} 

console.log(addTo(3));

console.dir(addTo);// Note: Open this in chrome console

/*
    this doesn't look like closure but it is,
    variables declared outside a function are available inside the function
    but variables declared inside a function are not available outside the function
    this is possible because of lexical scoping of js.
     
    how is this done? this is done by closure
*/