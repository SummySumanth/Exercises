let peopleDynamicProto = function(name, age, state) {
    peopleDynamicProto.prototype.name = name;
    peopleDynamicProto.prototype.age = age;
    peopleDynamicProto.prototype.state = state;

    // to add only if it does not exist
    if(typeof this.printPerson != 'function'){
        peopleDynamicProto.prototype.printPerson = function(){
            console.log(this.name + ' ' + this.age + ' ' + this.state);   
        };
    }
}

let person1 = new peopleDynamicProto('summy',21,'alive');
let person2 = new peopleDynamicProto('sumanth',22,'dead');

person1.printPerson();
person2.printPerson();

console.log('name' in person1, 'has a name property');
console.log(person1.hasOwnProperty('name'), 'has own name property');