"use strict";
//* Generics in typeScript allow you to create reusable componets or functions that can work with multiple data types..
/* const logAndReturn =(value: string | number)=>{
  return value
} */
// Generic Function
const logAndReturn = (value) => {
    return value;
};
console.log(logAndReturn('Generic'));
console.log(logAndReturn(2));
console.log(logAndReturn(true));
