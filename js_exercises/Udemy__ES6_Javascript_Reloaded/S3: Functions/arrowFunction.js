let foo = (a,b) => {
    let counter = 0;
    for(let i = 0;i<b;i++){
        counter += a;
    }
    return counter;
};


console.log(foo(1,5));