let fruits = [ 'apple', 'banana', 'grapes'];

for( let i in fruits){
    console.log(i,fruits[i]);// i  --> index
}

for (let i of fruits){
    console.log(i); // i --> item
}