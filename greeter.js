/**
 * The Greeter class is base class with greet method
    * @class Greeter
    * @constructor
**/
// This class has three members: a property called name, a constructor, and a method greet.
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello! Make a nice day " + greet.name);
    };
    return Greeter;
}());
var greet = new Greeter("Latha");
greet.greet();
