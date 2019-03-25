function Car(carSpec){
    this.name = carSpec.name;
    this.model = carSpec.model;
    this.description = carSpec.description;
}

let car = new Car({ name: 'bmw', model: 'abc', description: 'hello world'});

Car.prototype.drive = function(){
    console.log('Driving...');
}

console.clear();

console.log(car.description);

// console.log(car.drive());

car.drive();

function Audi(carSpec){
    Car.call(this, carSpec);
    this.engine = carSpec.engine;
    this.audiDrive = function(){
        console.log('Audi Driving...');
    }
}

Audi.prototype = Object.create(Car.prototype);

Audi.prototype.constructor = Audi;

const myAudi = new Audi({
    name: 'My audi',
    model: 'Audi',
    description: 'abc 123',
    engine: 'A313'
});

console.log(myAudi.description);

