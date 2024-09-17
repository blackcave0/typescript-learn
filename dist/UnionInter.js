"use strict";
//! UNION
const inputValue = (value) => {
    return value;
};
inputValue('name');
inputValue(22);
inputValue(true);
//! Practice 
//? if number then double it. if string then convert to uppercase.
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('invalid data');
    }
};
console.log(userInput(10));
console.log(userInput('nametouppercase'));
//! This is example of Union.....
const employeeUnion = {
    name: 'magicianDaksh',
    age: 23,
    //....we can add employee info too using union
    emp_id: 23490,
};
const employeeInterSection = {
    //....define all of the value which are use in person and employeeInfo object's
    name: 'magicianDaksh',
    age: 23,
    emp_id: 23423,
    department: 'IT'
};
