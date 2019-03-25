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

class audi extends Car{
    constructor(carSpec){
        super(carSpec);
        this.engine = carSpec.engine;
    }
}

let myAudi = new audi({name: 'audi', model: 'abc', description: 'good car', engine: 'V8'});

console.log(myAudi);