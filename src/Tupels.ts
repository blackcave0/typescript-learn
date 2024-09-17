//? Let's consider a scenario where you want to represent a person's bio-data or basic information, including their name, age, and whether they have a driver's lincense. Using a tuple can be an appropriate choice because these three elements have a specific order an type.

type PersonInfo = readonly[string, number, boolean]

const person1: PersonInfo = ['vinod', 29, true]
const person2: PersonInfo = ['thapa', 12, false]

/* const displayPersonInfo : (person : any)=> void = (person:PersonInfo)=>{

} */

const displayPersonInfo = (person: PersonInfo) => {
  const [name, age, hasDriverLincense] = person
  console.log(`Name : ${name}, Age : ${age}, Driver's License : ${hasDriverLincense ? "Yes" : "No"}`);
}

displayPersonInfo(person2)

