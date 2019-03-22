var person = {
    firstName : 'Sumanth',
    lastName : 'Bettadapura',
    getFullName1: function() {
        console.log('1 ' + this.firstName + ' ' + this.lastName);//No context change
    },
    getFullName2: function() {
        var name = function (){
            console.log('2 ' + this.firstName + ' ' + this.lastName);// change of context
        }
        return name();
    },
    getFullName3: function() {
        var that = this;
        var name = function (){
            console.log('3 ' + that.firstName + ' ' + that.lastName);// change of context but passing 'this' reference in 'that' variable
        }
        return name();
    },
    getFullName4: function() {
        var name = function (){
            console.log('4 ' + this.firstName + ' ' + this.lastName);// change of context and binding 'this' context to the 'name' function
        }.bind(this);
        return name();
    },
    getFullName5: function() {
        var name = () => console.log('5 ' + this.firstName + ' ' + this.lastName);// change of context
        return name();
    },
}

person.getFullName1(); // Sumanth Bettadapura

person.getFullName2(); // undefined undefined

person.getFullName3(); // Sumanth Bettadapura

person.getFullName4(); // Sumanth Bettadapura

/* ES6 enables us to elimante this frustration of this keyword using fat arrow functions */

person.getFullName5(); // Sumanth Bettadapura