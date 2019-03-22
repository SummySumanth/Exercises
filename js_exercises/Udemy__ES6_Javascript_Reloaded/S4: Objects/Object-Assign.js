let item = {
    id : 1,
    content: 'Learn ES6',
    completed: false,
};

// completeed should me made into true

let newItem = Object.assign({}, item, {completed: true});
/*
    we are not mutating the 'item',  instead we are creating a new variable called newItem
    by using thing function object.assign in which
    first param     - is the one which would be returned
    second param    - is the one which would be put in that 1st param
    third param     - is the one(and all the succeeding params) which would be over written over the contents of 2nd param of which the key matches
                      present in first param
    which would be returned
*/

// instead what we can also do is use spread operator which would reduce hell lot of work

let newItem2 = {...item, completed: true};


console.log(newItem);
console.log(newItem2);