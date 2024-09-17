"use strict";
//@ts-ignore 
/* function sum(a:number , b:number):number {
  return a + b;
}

console.log(sum(30, 20))
let unDefnum : number = NaN;
console.log(unDefnum)
console.log(typeof(unDefnum))

let bigsNumber:bigint = 9007199254740991n
console.log(bigsNumber)

let maxNumber = (Number as any).MAX_SAFE_INTEGER;
console.log(maxNumber) */
//-- any
let myfavNum = 3;
myfavNum = 'hello';
// unknown type
let favNum;
favNum = 3;
favNum = 'hello';
favNum = true;
if (typeof favNum === "number") {
    console.log(favNum + 4);
}
const firstFunction = (name, id) => {
    if (id) {
        return `welcome ${name} and your id is ${id}`;
    }
    else {
        return `welcome , ${name}`;
    }
    // remove id? argument if it is optional  
};
const myData = firstFunction('rokey', 1);
const myData1 = firstFunction('rokey');
console.log(myData);
console.log(myData1);
//---- ARRAY 
const myArr = [1, 2, 3];
// using the array Contructor:
const myArr1 = new Array(1, 2, 3, 4);
// using the Array.of method;
const name2 = Array.of("name", 'fname');
