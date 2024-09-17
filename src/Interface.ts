
interface Greet {
  name: string;
  age: number,
}

const greets: Greet = {
  name: 'daksh',
  age: 28,
}

//?...[more details : https://chatgpt.com/share/8f4420a0-f174-47ac-ac0c-279ac6b16859]

// console.log(greets)

//*...Create a Product Object : 
//...Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with following data :

interface Products { name: string; price: number; quantity: number; }
const product1: Products = {
  name: "Mobile",
  price: 1000,
  quantity: 3
}

//*...Calculate Total Price :
//...Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price ( price * quantity)

const calculateTotalPric = (product: Products) => {
  return product.price * product.quantity
}

console.log(calculateTotalPric(product1));