// ES5 creation of object literals
function createUser (firstName, lastName ){
    let fullname =  firstName + ' ' + lastName;
    return{
        firstName : firstName,
        lastName : lastName,
        fullname : fullname
    };
}

// ES6 creation of object literals
function createUser2 (firstName, lastName ){
    let fullname =  firstName + ' ' + lastName;
    return{
        firstName,
        lastName,
        fullname
    };
}

let user = createUser('sumanth', 'summy');
let user2 = createUser2('sumanth', 'summy');

console.log(user);
console.log(user2);
