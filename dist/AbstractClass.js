"use strict";
//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class shape to define common properties and method that all shapes share.
//! Abstract class cannot be instantianed
//.. Defining common class using abstract method
class Shape {
    color;
    wava;
    //<<-- abstract property.... (i)
    /* protected color : string;
    constructor(color : string){
      this.color = color;
    } */
    //<<-- abstract property.... (ii) ...both are same
    constructor(color, wava) {
        this.color = color;
        this.wava = wava;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius} and area ${this.calculateArea()}`);
        // console.log(this.wava)
    };
}
const circle = new Circle('blue', 5);
// circle.wava = 'wave'
// console.log(circle.displayArea());
circle.displayArea();
