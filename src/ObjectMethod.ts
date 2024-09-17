//* In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in Es6) that maps to a value.

const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    area: string;
    flat_no: number;
    apartment: string;
    state: string;
    country: string
  }
  // or
  // address : any;


} = {
  name: 'person name',
  age: 12,
  isStudent: true,
  address: {
    city: 'Lucknow',
    area: 'Maharish Nagar',
    flat_no: 12,
    apartment: 'CyberHight',
    state: 'Uttar Pradesh',
    country: "India"
  }
}

//::________TYPE ALICE_______
// In typeScript, a type alice is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code, Type aliases provide better readability, organization, and abstraction of complex types 

// To define a type alias, you use the type keyword followed by the alias name and the type defination;

type Employee = {
  name : string;
  age : number;
  blod_group : string;
  email_id? : string; // optional property use -> ?
  isEmployee : boolean;
}

const emp1:Employee = {
  name : 'andrew',
  age : 34,
  blod_group : 'o+',
  isEmployee : true
}

const emp2:Employee = {
  name : 'bob',
  age : 24,
  blod_group : 'ab+',
  email_id : 'bob@gmail.com',
  isEmployee : true
}


//[#] Define an interface or type representing a product with properties for name, price, and quantity, Create a product object with the following data:

type Product = {
  name : string;
  price : number;
  quantity : number;
}

const product:Product = {
  name : "Laptop",
  price : 1000,
  quantity : 3
}


//! Calculate Total Price
// Given the product object from the previous question, write a function called calculateTotalPrice that calculate and returns the total price (price * quantity) of the product;

const calculateTotalPrice =(product:Product)=> {
  return product.price * product.quantity
}

console.log(calculateTotalPrice(product))