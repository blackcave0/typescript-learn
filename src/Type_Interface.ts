//* type
// same type name treated as one
type stud = {
  name : string;
  age : number
}

type studAddr = {
  city : string;
  state : string ;
}

type data = stud & studAddr;

const bioData : data = {
  name : 'stud1',
  age : 22,
  city : 'city1',
  state : 'state1'
}

// console.log(bioData)

//* interface
// same interface name treated as one

interface stud1  {
  name : string;
  age : number
}

interface studAddr1  {
  city : string;
  state : string ;
}

interface data1 extends stud , studAddr {}

const bioData1 : data = {
  name : 'stud1',
  age : 22,
  city : 'city1',
  state : 'state1'
}

// console.log(bioData1);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3812224440.
//.. changing the interface into class and object
class bioDataExt implements data1 {
  constructor(
    public name : string,
    public age : number,
    public city : string,
    public state : string
  ) {}
}

const bioDataExt1 = new bioDataExt('classData', 22, 'city1', 'state1')

console.log(bioDataExt1);