"use strict";
//? lets add on function inside the object. Its more like creating a method in object 
const student1 = {
    name: 'bob',
    age: 12,
    greet: (country) => `welcome my name ${student1.name} and my age ${student1.age} year old and i am from ${country}`
};
const student2 = {
    name: 'madhu',
    age: 18,
    greet: (country) => `welcome my name ${student2.name} and my age ${student2.age} year old and i am from ${country}`
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `welcome my name ${name} and my age ${age} year old`;
};
console.log(introduction(student1));
console.log(student1.greet('india'));
console.log(student2.greet('india'));
