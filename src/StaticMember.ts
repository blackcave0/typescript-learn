//? Example : Math Operation Utility - Creating a utility class to perform various mathimatical operations.

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1814739649.
/* class PersonOfaClass {
  constructor (public name:string){} 
}

const userPerSon = new PersonOfaClass("Alice");
console.log(userPerSon.name);
*/

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1485839023.
class MathOperation {
  public static PI = Math.PI;
  public static add(a: number, b: number): number {
    return a + b;
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1539355645.
  }
  public static subtract(a: number, b: number): number {
    return a - b;
  }
}
console.log(MathOperation.PI);
console.log(MathOperation.add(5, 3));
console.log(MathOperation.subtract(5, 3));
