"use strict";
class PersonAsGetterSetter {
    name;
    hobbies;
    // define age here as private
    _age;
    constructor(name, 
    // public age: number,
    hobbies) {
        this.name = name;
        this.hobbies = hobbies;
        //! this is not valid code for validation
        /* if (this.age > 140 || this.age < 0) {
          throw new Error('Invalid age')
        } */
    }
    //...defining the setter and getter methods here...
    set age(age) {
        if (age > 140 || age < 0) {
            throw new Error('Invalid age');
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error('Age is not defined');
        }
        return this._age;
    }
    introductionParent() {
        return `My name is ${this.name}, I am ${this.age} years old. my hobbies are ${this.hobbies.join(', ')}`;
    }
}
const showPersonAsGetterSetter = new PersonAsGetterSetter('John', ['Reading', 'Coding']);
showPersonAsGetterSetter.age = 15;
console.log(showPersonAsGetterSetter.introductionParent());
