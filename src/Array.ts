const fruits: string[] = ['apple', 'banana', 'orange','mango'];

//! adding new element 
const newUpdatedFruits = fruits.push('kiwi')
// console.log(newUpdatedFruits);
// console.log(fruits);

//! removing data from array
// const lastData = fruits.pop()
// console.log(lastData);
// console.log(fruits);

//-> using loop
/* for(let i =0; i<fruits.length; i++){
  console.log(fruits[i]);
} */


for(const fruit of fruits){
  console.log(fruit);
}

fruits.forEach((curElem)=> console.log(curElem))