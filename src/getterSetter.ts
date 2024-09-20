class PersonAsGetterSetter {
  // define age here as private
  private _age: number | undefined;
  constructor(
    public name: string,
    // public age: number,
    protected hobbies: string[]
  ) {
    //! this is not valid code for validation
    /* if (this.age > 140 || this.age < 0) {
      throw new Error('Invalid age')
    } */
  }

  //...defining the setter and getter methods here...
  public set age(age: number) {
    if (age > 140 || age < 0) {
      throw new Error('Invalid age')
    }
    this._age = age
  }

  public get age(): number {
    if(this._age === undefined) {
      throw new Error('Age is not defined')
    }
    return this._age
  }

  introductionParent(): string {
    return `My name is ${this.name}, I am ${this.age} years old. my hobbies are ${this.hobbies.join(', ')}`;
  }
}



const showPersonAsGetterSetter = new PersonAsGetterSetter('John', ['Reading', 'Coding'])
showPersonAsGetterSetter.age = 15
console.log(showPersonAsGetterSetter.introductionParent())
