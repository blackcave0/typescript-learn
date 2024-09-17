//* Generics in typeScript allow you to create reusable componets or functions that can work with multiple data types..

/* const logAndReturn =(value: string | number)=>{
  return value
} */


// Generic Function
const logAndReturn = <Type> (value:Type) => {
  return value
}

console.log(logAndReturn<string>('Generic'));
console.log(logAndReturn<number>(2));
console.log(logAndReturn<boolean>(true));
