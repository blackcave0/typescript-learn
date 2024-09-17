//! UNION

const inputValue = (value: string | number | boolean) => {
  return value
}

inputValue('name')
inputValue(22)
inputValue(true)

//! Practice 
//? if number then double it. if string then convert to uppercase.
const userInput = (value: string | number) => {
  if (typeof value === 'number') {
    return value * 2
  } else if (typeof value === 'string') {
    return value.toUpperCase()
  } else {
    throw new Error('invalid data')
  }
}

console.log(userInput(10));
console.log(userInput('nametouppercase'));


//! INTERSECTION
// Intersection types allow you to combine multiple types into a single type. You use the &(ampersand) symbol to define an intersection type.

type Person = {
  name : string;
  age : number;
}
type EmployeeInfo = {
  emp_id : number;
  department : string;
}

// * Practice : Create User Profile
// You are given two typescript types: User and MyLocation. The User type represnts basic user information, while the MyLocation type contains etails about the user's location.create a function called createUserProfile that takes a User Object and a MyLocation object as arguments and prints the user's name and the city

type EmployeeDetails_Union = Person | EmployeeInfo //...define Union 

//! This is example of Union.....
const employeeUnion:EmployeeDetails_Union = {
  name : 'magicianDaksh',
  age : 23,
  //....we can add employee info too using union
  emp_id : 23490,
}

//~~! This is Intersection......... 
type EmployeeDetails_InterSection = Person & EmployeeInfo
const employeeInterSection:EmployeeDetails_InterSection = {
  //....define all of the value which are use in person and employeeInfo object's
  name : 'magicianDaksh',
  age : 23,
  emp_id : 23423,
  department : 'IT'
}
