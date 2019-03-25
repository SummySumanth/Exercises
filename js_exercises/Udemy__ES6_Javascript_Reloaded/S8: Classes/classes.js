console.clear();

class Car{
    constructor(carSpec){
        this.name = carSpec.name;
        this.model = carSpec.model;
        this.description = carSpec.description;
    }

    drive(){
        console.log('Vroom Vroom');
    }
}

let car = new Car({name: 'audi', model: 'abc', description: 'good car'});


console.log(car);

car.drive();