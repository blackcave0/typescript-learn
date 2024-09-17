"use strict";
const greets = {
    name: 'daksh',
    age: 28,
};
const product1 = {
    name: "Mobile",
    price: 1000,
    quantity: 3
};
//*...Calculate Total Price :
//...Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price ( price * quantity)
const calculateTotalPric = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPric(product1));
