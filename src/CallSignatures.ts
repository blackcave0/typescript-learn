//? lets add on function inside the object. Its more like creating a method in object 



//? Very Important => Call signature are typically used inside object Type notations to describe the shape of function within object type

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet:(country:string)=> string  // method call singnature
  // (country:string):string // pure call signature
}

const student1: Student = {
  name: 'bob',
  age: 12,
  greet : (country) => `welcome my name ${student1.name} and my age ${student1.age} year old and i am from ${country}`
}

const student2: Student = {
  name: 'madhu',
  age: 18,
  greet : (country) => `welcome my name ${student2.name} and my age ${student2.age} year old and i am from ${country}`
}

const introduction: (student1: Student) => string = (student1: Student): string => {
  const { name, age } = student1;
  return `welcome my name ${name} and my age ${age} year old`
}

console.log(introduction(student1))
console.log(student1.greet('india'));
console.log(student2.greet('india'));