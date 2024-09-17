"use strict";
//* In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in Es6) that maps to a value.
const person = {
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
};
const emp1 = {
    name: 'andrew',
    age: 34,
    blod_group: 'o+',
    isEmployee: true
};
const emp2 = {
    name: 'bob',
    age: 24,
    blod_group: 'ab+',
    email_id: 'bob@gmail.com',
    isEmployee: true
};
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 3
};
//! Calculate Total Price
// Given the product object from the previous question, write a function called calculateTotalPrice that calculate and returns the total price (price * quantity) of the product;
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
