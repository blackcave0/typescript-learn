/*
  -> Define a TypeScript class Temperature with a private property _celsius intialised to 0.
  -> Implement a getter method getCelsius that returns the current temperature in Celsius.
  -> Implement a setter method celsius that set the temperature in celsius.
  -> Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (c*9/5) + 32.
  -> Implement a setter method fahrenheit that convert Fahrenheit to Celsius using the formula (f - 32) * 5/9.
  -> Create an instance of the Temperature Class
  -> Use the setter to set the temperature in celsius to 25 and the use the getter for fahreheit.
*/
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (newCelsius) {
            this._celsius = newCelsius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return (this._celsius * 9 / 5) + 32;
        },
        set: function (newFahrenheit) {
            this._celsius = (newFahrenheit - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 77;
console.log(temp.celsius);
