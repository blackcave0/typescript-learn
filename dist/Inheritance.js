"use strict";
//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it .
// Inheritance is a machanism in which one classs acquires the property of another class. For Example, a child inherits the traits of his/her parents
//?..Creating Class
class PersonData {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi i'm ${this.name} and i'm ${this.age} years old. My hobbies are ${this.hobbies.join(", ")}`;
    }
}
// This line declares a new class named "StudentsData".
class StudentsData extends PersonData {
    // This class inherits (extends) properties and methods from the "PersonData" class.
    // In other words, "StudentsData" is a subclass of "PersonData".
    // It means "StudentsData" can access and use everything defined in "PersonData".
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `Hi i'm ${this.name} and i'm ${this.age} years old. My hobbies are ${this.hobbies.join(", ")} and my grade is ${this.grade}`;
    }
}
const newStudent1 = new PersonData('Daksh1', 24, ['Coding', 'Vibing alone']);
const newStudent2 = new PersonData('Daksh2', 25, ['Coding', 'Vibing alone']);
const newStudent3 = new PersonData('Daksh3', 26, ['Coding', 'Vibing alone']);
const newStudent4 = new StudentsData('Daksh4', 27, ['Coding', 'Vibing alone'], 10);
// console.log(newStudent3.introduce());
console.log(newStudent4.introduce());
