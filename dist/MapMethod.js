"use strict";
const number = [1, 2, 3, 4, 5];
//! Map Method
// The map method creates a new array by applying a provide function to each element of the original array. It transforms each elements and returns a new array with transformed values.
//? 1: Doubling each number
const doubleData = number.map((curValue) => curValue * 2);
// console.log(doubleData)
//? 2: Converting numbers to string 
const numberToString = number.map((curElm) => curElm.toString());
// console.log(numberToString)
//! Filter Method
//? Filtering even numbers
const evenNumber = number.filter((curElm) => curElm % 2 === 0);
// console.log(evenNumber);
//? Filtering numbers grater than 3
const numGt = number.filter((curElm) => curElm > 3);
console.log(numGt);
//## solve first question ----
const personName = ['Alice', 'bob', 'joe', 'Andrew', 'Jackson'];
const nameGTfour = personName.filter((val) => val.length > 4);
// console.log(nameGTfour);
//## solve second question ----
const nameStartWithA = personName.filter((val) => val.startsWith('A'));
// console.log(nameStartWithA);
