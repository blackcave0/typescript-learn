"use strict";
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduction() {
        // return `Hi, my name is ${this.name} and I am ${this.age} years old. My hobbies are ${this.hobbies.join(', ')}.`;
        return this.age;
    }
}
class StudentsDataAc extends Persons {
    constructor(name, age, hobbies) {
        super(name, age, hobbies);
    }
    introduction() {
        return this.age;
    }
}
const dakshData = new Persons('daksh', 23, ['coding', 'reading', 'traveling']);
console.log(dakshData.introduction());
console.log(dakshData.name);
const dakshDataAc = new StudentsDataAc('daksh', 23, ['coding', 'reading', 'traveling']);
console.log(dakshDataAc.introduction());
console.log(dakshDataAc.name);
