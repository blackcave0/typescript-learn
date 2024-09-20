class PersonAsShorthand {
  constructor(
    public name: string,
    public age: number,
    protected hobbies: string[]
  ) { }

  introductionParent():string {
    return `My name is ${this.name}, I am ${this.age} years old. my hobbies are ${this.hobbies.join(', ')}`;
  }
}

class StudentasShorthand extends PersonAsShorthand {
  constructor(name: string, age: number, hobbies: string[], public grade : number) {
    super(name, age, hobbies);
  }

  introductionChild():string {
    return `${super.introductionParent()} and I am in grade ${this.grade}`;
  }

  studenthobbies ():string {
    return `My hobbies are ${this.hobbies.join(', ')}`;
  }
  
}

const showPerson = new PersonAsShorthand('John', 30, ['Reading', 'Coding'])
console.log(showPerson.introductionParent())

const showStudent = new StudentasShorthand('alice', 20, ['Playing', 'Singing'], 12)
console.log(showStudent.introductionChild())
console.log(showStudent.studenthobbies())