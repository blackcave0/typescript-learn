//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class shape to define common properties and method that all shapes share.

//! Abstract class cannot be instantianed

//.. Defining common class using abstract method
abstract class Shape {
  //<<-- abstract property.... (i)
  /* protected color : string;
  constructor(color : string){
    this.color = color;
  } */
  //<<-- abstract property.... (ii) ...both are same
  constructor(protected color: string, public wava?:string) { }

  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(  protected color: string, protected radius: number) {
    super(color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = (): void => {
    console.log(`This is a ${this.color} circle with radius ${this.radius} and area ${this.calculateArea()}`);
    // console.log(this.wava)
  };

}

const circle = new Circle('blue', 5)
// circle.wava = 'wave'
// console.log(circle.displayArea());
circle.displayArea()