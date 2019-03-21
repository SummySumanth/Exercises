let cars = ['audi','ford','mercedes', 'audi', 'vw'];

console.log(cars.length); // 5

// In ES6 we can enforce uniqueness using sets
// Sets can store unique values of any type
// we can create sets using the 'new' keyword as followings

let cars2 =  new Set();

cars2.add('Audi');
cars2.add('BMW');
cars2.add('Mercedes');
cars2.add('Audi');


console.log('total number of cars', cars2.size);

// Sets 'for of' loop
for(let car of cars2){
    console.log(car); // -> Audi BMW Mercedes
}

// Set Destructuring

let [a,b,c] =  cars2;
console.log(a,b,c);

// weak sets
let weakCars = new WeakSet();

weakCars.add({driver : 'audi'}); //Weak sets accept only objects

let passanger = {passanger:'sarah'};

weakCars.add(passanger);

console.log(weakCars.has(passanger)); // -> true

weakCars.delete(passanger);

console.log(weakCars.has(passanger)); // -> false
