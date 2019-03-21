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

for(let car of cars2){
    console.log(car);
}