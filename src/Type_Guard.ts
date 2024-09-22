const favHobbies =(hobby : string | string[])=> {
  // return hobby.map(()=>{}); //! this line of code is invalid

  if(typeof hobby === 'object' || Array.isArray(hobby)) {
    return hobby.map((data:string)=> {
      // return 'Hi'
      console.log(data) 
    })
  } else {
    console.log(hobby)
    // console.log('hi');
  }
}

favHobbies(['sport', 'basketball', 'hockey'])
// favHobbies('just kidding')
// JetBrains Mono, Menlo, Monaco, 