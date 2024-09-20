"use strict";
const bioData = {
    name: 'stud1',
    age: 22,
    city: 'city1',
    state: 'state1'
};
const bioData1 = {
    name: 'stud1',
    age: 22,
    city: 'city1',
    state: 'state1'
};
// console.log(bioData1);
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3812224440.
//.. changing the interface into class and object
class bioDataExt {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const bioDataExt1 = new bioDataExt('classData', 22, 'city1', 'state1');
console.log(bioDataExt1);
