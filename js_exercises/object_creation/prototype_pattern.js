let peopleProto = function() {}

// note: adding properties and functions to shared space using .prototype
peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.state = 'no state';
peopleProto.prototype.print = function(){
    console.log(this.name + ' ' + this.age + ' ' + this.state);   
};

let person1 = new peopleProto;
let person2 = new peopleProto;

person1.name = 'Summy';
person1.age = 22;
person1.state = 'alive';

person1.print();
person2.print();