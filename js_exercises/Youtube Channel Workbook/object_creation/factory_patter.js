let peopleFactory = function(name, age, state){
    let temp = {};
    temp.age = age;
    temp.name = name;
    temp.state = state;

    temp.printPerson = function(){
        console.log(`${this.name} ${this.age} ${this.state}`);
    }
    return temp;
}

let person1 = peopleFactory('summy', 22, 'alive');

person1.printPerson();