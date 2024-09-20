"use strict";
class PersonAsShorthand {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introductionParent() {
        return `My name is ${this.name}, I am ${this.age} years old. my hobbies are ${this.hobbies.join(', ')}`;
    }
}
class StudentasShorthand extends PersonAsShorthand {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introductionChild() {
        return `${super.introductionParent()} and I am in grade ${this.grade}`;
    }
    studenthobbies() {
        return `My hobbies are ${this.hobbies.join(', ')}`;
    }
}
const showPerson = new PersonAsShorthand('John', 30, ['Reading', 'Coding']);
console.log(showPerson.introductionParent());
const showStudent = new StudentasShorthand('alice', 20, ['Playing', 'Singing'], 12);
console.log(showStudent.introductionChild());
console.log(showStudent.studenthobbies());
