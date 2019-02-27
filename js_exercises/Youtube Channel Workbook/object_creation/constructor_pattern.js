let peopleConstructor = function(name, age, state){
    this.age = age;
    this.name = name;
    this.state = state;

    this.printPerson = function(){
        console.log(`${this.name} ${this.age} ${this.state}`);
    }
}

let person1 = new peopleConstructor('summy', 22, 'alive');
let person2 = new peopleConstructor('bio', 23, 'dead');

person1.printPerson();
person2.printPerson();

// Note: 
/* 
    Problem with this pattern is that, as you have noticed , the function printPerson is redundent(multiple copies). 
    this could be cover come in Prototype pattern
*/