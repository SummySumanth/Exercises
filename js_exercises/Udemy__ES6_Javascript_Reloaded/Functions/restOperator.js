function sum(...number){
    
    console.log(number); // => [1,2,3,4] *it will combine all the params received into a array object

    console.log(arguments); //arugments object will be having all the received arguments
    // read more here -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

    let result = 0;
    number.forEach(item =>{
        result += item;
    })

    console.log('result is ->', result);
}
  
sum(1,2,3,4);