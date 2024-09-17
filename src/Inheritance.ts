//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

//Inheritance is amechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.

// git check
//...For Multiple data
class StudentsInhertance {
  name: string;
  age: number;
  hobbies: string[];

  //--- defining contructor for accessing multiple data
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  // this is call #Method
  introduce(): string {
    return `Hi I am ${this.name} and I am ${this.age} year old. I loved ${this.hobbies.join(', ')}`
  }
}

//... creating new class and inherit the existing class 
class StudentsGrade extends StudentsInhertance {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies)
    this.grade = grade;

  }

  /* introduce(): string {
    return `Hi I am ${this.name} and I am ${this.age} year old. I am in Grade ${this.grade} I loved ${this.hobbies.join(', ')}`
  } */

  introduce(): string {
    return `${super.introduce()}.I am in Grade ${this.grade}`
  }

}

//...Creating multiple Instances
const stud1: StudentsInhertance = new StudentsInhertance('magicianDaksh', 12, ['coding', 'cloud development'])

const stud2: StudentsInhertance = new StudentsInhertance('bob', 15, ['writing', 'jumpping'])

const stud3: StudentsGrade = new StudentsGrade('Alice', 17, ['swimming', 'cricket'], 300)

console.log(stud3.introduce());