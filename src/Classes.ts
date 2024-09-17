//* How to create a class and also instance of class in TS

//*...A class in terms of OOP is a blueprint of creating object
//*...A class like a blueprint for creating similar things.

//...For single data
class PersonsData {
  name: string = "daksh";
  age: number = 21;
  hobbies: string[] = ["reading", "painting"]; // array of string
}

// multiple instance
const persons1: PersonsData = new PersonsData();
console.log(JSON.stringify(persons1, null));

//...For Multiple data
class Students {
  name: string;
  age: number;
  hobbies: string[];

  //--- defining contructor for accessing multiple data
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

//...Creating multiple Instances
/* const stud1:Students = new Students('magicianDaksh', 12, ['coding', 'cloud development'])

const stud2:Students = new Students('bob', 15, ['writing', 'jumpping'])

const stud3:Students = new Students('Alice', 17, ['swimming', 'cricket']) */

/* function showData<T>(data:T){
  return console.log(JSON.stringify(data, null));
}

showData(stud1)
showData(stud2) */
// showData(stud3)
// console.log(stud3);

//!--- New Method Creating Multiple Instance
const students: Students[] = [
  new Students("magicianDaksh", 12, ["coding", "cloud development"]),
  new Students("bob", 15, ["writing", "jumping"]),
  new Students("Alice", 17, ["swimming", "cricket"]),
];

students.forEach((std)=> {
  console.log(std.name, ' ', std.age , ' ', std.hobbies.join(','));
})
