"use strict";
//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//Inheritance is amechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.
// git check
//...For Multiple data
class StudentsInhertance {
    name;
    age;
    hobbies;
    //--- defining contructor for accessing multiple data
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // this is call #Method
    introduce() {
        return `Hi I am ${this.name} and I am ${this.age} year old. I loved ${this.hobbies.join(', ')}`;
    }
}
//... creating new class and inherit the existing class 
class StudentsGrade extends StudentsInhertance {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    /* introduce(): string {
      return `Hi I am ${this.name} and I am ${this.age} year old. I am in Grade ${this.grade} I loved ${this.hobbies.join(', ')}`
    } */
    introduce() {
        return `${super.introduce()}.I am in Grade ${this.grade}`;
    }
}
//...Creating multiple Instances
const stud1 = new StudentsInhertance('magicianDaksh', 12, ['coding', 'cloud development']);
const stud2 = new StudentsInhertance('bob', 15, ['writing', 'jumpping']);
const stud3 = new StudentsGrade('Alice', 17, ['swimming', 'cricket'], 300);
console.log(stud3.introduce());
